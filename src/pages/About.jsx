import { Image } from "@/components/ui/image";
import { IMAGES } from "@/lib/site";
import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <PageShell>
      <PageHeader
        label="Our Story"
        title="About Tiffany's Closet"
        subtitle="A boutique born in Avondale, dressing the woman who treats getting dressed as a small daily act of self-respect."
      />
      <section className="max-w-[1100px] mx-auto px-5 md:px-10 pb-20 md:pb-28 space-y-20 md:space-y-28">
        <Reveal className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <div className="aspect-[4/5] bg-stone overflow-hidden">
            <Image src={IMAGES.edit} alt="Tiffany's Closet" fittingType="fill" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="text-[11px] tracking-luxe uppercase text-muted-foreground mb-3">The Philosophy</div>
            <h2 className="font-heading text-3xl md:text-4xl leading-tight">
              Fashion should feel like you — only more certain.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We believe style isn't about chasing every trend. It's about knowing what works for your life, your body and your week — and having a curated rack of pieces that make that easy. Every item in the boutique earns its place: wearable, current, and built to be worn again.
            </p>
          </div>
        </Reveal>

        <Reveal className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <div className="md:order-2 aspect-[4/5] bg-stone overflow-hidden">
            <Image src={IMAGES.catDresses} alt="The boutique" fittingType="fill" className="w-full h-full object-cover" />
          </div>
          <div className="md:order-1">
            <div className="text-[11px] tracking-luxe uppercase text-muted-foreground mb-3">The Boutique</div>
            <h2 className="font-heading text-3xl md:text-4xl leading-tight">A real room, not just a website.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Tucked into Avondale, the boutique is where the catalogue actually lives. New pieces arrive weekly, the rack turns fast, and the best way to know if something is yours is to try it on. Come say hello — we'll happily hold a piece while you do.
            </p>
          </div>
        </Reveal>

        <Reveal className="border-t border-border pt-12 text-center">
          <p className="font-heading text-2xl md:text-3xl max-w-2xl mx-auto leading-snug">
            "We don't sell a look. We help you find yours."
          </p>
          <p className="mt-4 text-[11px] tracking-wide-luxe uppercase text-muted-foreground">— Tiffany, Founder</p>
        </Reveal>
      </section>
    </PageShell>
  );
}