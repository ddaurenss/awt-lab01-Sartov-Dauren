"use client";

import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";
import type { Course } from "@/lib/courses";

async function fetcher(url: string): Promise<Course[]> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

export function ElectiveFilter() {
  const [onlyElective, setOnlyElective] = useState(false);
  const query = onlyElective ? "?is_elective=true" : "";
  const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/courses${query}`, fetcher);
  return <div className="space-y-5">
    <label className="flex items-center gap-2"><input type="checkbox" checked={onlyElective} onChange={e => setOnlyElective(e.target.checked)} />Electives only</label>
    {error && <p role="alert" className="text-red-600">Failed to load courses</p>}
    {isLoading && <p>Loading…</p>}
    {data && <ul className="space-y-3">{data.map(c => <li key={c.id} className="rounded-xl border bg-white p-4"><Link href={`/courses/${c.id}`} className="font-semibold hover:text-red-600">{c.title}</Link> — {c.credits} cr.{c.isElective && " · elective"}</li>)}</ul>}
  </div>;
}
