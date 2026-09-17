"use client";

import { useState } from "react";

type LikeButtonProps = {
  initialLikes: number;
};

export default function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);

  return (
    <button
      onClick={() => setLikes((prev) => prev + 1)}
      className="inline-flex items-center gap-2 rounded-lg bg-red-950/40 border border-red-700/60 px-4 py-2 text-sm font-bold text-red-400 shadow-[0_0_12px_rgba(220,38,38,0.2)] hover:bg-red-900/50 hover:text-white active:scale-95 transition-all"
    >
      <span className="text-red-500">❤</span>
      <span>{likes}</span>
    </button>
  );
}