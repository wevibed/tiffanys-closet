export const SITE = {
  brand: "TIFFANY'S CLOSET",
  tagline: "The latest looks, all in one place.",
  subtagline: "Curated women's fashion, new arrivals and everyday pieces in Avondale.",
  addressLine1: "58 Cork Road",
  addressLine2: "Avondale, Harare",
  hours: "Mon – Sat · 9am – 5pm",
  status: "Open until 5pm",
  whatsapp: "263771234567",
  phoneDisplay: "+263 77 123 4567",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=58+Cork+Road+Avondale+Harare",
};

const B = "https://media.base44.com/images/public/6ab39eee8306d277765837c7/";

export const IMAGES = {
  hero: B + "3a999d41f_generated_f4e30726.jpg",
  edit: B + "ec31df4be_generated_c90d845a.jpg",
  dress: B + "c970c2b6b_generated_06c926c4.jpg",
  top: B + "01a5c2eaa_generated_3ab58cfe.jpg",
  blazer: B + "4a73bfd0b_generated_130635c1.jpg",
  set: B + "2e45101e6_generated_3e0d9cb1.jpg",
  shoes: B + "b0b4e4057_generated_a0df14c0.jpg",
  bag: B + "d4052a430_generated_d6e56838.jpg",
  catDresses: B + "d54667044_generated_5f638d11.jpg",
  catTops: B + "68d9dd5c8_generated_e8b7728f.jpg",
  catOuterwear: B + "723ecb04e_generated_aa55f4ba.jpg",
  catSets: B + "98fe65e9d_generated_1f61196b.jpg",
  catShoes: B + "a4133da79_generated_efea036f.jpg",
  catAccessories: B + "7e694947a_generated_7b9cc328.jpg",
};

export const CATEGORIES = [
  { name: "Dresses", image: IMAGES.catDresses },
  { name: "Tops", image: IMAGES.catTops },
  { name: "Outerwear", image: IMAGES.catOuterwear },
  { name: "Sets", image: IMAGES.catSets },
  { name: "Shoes", image: IMAGES.catShoes },
  { name: "Accessories", image: IMAGES.catAccessories },
];

export function whatsappLink(message) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function productEnquiryLink(product, size) {
  const msg = `Hi Tiffany's Closet, I'm interested in the ${product.name}${size ? ` in size ${size}` : ""}. Is it available to try on at the boutique?`;
  return whatsappLink(msg);
}