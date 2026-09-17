import Link from "next/link";
import { notFound } from "next/navigation";
import { getCourse, getCourses } from "@/lib/courses";
import LikeButton from "@/components/LikeButton";

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({
    id: course.id,
  }));
}

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
          ← Back to books
        </Link>
      </div>

      <article className="rounded-3xl border border-red-100 bg-white p-6 sm:p-8 shadow-xl shadow-red-500/5 flex flex-col sm:flex-row items-center sm:items-start gap-8">
        {/* Фото книги слева */}
        <div
          style={{ width: "160px", minWidth: "160px", height: "230px" }}
          className="overflow-hidden rounded-xl border border-zinc-200 shadow-md bg-zinc-950 shrink-0"
        >
          <img
            src={course.image || "/books/crime.svg"}
            alt={course.title}
            className="w-full h-full object-cover"
          />
        </div>

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
              ${course.credits}
            </span>
            <LikeButton initialLikes={course.likes} />
          </div>
        </div>
      </article>
    </div>
  );
}