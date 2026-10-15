# BookHouse — Course Catalog

Next.js App Router and TypeScript project, adapted into a book catalog. The frontend uses local data from `lib/courses.ts`; the FastAPI backend is a separate Lab 4 project.

## Run locally

Install Node.js LTS, then run inside `course-catalog`:

```bash
npm install
npm run dev
```

Open http://localhost:3000. The catalog is at `/courses`, book details at `/courses/{id}`, and project information at `/about`.

## Lab 2 — Tailwind CSS and shadcn/ui

- Configured Tailwind CSS and shadcn/ui (`components.json`).
- Rebuilt `CourseCard` with `Card`, `CardHeader`, `CardTitle`, `CardContent`, and `Button` (`variant="ghost"`, `size="sm"`).
- Kept `CourseCard` as a Server Component, without `"use client"`.
- Added a responsive catalog grid: one column below 640px, two from 640px, three from 1024px.
- Added visible card border and shadow effects on hover.
- Styled navigation with spacing, padded links, hover and keyboard focus states, and separation from page content. Navigation wraps when space is limited.
- Global styles and theme variables are in `app/globals.css`; component styles use Tailwind classes.

## Verification

```bash
npm run build
npm run lint
```

For manual responsive verification, open `/courses` in browser DevTools device mode. Check widths 375px, 800px, and 1280px: expect 1, 2, and 3 columns, respectively, with no horizontal overflow. Check 640px too: two columns should appear. Hover over a card to see its shadow and red border, then open it to check navigation.

The detail-page like button uses client-side React state. Its count resets on reload; no database persistence or newsletter subscription service is implemented.
