# Lucas Frery — Engineering Portfolio

Professional portfolio website presenting electronics hardware, embedded
systems, PCB design, automotive validation, and engineering case studies.

## Technology

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4

## Local development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run build
```

## Project structure

```text
public/                 Static images and downloadable files
src/
  app/                  Routes, layouts, styles, and API handlers
  components/           Reusable React components
  data/                 Portfolio project content
```

Local environment variables belong in `.env.local`. The contact form expects
`RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and optionally `CONTACT_TO_EMAIL`.
