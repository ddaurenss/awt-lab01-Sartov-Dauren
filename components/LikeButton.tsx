"use client";

import { useState } from "react";
import type { Course } from "@/lib/courses";

export default function LikeButton({ courseId, initialLikes }: { courseId: string; initialLikes: number }) {
  const [likes, setLikes] = useState(initialLikes);
  const [pending, setPending] = useState(false);
  const [failed, setFailed] = useState(false);

  async function handleClick() {
    setPending(true);
    setFailed(false);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses/${encodeURIComponent(courseId)}/like`, { method: "POST" });
      if (!res.ok) throw new Error(`API error: ${res.status}`);
      const course: Course = await res.json();
      setLikes(course.likes);
    } catch {
      setFailed(true);
    } finally {
      setPending(false);
    }
  }

  return <div>
    <button onClick={handleClick} disabled={pending} className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-red-600 disabled:opacity-50" aria-label={`Like course: ${likes} likes`}>❤ {likes}</button>
    {failed && <p role="alert" className="text-red-600">Failed to like the course</p>}
  </div>;
}
