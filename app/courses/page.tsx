import { getCourses } from "@/lib/courses";
import CourseCard from "@/components/CourseCard";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <span className="inline-block text-xs uppercase tracking-widest font-bold text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
          Featured Collection
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900">
          Book Catalog
        </h1>
        <p className="text-zinc-600">
          Explore timeless fiction, sci-fi classics, and essential software engineering reads.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            description={course.description}
            credits={course.credits}
            likes={course.likes}
          />
        ))}
      </div>
    </div>
  );
}