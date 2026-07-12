import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Lucas Frery",
  description:
    "Privacy policy for the Lucas Frery hardware electronics portfolio website.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#071225] text-slate-100">
      <header className="border-b border-white/10 px-5 py-5">
        <nav className="mx-auto flex max-w-4xl items-center justify-between">
          <Link href="/" className="font-semibold text-white">
            Lucas Frery
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
          >
            Back to portfolio
          </Link>
        </nav>
      </header>

      <section className="px-5 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase text-cyan-300">
            Privacy Policy
          </p>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-slate-400">
            Last updated: July 12, 2026
          </p>

          <div className="mt-10 space-y-8 text-base leading-7 text-slate-300">
            <section>
              <h2 className="text-2xl font-semibold text-white">
                1. Who Is Responsible For This Website
              </h2>
              <p className="mt-3">
                This website is operated by Lucas Frery. Lucas
                Fr&eacute;ry is the data controller for personal data collected
                through this website. For any privacy question or request, you
                can contact me at{" "}
                <a
                  href="mailto:lucas.frery@gmail.com"
                  className="font-semibold text-cyan-300 hover:text-cyan-200"
                >
                  lucas.frery@gmail.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">
                2. Personal Data Collected
              </h2>
              <p className="mt-3">
                When you use the contact form, this website collects the
                information you choose to submit:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number, if you provide one</li>
                <li>Message content</li>
              </ul>
              <p className="mt-3">
                The form also includes a hidden anti-spam field. This field is
                used only to help detect automated spam submissions.
              </p>
              <p className="mt-3">
                Please do not send sensitive personal data through the contact
                form, such as health information, official identification
                numbers, financial information, or other confidential personal
                details that are not needed for your message.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">
                3. Required And Optional Fields
              </h2>
              <p className="mt-3">
                Name, email address, and message content are required so that I
                can understand and reply to your request. If you do not provide
                these required fields, the contact form cannot send your
                message. Phone number is optional and is used only if you choose
                to provide it as an additional way to contact you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">
                4. Purpose Of Processing
              </h2>
              <p className="mt-3">
                The data submitted through the contact form is used only to
                receive your message and reply to your request, opportunity or
                project inquiry. The hidden anti-spam field is used only to
                reduce automated spam.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">
                5. Legal Basis
              </h2>
              <p className="mt-3">
                The processing is based on legitimate interest in receiving and
                replying to professional messages, project inquiries, and
                opportunities sent through the website. Where a message relates
                to a possible contract, job opportunity, or collaboration, the
                processing may also be necessary to take steps before entering
                into a contract. The anti-spam field is processed on the basis
                of legitimate interest in maintaining the security and proper
                operation of the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">
                6. Recipients And Email Delivery Provider
              </h2>
              <p className="mt-3">
                Contact form messages are sent by email using Resend, an email
                delivery service. Resend may process the submitted message data
                only as needed to deliver the email.
              </p>
              <p className="mt-3">
                Resend may process personal data outside the European Economic
                Area, including in the United States. More information is
                available in Resend&apos;s{" "}
                <a
                  href="https://resend.com/legal/privacy-policy"
                  className="font-semibold text-cyan-300 hover:text-cyan-200"
                  rel="noreferrer"
                  target="_blank"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="https://resend.com/legal/dpa"
                  className="font-semibold text-cyan-300 hover:text-cyan-200"
                  rel="noreferrer"
                  target="_blank"
                >
                  Data Processing Addendum
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">
                7. Retention
              </h2>
              <p className="mt-3">
                Contact messages are kept for up to 24 months after the last
                exchange, unless a longer retention period is necessary to
                protect legal rights, handle an ongoing professional
                relationship, or comply with a legal obligation. You can ask for
                your data to be deleted at any time, subject to any lawful
                reason to keep it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">
                8. Cookies And Analytics
              </h2>
              <p className="mt-3">
                This website does not intentionally use tracking cookies or
                analytics tools. If this changes, this privacy policy should be
                updated before those tools are activated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">
                9. Automated Decision-Making
              </h2>
              <p className="mt-3">
                This website does not use automated decision-making or profiling
                based on personal data submitted through the contact form.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">
                10. Your Rights
              </h2>
              <p className="mt-3">
                Depending on your location and applicable law, including the
                GDPR where it applies, you may have the right to access,
                correct, delete, restrict or object to the processing of your
                personal data. You may also ask for a copy of the personal data
                related to you.
              </p>
              <p className="mt-3">
                To exercise these rights, contact{" "}
                <a
                  href="mailto:lucas.frery@gmail.com"
                  className="font-semibold text-cyan-300 hover:text-cyan-200"
                >
                  lucas.frery@gmail.com
                </a>
                .
              </p>
              <p className="mt-3">
                If you believe your data protection rights have not been
                respected, you may also lodge a complaint with your local data
                protection authority. In France, this authority is the{" "}
                <a
                  href="https://www.cnil.fr/"
                  className="font-semibold text-cyan-300 hover:text-cyan-200"
                  rel="noreferrer"
                  target="_blank"
                >
                  CNIL
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">
                11. Security
              </h2>
              <p className="mt-3">
                Reasonable technical measures are used to protect messages sent
                through the website. However, no internet transmission or email
                delivery system can be guaranteed to be completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white">
                12. Changes To This Policy
              </h2>
              <p className="mt-3">
                This policy may be updated when the website, contact form or
                third-party services change. The update date at the top of this
                page indicates the latest version.
              </p>
            </section>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-3 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Lucas Frery. All rights reserved.</p>
          <Link
            href="/"
            className="font-semibold text-cyan-300 transition hover:text-cyan-200"
          >
            Back to portfolio
          </Link>
        </div>
      </footer>
    </main>
  );
}
