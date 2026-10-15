import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "BookHouse | Curated Book Catalog",
  description: "Advanced Web Technologies Semester Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="min-h-screen bg-slate-50/50 text-zinc-900 flex flex-col antialiased selection:bg-red-500 selection:text-white">
        <header className="sticky top-0 z-50 border-b border-red-100 bg-white/90 backdrop-blur-md shadow-xs">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 min-h-16 py-2 flex flex-wrap items-center justify-between gap-2">
            <Link href="/" className="flex items-center gap-2.5 group">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 text-white font-black text-sm shadow-sm group-hover:scale-105 transition-transform">
                B
              </span>
              <span className="font-extrabold text-xl tracking-tight text-zinc-900">
                Book<span className="text-red-600">House</span>
              </span>
            </Link>
            <div className="flex gap-1 sm:gap-2 text-sm font-semibold tracking-wide">
              <Link href="/" className="inline-flex items-center rounded-md px-3 py-2 text-zinc-600 hover:bg-red-50 hover:text-red-600 focus-visible:outline-2 focus-visible:outline-red-600 transition-colors">
                Home
              </Link>
              <Link href="/courses" className="inline-flex items-center rounded-md px-3 py-2 text-zinc-600 hover:bg-red-50 hover:text-red-600 focus-visible:outline-2 focus-visible:outline-red-600 transition-colors">
                Books
              </Link>
              <Link href="/about" className="inline-flex items-center rounded-md px-3 py-2 text-zinc-600 hover:bg-red-50 hover:text-red-600 focus-visible:outline-2 focus-visible:outline-red-600 transition-colors">
                About
              </Link>
            </div>
          </nav>
        </header>

        <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}