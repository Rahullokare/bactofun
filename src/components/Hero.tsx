import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import heroImg from "@/assets/hero-bags.jpg";
import makeInIndia from "@/assets/make-in-india.png";
import compostable from "@/assets/compostable-100.png";
import isoCert from "@/assets/iso-certified.png";
import fssai from "@/assets/fssai.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = ({ onEnquire }: { onEnquire: () => void }) => {
  const { t } = useLanguage();
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden gradient-cream">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <Leaf className="absolute top-20 left-10 w-32 h-32 text-leaf animate-leaf-sway" />
        <Leaf className="absolute bottom-20 right-10 w-40 h-40 text-leaf animate-leaf-sway" style={{ animationDelay: '1s' }} />
      </div>
      <div className="container relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              <Leaf className="w-4 h-4" /> {t("hero.tag")}
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 text-accent text-sm font-bold uppercase tracking-wide mb-6 border border-accent/30">
              🌱 I am NOT a Plastic Bag
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-[1.05] mb-6">
              {t("hero.title1")} <span className="text-primary">{t("hero.title2")}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance max-w-xl">
              {t("hero.sub")}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#sizes">{t("hero.cta1")} <ArrowRight className="ml-2 w-4 h-4" /></a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#materials">{t("hero.cta2")}</a>
              </Button>
              <Button variant="secondary" size="lg" type="button" onClick={onEnquire}>
                {t("nav.enquire")}
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-4 gradient-hero rounded-3xl opacity-20 blur-2xl" />
            <img
              src={heroImg}
              alt="Compostable carry bags with corn and leaves"
              width={1536}
              height={1024}
              className="relative rounded-3xl shadow-elegant w-full h-auto animate-float"
            />
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border/60">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            {[
              { src: makeInIndia, label: t("cert.madeIndia") },
              { src: compostable, label: t("cert.compostable") },
              { src: isoCert, label: t("cert.iso") },
              { src: fssai, label: t("cert.fssai") },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2">
                <div className="w-11 h-11 rounded-full bg-card border border-border shadow-soft flex items-center justify-center overflow-hidden shrink-0">
                  <img src={b.src} alt={b.label} loading="lazy" className="w-8 h-8 object-contain" />
                </div>
                <span className="text-xs md:text-sm font-semibold text-foreground/80 whitespace-nowrap">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
