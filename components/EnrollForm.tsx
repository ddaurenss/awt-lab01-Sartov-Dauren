"use client";

import { useState, type FormEvent } from "react";
import type { Enrollment } from "@/lib/courses";

type Status = "idle" | "sending" | "done" | "rejected" | "error";

export function EnrollForm({ courseId }: { courseId: string }) {
  const [studentName, setStudentName] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/enrollments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId, studentName }),
      });
      if (res.status === 422) {
        const body = await res.json();
        setMessage(body.detail[0].msg);
        setStatus("rejected");
        return;
      }
      if (!res.ok) throw new Error(`API error: ${res.status}`);
      const enrollment: Enrollment = await res.json();
      setMessage(`Enrollment number: ${enrollment.id}`);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return <form onSubmit={handleSubmit} className="flex max-w-sm flex-col gap-3">
    <label htmlFor="studentName">Your name</label>
    <input id="studentName" value={studentName} onChange={e => setStudentName(e.target.value)} className="rounded-md border px-3 py-2" />
    <button type="submit" disabled={status === "sending"} className="rounded-md bg-red-600 px-4 py-2 text-white disabled:opacity-50">{status === "sending" ? "Sending…" : "Enroll"}</button>
    <div aria-live="polite">
      {status === "done" && <p>You are enrolled. {message}</p>}
      {status === "rejected" && <p className="text-red-600">The server rejected the data: {message}</p>}
      {status === "error" && <p role="alert" className="text-red-600">Could not submit the enrollment</p>}
    </div>
  </form>;
}
