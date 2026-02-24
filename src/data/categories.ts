import type { Category } from "./types";

export const categories: Category[] = [
  {
    slug: "kitchen",
    title: "Home & Kitchen",
    manifesto:
      "Tools built for daily use—carbon steel, copper, and hardwood that improve with age instead of wearing out.",
    icon: "🥘",
    order: 1,
  },
  {
    slug: "tools",
    title: "Tools & Workshop",
    manifesto:
      "Field-repairable gear with lifetime warranties. If something breaks, it can be serviced, not trashed.",
    icon: "🛠️",
    order: 2,
  },
  {
    slug: "apparel",
    title: "Clothing & Apparel",
    manifesto:
      "Natural fibers, heritage mills, and brands that still run their own repair benches.",
    icon: "🧵",
    order: 3,
  },
  {
    slug: "carry",
    title: "Carry & Travel",
    manifesto:
      "Packs, wallets, and luggage that can survive airlines, road trips, and handing down to your kids.",
    icon: "🧳",
    order: 4,
  },
];
