import { Leaf, ShieldCheck, Recycle, Droplets, Factory, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const features = [
  { icon: Leaf, titleKey: "features.card1.title", descKey: "features.card1.desc" },
  { icon: ShieldCheck, titleKey: "features.card2.title", descKey: "features.card2.desc" },
  { icon: Recycle, titleKey: "features.card3.title", descKey: "features.card3.desc" },
  { icon: Droplets, titleKey: "features.card4.title", descKey: "features.card4.desc" },
  { icon: Factory, titleKey: "features.card5.title", descKey: "features.card5.desc" },
  { icon: HeartHandshake, titleKey: "features.card6.title", descKey: "features.card6.desc" },
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
          {features.map((feature, i) => (
            <div
              key={feature.titleKey}
              className="group animate-fade-up rounded-2xl border border-border bg-card p-6 transition-smooth hover:border-primary hover:shadow-elegant sm:p-8"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-smooth group-hover:gradient-leaf">
                <feature.icon className="h-7 w-7 text-primary transition-smooth group-hover:text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-xl font-bold">{t(feature.titleKey)}</h3>
              <p className="text-sm text-muted-foreground">{t(feature.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
