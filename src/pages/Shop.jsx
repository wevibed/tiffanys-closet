import { useEffect, useState } from "react";
import { Product } from "@/data/products";
import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";

const CATS = ["All", "Dresses", "Tops", "Outerwear", "Sets", "Shoes", "Accessories"];

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cat, setCat] = useState("All");

  useEffect(() => {
    Product.list("-created_date", 100)
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  const filtered = cat === "All" ? products : products.filter((p) => p.category === cat);

  return (
    <PageShell>
      <PageHeader
        label="The Collection"
        title="Shop"
        subtitle="The full current boutique collection — browse by category and check live availability before you visit."
      />
      <section className="max-w-[1400px] mx-auto px-5 md:px-10 pb-20 md:pb-28">
        <div className="flex flex-wrap gap-2 mb-10 border-b border-border pb-6">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 text-[11px] tracking-wide-luxe uppercase border transition-colors ${
                cat === c
                  ? "border-foreground bg-foreground text-background"
                  : "border-border hover:border-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-[4/5] bg-stone animate-pulse" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <p className="text-muted-foreground">No pieces in this category right now — check back soon.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </PageShell>
  );
}