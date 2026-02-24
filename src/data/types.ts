export type OwnershipModel =
  | "family-owned"
  | "founder-led"
  | "employee-owned"
  | "private"
  | "public"
  | "cooperative";

export type DurabilityRating = 1 | 2 | 3 | 4 | 5;

export interface Category {
  slug: string;
  title: string;
  manifesto: string;
  icon: string;
  order: number;
}

export interface Product {
  slug: string;
  name: string;
  brand: string;
  summary: string;
  category: string;
  durability: DurabilityRating;
  repairability: "serviceable" | "factory-only" | "not-repairable";
  origin: string;
  ownership: OwnershipModel;
  founded: number;
  warranty: string;
  priceBand: "access" | "mid" | "investment";
  affiliate?: string;
  videoStatus: "planned" | "in-production" | "published";
  highlights: string[];
}
