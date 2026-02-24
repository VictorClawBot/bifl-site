import Link from "next/link";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div className="bg-stone-50 text-zinc-900 dark:bg-black dark:text-white">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 py-16 sm:px-12 lg:px-16">
        <section className="grid gap-10 lg:grid-cols-[2fr,1fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-600 dark:text-amber-400">
              Buy it for life
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Fewer things, better things.
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-300">
              We hunt down durable, repairable goods built in the U.S. and
              allied countries. Everything featured here is vetted for
              provenance, warranty, and the people who make it.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#featured"
                className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-500"
              >
                Browse featured gear
              </Link>
              <a
                href="mailto:victor@buyitforlife.today"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white/10"
              >
                Submit a brand
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-black/5 bg-white/90 p-6 shadow-lg dark:border-white/10 dark:bg-white/5">
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
              Field Notes
            </p>
            <p className="mt-3 text-2xl font-semibold">
              Buying well is a vote: for craftsmanship, for maintenance, for
              knowing who made your gear.
            </p>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
              Weekly dispatch with new makers, repair tips, and one buy-it-for-life
              teardown. Coming soon.
            </p>
          </div>
        </section>

        <section className="space-y-6" id="categories">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-600 dark:text-amber-400">
              Categories
            </p>
            <h2 className="mt-2 text-3xl font-semibold">Where we start</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {categories
              .sort((a, b) => a.order - b.order)
              .map((category) => (
                <CategoryCard key={category.slug} category={category} />
              ))}
          </div>
        </section>

        <section className="space-y-6" id="featured">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-600 dark:text-amber-400">
              Featured picks
            </p>
            <h2 className="mt-2 text-3xl font-semibold">Products that earn their keep</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Affiliate links keep the lights on. We only recommend gear we
              would hand to a friend.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-black/5 bg-gradient-to-r from-zinc-900 to-black p-8 text-white dark:border-white/10">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
              Newsletter
            </p>
            <h2 className="text-3xl font-semibold">The Dispatch (coming soon)</h2>
            <p className="text-sm text-white/70">
              Sign up to be first when we open subscriptions. Weekly field
              reports, repair tutorials, and made-in-USA sourcing notes.
            </p>
          </div>
          <form className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              name="email"
              placeholder="you@email.com"
              className="w-full rounded-full border border-white/30 bg-transparent px-4 py-3 text-sm placeholder-white/60 focus:outline-none"
              disabled
            />
            <button
              type="button"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow disabled:cursor-not-allowed"
              disabled
            >
              Opening soon
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
