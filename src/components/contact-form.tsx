"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

const inputClassName =
  "rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-sm font-normal text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300 disabled:cursor-not-allowed disabled:opacity-70";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidOptionalPhone(value: string) {
  return !value || value.startsWith("+");
}

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setStatusMessage("");

    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const website = String(formData.get("website") ?? "").trim();

    if (!name) {
      setStatus("error");
      setStatusMessage("Please enter your name.");
      return;
    }

    if (!email) {
      setStatus("error");
      setStatusMessage("Please enter your email address.");
      return;
    }

    if (!isValidEmail(email)) {
      setStatus("error");
      setStatusMessage(
        "Please enter a valid email address, for example name@example.com.",
      );
      return;
    }

    if (!isValidOptionalPhone(phone)) {
      setStatus("error");
      setStatusMessage(
        "Please start the phone number with a country code, for example +33 0 00 00 00 00.",
      );
      return;
    }

    if (!message) {
      setStatus("error");
      setStatusMessage("Please enter a message.");
      return;
    }

    const payload = {
      name,
      email,
      phone,
      message,
      website,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = (await response
        .json()
        .catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(result?.message ?? "The message could not be sent.");
      }

      form.reset();
      setStatus("success");
      setStatusMessage("Message sent. I will get back to you soon.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "The message could not be sent.",
      );
    }
  }

  const isSending = status === "sending";

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <input
        name="website"
        type="text"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-white">
          Name *
          <input
            name="name"
            type="text"
            required
            disabled={isSending}
            className={inputClassName}
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-white">
          E-mail *
          <input
            name="email"
            type="email"
            required
            disabled={isSending}
            className={inputClassName}
            placeholder="your.email@example.com"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-white">
        <span>
          Phone number{" "}
          <span className="font-normal text-slate-400">(optional)</span>
        </span>
        <input
          name="phone"
          type="tel"
          disabled={isSending}
          className={inputClassName}
          placeholder="+33 0 00 00 00 00"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-white">
        Message *
        <textarea
          name="message"
          required
          rows={5}
          disabled={isSending}
          className={`${inputClassName} resize-y`}
          placeholder="Tell me about your project or opportunity"
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={isSending}
          className="w-fit shrink-0 whitespace-nowrap rounded-lg bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSending ? "Sending..." : "Send message"}
        </button>
        {statusMessage ? (
          <p
            className={`text-sm ${
              status === "success" ? "text-cyan-200" : "text-red-300"
            }`}
            role="status"
          >
            {statusMessage}
          </p>
        ) : null}
      </div>
      <p className="text-right text-xs text-slate-400">* Required field</p>
    </form>
  );
}
