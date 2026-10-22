import Link from "next/link";
import { notFound } from "next/navigation";
import { getCourse } from "@/lib/courses";
import { EnrollForm } from "@/components/EnrollForm";
import LikeButton from "@/components/LikeButton";

type CoursePageProps = {
  params: Promise<{ id: string }>;
};

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto py-6">
      <div className="mb-4">
        <Link
          href="/courses"
          className="text-xs font-semibold text-zinc-500 hover:text-red-600 transition-colors"
        >
          ← Back to courses
        </Link>
      </div>

      <article className="rounded-3xl border border-red-100 bg-white p-6 sm:p-8 shadow-xl shadow-red-500/5 flex flex-col sm:flex-row items-center sm:items-start gap-8">
        {/* Контент справа: заголовок, описание, цена и лайк */}
        <div className="flex flex-col justify-between flex-1 text-center sm:text-left min-h-[230px] w-full">
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight">
              {course.title}
            </h1>
            <p className="text-zinc-600 text-sm leading-relaxed">
              {course.description}
            </p>
          </div>

          <div className="pt-6 mt-auto border-t border-zinc-100 flex items-center justify-between">
            <span className="text-xl font-black text-zinc-900">
              {course.credits} credits
            </span>
            <LikeButton courseId={course.id} initialLikes={course.likes} />
          </div>
        </div>
      </article>
      <section className="mt-8 rounded-xl border bg-white p-6 space-y-4">
        <h2 className="text-xl font-bold">Enroll in this course</h2>
        <EnrollForm courseId={course.id} />
      </section>
    </div>
  );
}