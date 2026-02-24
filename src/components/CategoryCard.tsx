import type { Category } from "@/data/types";

interface Props {
  category: Category;
}

export function CategoryCard({ category }: Props) {
  return (
    <article className="rounded-3xl border border-black/5 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
      <div className="text-4xl" aria-hidden>
        {category.icon}
      </div>
      <div className="mt-4 space-y-3">
        <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          {category.title}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          {category.manifesto}
        </p>
      </div>
    </article>
  );
}
