import { Sprout, Globe, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const stats = [
  { icon: Sprout, value: "180 days", label: "Full compost time" },
  { icon: Globe, value: "0%", label: "Plastic content" },
  { icon: Award, value: "ISO 17088:2021", label: "Certified Compostable" },
];

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="section-padding scroll-mt-20 sm:scroll-mt-24">
      <div className="container">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 md:mb-16">
          <p className="mb-2 text-xs font-semibold tracking-wider text-accent uppercase sm:mb-3 sm:text-sm">{t("about.kicker")}</p>
          <h2 className="mb-4 text-balance text-3xl font-bold sm:mb-6 sm:text-4xl md:text-5xl">{t("about.title")}</h2>
          <p className="text-base text-balance text-muted-foreground sm:text-lg">{t("about.sub")}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft transition-smooth hover:shadow-elegant sm:p-8"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl gradient-leaf sm:h-14 sm:w-14">
                <s.icon className="h-6 w-6 text-primary-foreground sm:h-7 sm:w-7" />
              </div>
              <div className="mb-1 font-[Playfair_Display] text-2xl font-bold break-words text-primary sm:text-3xl">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
