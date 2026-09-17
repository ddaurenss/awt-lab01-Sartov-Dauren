import Link from "next/link";

export default function CourseNotFound() {
  return (
    <div className="text-center py-12 space-y-4">
      <h2 className="text-2xl font-bold text-slate-800">Course not found</h2>
      <p className="text-slate-600">The requested course does not exist in our catalog.</p>
      <Link
        href="/courses"
        className="inline-block mt-2 rounded bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition-colors"
      >
        Back to Courses
      </Link>
    </div>
  );
}