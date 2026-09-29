export type ProductCategory = "hardware" | "software" | "accessories" | "all";

export interface Product {
  id: string;
  name: string;
  category: "hardware" | "software" | "accessories";
  tagline: string;
  description: string;
  details: string[];
  features: string[];
}
