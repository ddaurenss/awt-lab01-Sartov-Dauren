"use client";

import { useEffect } from "react";

export default function CoursesError({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return <section className="space-y-4 rounded-xl border bg-white p-6">
    <h1 className="text-2xl font-bold">Something went wrong</h1>
    <p>Could not load the data. The backend may not be running.</p>
    <button onClick={() => retry()} className="rounded-md border px-4 py-2">Try again</button>
  </section>;
}
