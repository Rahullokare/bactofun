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
    <section className="relative overflow-hidden gradient-cream pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <Leaf className="absolute top-16 left-4 hidden h-20 w-20 text-leaf animate-leaf-sway sm:left-10 sm:block sm:h-28 sm:w-28 md:h-32 md:w-32" />
        <Leaf
          className="absolute right-4 bottom-16 hidden h-24 w-24 text-leaf animate-leaf-sway sm:right-10 sm:block sm:h-32 sm:w-32 md:h-40 md:w-40"
          style={{ animationDelay: "1s" }}
        />
      </div>
      <div className="container relative">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="order-2 animate-fade-up text-center md:order-1 md:text-left">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary sm:mb-4 sm:px-4 sm:py-2 sm:text-sm">
              <Leaf className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> {t("hero.tag")}
            </div>
            <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-accent/30 bg-accent/15 px-3 py-1.5 text-xs font-bold tracking-wide text-accent uppercase sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
              🌱 I am NOT a Plastic Bag
            </div>
            <h1 className="mb-4 text-balance text-3xl leading-tight font-bold sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              {t("hero.title1")} <span className="text-primary">{t("hero.title2")}</span>
            </h1>
            <p className="mx-auto mb-6 max-w-xl text-base text-balance text-muted-foreground sm:mb-8 sm:text-lg md:mx-0 md:text-xl">
              {t("hero.sub")}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
              <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                <a href="#sizes">
                  {t("hero.cta1")} <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <a href="#materials">{t("hero.cta2")}</a>
              </Button>
              <Button variant="secondary" size="lg" type="button" className="w-full sm:w-auto" onClick={onEnquire}>
                {t("nav.enquire")}
              </Button>
            </div>
          </div>
          <div className="relative order-1 animate-fade-up md:order-2" style={{ animationDelay: "0.2s" }}>
            <div className="absolute -inset-2 rounded-3xl gradient-hero opacity-20 blur-2xl sm:-inset-4" />
            <img
              src={heroImg}
              alt="Compostable carry bags with corn and leaves"
              width={1536}
              height={1024}
              className="relative mx-auto w-full max-w-md animate-float rounded-2xl shadow-elegant sm:max-w-none sm:rounded-3xl md:mx-0"
            />
          </div>
        </div>
        <div className="mt-10 border-t border-border/60 pt-6 sm:mt-12 sm:pt-8 md:mt-16">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:flex md:flex-wrap md:justify-center md:gap-x-8 md:gap-y-4">
            {[
              { src: makeInIndia, label: t("cert.madeIndia") },
              { src: compostable, label: t("cert.compostable") },
              { src: isoCert, label: t("cert.iso") },
              { src: fssai, label: t("cert.fssai") },
            ].map((b) => (
              <div key={b.label} className="flex min-w-0 items-center gap-2 sm:gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-card shadow-soft sm:h-11 sm:w-11">
                  <img src={b.src} alt={b.label} loading="lazy" className="h-7 w-7 object-contain sm:h-8 sm:w-8" />
                </div>
                <span className="text-[11px] leading-tight font-semibold text-foreground/80 sm:text-xs md:text-sm">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
