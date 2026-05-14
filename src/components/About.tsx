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
  <section id="about" className="py-20 md:py-28">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">{t("about.kicker")}</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
          {t("about.title")}
        </h2>
        <p className="text-lg text-muted-foreground text-balance">
          {t("about.sub")}
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-card p-8 rounded-2xl shadow-soft text-center hover:shadow-elegant transition-smooth border border-border">
            <div className="w-14 h-14 rounded-2xl gradient-leaf mx-auto mb-4 flex items-center justify-center">
              <s.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="text-3xl font-bold text-primary mb-1 font-[Playfair_Display]">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default About;
