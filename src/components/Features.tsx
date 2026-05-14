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
  <section id="features" className="py-20 md:py-28">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">{t("features.kicker")}</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{t("features.title")}</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div key={f.title} className="group bg-card p-8 rounded-2xl border border-border hover:border-primary hover:shadow-elegant transition-smooth animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
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