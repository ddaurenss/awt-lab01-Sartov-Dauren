export default function AboutPage() {
  return (
    <div className="max-w-2xl space-y-4">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        About This Project
      </h1>
      <p className="text-slate-600 leading-relaxed">
        This Course Catalog is developed as part of the “Advanced Web Technologies” course.
      </p>
      <p className="text-slate-600 leading-relaxed">
        The project demonstrates modern Next.js 16 App Router architecture, TypeScript integration, 
        Server vs. Client Components separation, and static generation.
      </p>
    </div>
  );
}