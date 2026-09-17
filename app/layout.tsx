import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

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
    <html lang="en">
      <body className="min-h-screen bg-slate-50/50 text-zinc-900 flex flex-col antialiased selection:bg-red-500 selection:text-white">
        <header className="sticky top-0 z-50 border-b border-red-100 bg-white/90 backdrop-blur-md shadow-xs">
          <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 group">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 text-white font-black text-sm shadow-sm group-hover:scale-105 transition-transform">
                B
              </span>
              <span className="font-extrabold text-xl tracking-tight text-zinc-900">
                Book<span className="text-red-600">House</span>
              </span>
            </Link>
            <div className="flex gap-8 text-sm font-semibold tracking-wide">
              <Link href="/" className="text-zinc-600 hover:text-red-600 transition-colors">
                Home
              </Link>
              <Link href="/courses" className="text-zinc-600 hover:text-red-600 transition-colors">
                Books
              </Link>
              <Link href="/about" className="text-zinc-600 hover:text-red-600 transition-colors">
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