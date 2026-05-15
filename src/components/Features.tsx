import { Leaf, ShieldCheck, Recycle, Droplets, Factory, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const features = [
  { icon: Leaf, title: "100% Compostable", desc: "Breaks down into water, CO₂ and biomass — leaving no microplastics behind." },
  { icon: ShieldCheck, title: "ISO 17088:2021 Certified", desc: "Internationally certified compostable — also CPCB approved & FSSAI food-safe." },
  { icon: Recycle, title: "Plant-Based Origin", desc: "Made from renewable corn starch & PLA — not fossil fuels." },
  { icon: Droplets, title: "Strong & Leak-Proof", desc: "Engineered for daily use — carries up to 10 KG with confidence." },
  { icon: Factory, title: "Made in India", desc: "Proudly manufactured in India, supporting local industry & farmers." },
  { icon: HeartHandshake, title: "Safe for All", desc: "Non-toxic, food-safe & marine-life friendly — gentle on every ecosystem." },
];

const Features = () => {
  const { t } = useLanguage();
  return (
  <section id="features" className="section-padding scroll-mt-20 sm:scroll-mt-24">
    <div className="container">
      <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 md:mb-16">
        <p className="mb-2 text-xs font-semibold tracking-wider text-accent uppercase sm:mb-3 sm:text-sm">{t("features.kicker")}</p>
        <h2 className="mb-4 text-3xl font-bold text-balance sm:mb-6 sm:text-4xl md:text-5xl">{t("features.title")}</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {features.map((f, i) => (
          <div key={f.title} className="group animate-fade-up rounded-2xl border border-border bg-card p-6 transition-smooth hover:border-primary hover:shadow-elegant sm:p-8" style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:gradient-leaf flex items-center justify-center mb-5 transition-smooth">
              <f.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-smooth" />
            </div>
            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Features;