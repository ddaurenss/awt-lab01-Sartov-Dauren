export type Course = {
  id: string;
  title: string;
  description: string;
  credits: number;
  isElective: boolean;
  likes: number;
  image: string;
};

const courses: Course[] = [
  {
    id: "crime-and-punishment",
    title: "Crime and Punishment",
    description: "Fyodor Dostoevsky's psychological masterpiece exploring guilt, morality, and redemption in Saint Petersburg.",
    credits: 25,
    isElective: false,
    likes: 142,
    image: "/books/crime.svg",
  },
  {
    id: "the-master-and-margarita",
    title: "The Master and Margarita",
    description: "Mikhail Bulgakov's brilliant satire featuring the Devil's visit to Moscow and an enduring story of love and truth.",
    credits: 28,
    isElective: true,
    likes: 215,
    image: "/books/margarita.svg",
  },
  {
    id: "1984-george-orwell",
    title: "Nineteen Eighty-Four",
    description: "George Orwell's chilling dystopian vision of totalitarianism, ubiquitous surveillance, and state censorship.",
    credits: 22,
    isElective: true,
    likes: 189,
    image: "/books/1984.svg",
  },
  {
    id: "dune-frank-herbert",
    title: "Dune",
    description: "Frank Herbert's monumental sci-fi saga of desert planet Arrakis, spice trade, politics, and ancient prophecy.",
    credits: 30,
    isElective: true,
    likes: 174,
    image: "/books/dune.svg",
  },
  {
    id: "clean-code",
    title: "Clean Code",
    description: "Robert C. Martin's handbook of agile software craftsmanship, code refactoring, and engineering patterns.",
    credits: 35,
    isElective: false,
    likes: 98,
    image: "/books/clean-code.svg",
  },
  {
    id: "the-great-gatsby",
    title: "The Great Gatsby",
    description: "F. Scott Fitzgerald's jazz-age story of obsessive love, wealth, social illusion, and tragic ambition.",
    credits: 20,
    isElective: false,
    likes: 112,
    image: "/books/gatsby.svg",
  },
];

function delay<T>(value: T, ms = 200): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

export async function getCourses(): Promise<Course[]> {
  return delay(courses);
}

export async function getCourse(id: string): Promise<Course | undefined> {
  return delay(courses.find((c) => c.id === id));
}