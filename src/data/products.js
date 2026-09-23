import { IMAGES } from "@/lib/site";

// Static product catalogue — replaces the live Base44 Product entity.
// Names, prices and descriptions are placeholders inferred from the
// available imagery; price is set to 0 so it can't be mistaken for a
// real number. Edit this file to add your real inventory.
export const PRODUCTS = [
  {
    id: "dress-01",
    name: "Evening Wrap Dress",
    price: 0,
    currency: "USD",
    category: "Dresses",
    sizes: ["S", "M", "L"],
    availability: "Available",
    description: "A flowing wrap silhouette that moves from day to evening without missing a beat.",
    image_url: IMAGES.dress,
    image_url_2: IMAGES.catDresses,
    is_new_arrival: true,
    is_in_store: true,
    featured: true,
  },
  {
    id: "top-01",
    name: "Silk Blouse",
    price: 0,
    currency: "USD",
    category: "Tops",
    sizes: ["XS", "S", "M", "L"],
    availability: "Available",
    description: "A lightweight silk top, tailored for an easy, polished everyday look.",
    image_url: IMAGES.top,
    image_url_2: IMAGES.catTops,
    is_new_arrival: true,
    is_in_store: true,
    featured: false,
  },
  {
    id: "outerwear-01",
    name: "Tailored Blazer",
    price: 0,
    currency: "USD",
    category: "Outerwear",
    sizes: ["S", "M", "L"],
    availability: "Low Stock",
    description: "A structured blazer that sharpens any outfit for the office or a night out.",
    image_url: IMAGES.blazer,
    image_url_2: IMAGES.catOuterwear,
    is_new_arrival: true,
    is_in_store: true,
    featured: false,
  },
  {
    id: "set-01",
    name: "Two-Piece Set",
    price: 0,
    currency: "USD",
    category: "Sets",
    sizes: ["S", "M", "L"],
    availability: "Available",
    description: "A coordinated two-piece set, styled to wear together or apart.",
    image_url: IMAGES.set,
    image_url_2: IMAGES.catSets,
    is_new_arrival: false,
    is_in_store: true,
    featured: false,
  },
  {
    id: "shoes-01",
    name: "Pointed Heels",
    price: 0,
    currency: "USD",
    category: "Shoes",
    sizes: ["37", "38", "39", "40"],
    availability: "Available",
    description: "Classic pointed-toe heels, comfortable enough to wear all day.",
    image_url: IMAGES.shoes,
    image_url_2: IMAGES.catShoes,
    is_new_arrival: false,
    is_in_store: true,
    featured: false,
  },
  {
    id: "accessories-01",
    name: "Structured Handbag",
    price: 0,
    currency: "USD",
    category: "Accessories",
    sizes: [],
    availability: "Sold Out",
    description: "A structured handbag finished in supple leather, sized for everyday essentials.",
    image_url: IMAGES.bag,
    image_url_2: IMAGES.catAccessories,
    is_new_arrival: false,
    is_in_store: false,
    featured: false,
  },
];

// Mirrors the subset of the Base44 entity SDK's call shape (filter/list/get)
// that this app used, so the consuming components didn't need their fetch
// logic rewritten — only the import.
export const Product = {
  async filter(query = {}, _sort, limit) {
    let items = PRODUCTS.filter((p) =>
      Object.entries(query).every(([key, value]) => p[key] === value)
    );
    if (limit) items = items.slice(0, limit);
    return items;
  },
  async list(_sort, limit) {
    let items = PRODUCTS;
    if (limit) items = items.slice(0, limit);
    return items;
  },
  async get(id) {
    return PRODUCTS.find((p) => p.id === id) || null;
  },
};
