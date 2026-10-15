import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export type CourseCardProps = { // Card, CardHeader, CardTitle, CardContent и Button вместо Див 
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};
// Добавлен ховер-эффект через
export default function CourseCard({
  id, 
  title,
  description,
  credits,
  likes,
}: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`} className="block h-full">
      <Card className="h-full flex flex-col justify-between border border-border ring-0 hover:shadow-md hover:border-red-300 transition duration-200">
        <CardHeader>
          <CardTitle className="text-lg font-bold leading-snug">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 flex-1 justify-between">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {description}
          </p>
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <span className="text-sm font-semibold">${credits}</span>
            <Button variant="ghost" size="sm" className="pointer-events-none text-xs">
              ❤️ {likes}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}