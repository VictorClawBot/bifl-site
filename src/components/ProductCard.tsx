import type { Product } from "@/data/types";

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  return (
    <article className="flex flex-col gap-4 rounded-3xl border border-black/5 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
      <div>
        <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          {product.category}
        </p>
        <h3 className="mt-1 text-xl font-semibold text-zinc-900 dark:text-white">
          {product.name}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">{product.summary}</p>
      </div>
      <ul className="flex flex-wrap gap-2 text-xs text-zinc-500 dark:text-zinc-300">
        <li className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-white/10">
          {product.origin}
        </li>
        <li className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-white/10">
          {product.ownership.replace("-", " ")}
        </li>
        <li className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-white/10">
          Durability {product.durability}/5
        </li>
      </ul>
      <div className="flex flex-wrap gap-2">
        {product.highlights.slice(0, 3).map((item) => (
          <span
            key={item}
            className="rounded-full border border-black/10 px-3 py-1 text-xs text-zinc-700 dark:border-white/20 dark:text-zinc-200"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-auto">
        <a
          href={product.affiliate}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-white dark:text-black"
        >
          View product
          <span aria-hidden>→</span>
        </a>
      </div>
    </article>
  );
}
