import { useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { Image } from "@/components/ui/image";
import { productEnquiryLink } from "@/lib/site";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const sold = product.availability === "Sold Out";
  const status = product.availability === "Low Stock" ? "Low Stock" : sold ? "Sold Out" : "Available";

  return (
    <div onClick={() => navigate(`/product/${product.id}`)} className="group cursor-pointer">
      <div className="relative overflow-hidden bg-stone aspect-[4/5]">
        <Image
          src={product.image_url}
          alt={product.name}
          fittingType="fill"
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        {product.image_url_2 && (
          <Image
            src={product.image_url_2}
            alt=""
            fittingType="fill"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          />
        )}
        {sold && (
          <div className="absolute top-3 left-3 text-[10px] tracking-wide-luxe uppercase bg-foreground text-background px-2 py-1">
            Sold Out
          </div>
        )}
        {!sold && (
          <a
            href={productEnquiryLink(product)}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-background/95 px-4 py-3 flex items-center justify-center gap-2 text-[11px] tracking-wide-luxe uppercase"
          >
            <MessageCircle className="w-3.5 h-3.5" /> Quick Enquiry
          </a>
        )}
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-2">
        <div className="min-w-0">
          <div className="text-[10px] tracking-wide-luxe uppercase text-muted-foreground">{product.category}</div>
          <h3 className="font-heading text-lg leading-tight mt-0.5 truncate">{product.name}</h3>
        </div>
        <div className={`text-sm whitespace-nowrap ${sold ? "text-muted-foreground line-through" : "text-foreground"}`}>
          ${product.price}
        </div>
      </div>
      <div className="mt-1 text-[10px] tracking-wide-luxe uppercase text-muted-foreground">
        {status} · {product.sizes?.join(", ")}
      </div>
    </div>
  );
}