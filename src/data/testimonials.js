import { IMAGES } from "@/lib/site";

// Static testimonials — replaces the live Base44 Testimonial entity.
// Placeholder quotes; edit or replace with real customer testimonials.
export const TESTIMONIALS = [
  {
    id: "t1",
    customer_name: "Rufaro M.",
    location: "Avondale, Harare",
    quote: "Found the perfect dress for my sister's wedding — the fit was exactly right, no alterations needed.",
    rating: 5,
    image_url: IMAGES.dress,
    product_name: "Evening Wrap Dress",
  },
  {
    id: "t2",
    customer_name: "Chiedza T.",
    location: "Borrowdale, Harare",
    quote: "Great quality pieces and the WhatsApp enquiry made it so easy to check availability before visiting.",
    rating: 5,
    image_url: IMAGES.top,
    product_name: "Silk Blouse",
  },
  {
    id: "t3",
    customer_name: "Nyasha K.",
    location: "Mount Pleasant, Harare",
    quote: "My go-to boutique for work outfits. The blazer I bought gets compliments every time I wear it.",
    rating: 4,
    image_url: IMAGES.blazer,
    product_name: "Tailored Blazer",
  },
];

// Mirrors the subset of the Base44 entity SDK's call shape used here.
export const Testimonial = {
  async list(_sort, limit) {
    let items = TESTIMONIALS;
    if (limit) items = items.slice(0, limit);
    return items;
  },
};
