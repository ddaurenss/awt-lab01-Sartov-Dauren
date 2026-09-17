import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-20 pb-12">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-red-100 bg-gradient-to-br from-white via-red-50/40 to-rose-100/30 p-8 md:p-16 shadow-xl shadow-red-500/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block px-3.5 py-1 text-xs font-bold tracking-widest text-red-600 uppercase bg-white border border-red-200 rounded-full shadow-xs">
              Exclusive Bookshop &amp; Club
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-900 leading-[1.1]">
              Stories That <br />
              <span className="text-red-600">Stay With You</span>
            </h1>
            <p className="text-zinc-600 text-lg leading-relaxed max-w-xl">
              Curated fiction, timeless masterworks, and modern engineering classics. Explore our catalog, discover author synopses, and build your home library.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/25 hover:bg-red-700 active:scale-95 transition-all"
              >
                Browse Books →
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-6 py-3.5 text-sm font-bold text-zinc-700 hover:border-red-300 hover:text-red-600 transition-colors shadow-xs"
              >
                About Store
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl border border-red-100 shadow-md transform -rotate-1 hover:rotate-0 transition-transform">
                <img
                  src="/books/crime.svg"
                  alt="Crime and Punishment"
                  className="w-full h-48 object-cover bg-zinc-900"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-red-100 shadow-md transform rotate-2 hover:rotate-0 transition-transform">
                <img
                  src="/books/1984.svg"
                  alt="1984"
                  className="w-full h-48 object-cover bg-zinc-900"
                />
              </div>
            </div>
            <div className="space-y-4 pt-6">
              <div className="overflow-hidden rounded-2xl border border-red-100 shadow-md transform rotate-1 hover:rotate-0 transition-transform">
                <img
                  src="/books/margarita.svg"
                  alt="The Master and Margarita"
                  className="w-full h-48 object-cover bg-zinc-900"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-red-100 shadow-md transform -rotate-2 hover:rotate-0 transition-transform">
                <img
                  src="/books/clean-code.svg"
                  alt="Clean Code"
                  className="w-full h-48 object-cover bg-zinc-900"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Advantages */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-red-600">
            Why Readers Choose Us
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900">
            Thoughtfully Selected Editions
          </h2>
          <p className="text-zinc-600 text-sm">
            Quality paperbacks, premium hardcovers, and verified translations only.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm space-y-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 font-black text-xl">
              ✦
            </span>
            <h3 className="text-lg font-bold text-zinc-900">Curated Quality</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Every book in our catalog is handpicked by our editorial team for literary depth and intellectual value.
            </p>
          </div>

          <div className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm space-y-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 font-black text-xl">
              ⚡
            </span>
            <h3 className="text-lg font-bold text-zinc-900">Swift Express Delivery</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Carefully packed in eco-friendly protective wrappers to keep each book mint and undamaged.
            </p>
          </div>

          <div className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm space-y-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 font-black text-xl">
              ❤
            </span>
            <h3 className="text-lg font-bold text-zinc-900">Community Favorites</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Track real-time reader popularity, explore community picks, and save titles to your personal wishlist.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Featured Bestsellers Showcase */}
      <section className="rounded-3xl border border-red-100 bg-white p-8 md:p-12 shadow-sm space-y-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-red-600">
              Staff Picks
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-900">
              Trending Editions
            </h2>
          </div>
          <Link
            href="/courses"
            className="text-sm font-bold text-red-600 hover:text-red-700 transition-colors"
          >
            View All Editions →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group rounded-2xl border border-zinc-200/80 p-4 hover:border-red-400 hover:shadow-md transition-all">
            <div className="overflow-hidden rounded-xl bg-zinc-900 h-52 mb-4">
              <img
                src="/books/margarita.svg"
                alt="The Master and Margarita"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-bold text-red-600 uppercase">Fiction</span>
              <span className="text-sm font-extrabold text-zinc-900">$28</span>
            </div>
            <h4 className="font-bold text-zinc-900 text-base group-hover:text-red-600 transition-colors">
              The Master &amp; Margarita
            </h4>
            <p className="text-xs text-zinc-500 mt-1">Mikhail Bulgakov</p>
          </div>

          <div className="group rounded-2xl border border-zinc-200/80 p-4 hover:border-red-400 hover:shadow-md transition-all">
            <div className="overflow-hidden rounded-xl bg-zinc-900 h-52 mb-4">
              <img
                src="/books/1984.svg"
                alt="1984"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-bold text-red-600 uppercase">Dystopia</span>
              <span className="text-sm font-extrabold text-zinc-900">$22</span>
            </div>
            <h4 className="font-bold text-zinc-900 text-base group-hover:text-red-600 transition-colors">
              Nineteen Eighty-Four
            </h4>
            <p className="text-xs text-zinc-500 mt-1">George Orwell</p>
          </div>

          <div className="group rounded-2xl border border-zinc-200/80 p-4 hover:border-red-400 hover:shadow-md transition-all">
            <div className="overflow-hidden rounded-xl bg-zinc-900 h-52 mb-4">
              <img
                src="/books/clean-code.svg"
                alt="Clean Code"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-bold text-red-600 uppercase">Engineering</span>
              <span className="text-sm font-extrabold text-zinc-900">$35</span>
            </div>
            <h4 className="font-bold text-zinc-900 text-base group-hover:text-red-600 transition-colors">
              Clean Code Handbook
            </h4>
            <p className="text-xs text-zinc-500 mt-1">Robert C. Martin</p>
          </div>
        </div>
      </section>

      {/* 4. Newsletter Subscription Banner */}
      <section className="rounded-3xl border border-red-200 bg-red-600 p-8 md:p-12 text-white shadow-xl shadow-red-600/20">
        <div className="max-w-2xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-red-200">
            Join BookHouse Club
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            Get Weekly Book Recommendations
          </h2>
          <p className="text-red-100 text-sm md:text-base leading-relaxed">
            Subscribe to our literary digest. Receive author spotlights, rare edition release alerts, and private discounts directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-xl bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-zinc-900"
            />
            <button className="rounded-xl bg-zinc-950 px-6 py-3 text-sm font-bold text-white hover:bg-zinc-800 active:scale-95 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* 5. Contact & Information Footer */}
      <footer className="rounded-3xl border border-zinc-200 bg-white p-8 md:p-12 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-zinc-100">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-red-600 text-white font-black text-xs">
                B
              </span>
              <span className="font-extrabold text-lg text-zinc-900">
                Book<span className="text-red-600">House</span>
              </span>
            </div>
            <p className="text-xs text-zinc-500 max-w-sm leading-relaxed">
              Your premier digital bookstore and literary catalog. Discover, read, and save literature that stands the test of time.
            </p>
          </div>

          <div className="space-y-2 text-sm">
            <h4 className="font-bold text-zinc-900">Navigation</h4>
            <ul className="space-y-1.5 text-xs text-zinc-500">
              <li><Link href="/" className="hover:text-red-600 transition-colors">Home</Link></li>
              <li><Link href="/courses" className="hover:text-red-600 transition-colors">All Books</Link></li>
              <li><Link href="/about" className="hover:text-red-600 transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div className="space-y-2 text-sm">
            <h4 className="font-bold text-zinc-900">Contact Us</h4>
            <div className="space-y-1.5 text-xs text-zinc-500">
              <p>Email: <strong className="text-zinc-700">38357@iitu.edu.kz</strong></p>
              <p>Phone: <strong className="text-zinc-700">+7 (706) 415-62-78</strong></p>
              <p>Hours: Mon – Sat (9:00 – 20:00)</p>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© 2026 BookHouse Project. Built for Advanced Web Technologies Course.</p>
          <p className="font-medium text-zinc-500">Next.js 16 App Router &amp; Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}