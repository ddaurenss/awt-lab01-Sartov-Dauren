import Link from "next/link";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

const localCovers: Record<string, string> = {
  "crime-and-punishment": "/books/crime.svg",
  "the-master-and-margarita": "/books/margarita.svg",
  "1984-george-orwell": "/books/1984.svg",
  "dune-frank-herbert": "/books/dune.svg",
  "clean-code": "/books/clean-code.svg",
  "the-great-gatsby": "/books/gatsby.svg",
};

export default function CourseCard({
  id,
  title,
  description,
  credits,
  likes,
}: CourseCardProps) {
  const imageUrl = localCovers[id] || "/books/crime.svg";

  return (
    <Link
      href={`/courses/${id}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-red-400 hover:shadow-lg hover:shadow-red-600/10"
    >
      <div className="relative h-60 w-full overflow-hidden bg-zinc-900">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 right-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-red-600 shadow-xs border border-red-100 backdrop-blur-xs">
          ${credits}
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between p-5 space-y-3">
        <div>
          <h2 className="text-lg font-bold text-zinc-900 group-hover:text-red-600 transition-colors">
            {title}
          </h2>
          <p className="mt-1.5 text-sm text-zinc-600 line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-zinc-100 pt-3 text-xs">
          <span className="font-bold text-red-600">View details →</span>
          <span className="font-semibold text-zinc-500">❤ {likes}</span>
        </div>
      </div>
    </Link>
  );
}