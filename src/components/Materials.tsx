import cornImg from "@/assets/cornstarch.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const materials = [
  {
    nameKey: "materials.card1.name",
    pct: "40-50%",
    roleKey: "materials.card1.role",
    descKey: "materials.card1.desc",
    color: "bg-amber-100 text-amber-900",
  },
  {
    nameKey: "materials.card2.name",
    pct: "20-30%",
    roleKey: "materials.card2.role",
    descKey: "materials.card2.desc",
    color: "bg-emerald-100 text-emerald-900",
  },
  {
    nameKey: "materials.card3.name",
    pct: "20-30%",
    roleKey: "materials.card3.role",
    descKey: "materials.card3.desc",
    color: "bg-teal-100 text-teal-900",
  },
  {
    nameKey: "materials.card4.name",
    pct: "5-10%",
    roleKey: "materials.card4.role",
    descKey: "materials.card4.desc",
    color: "bg-lime-100 text-lime-900",
  },
];

const Materials = () => {
  const { t } = useLanguage();

  return (
    <section id="materials" className="section-padding scroll-mt-20 bg-muted/40 sm:scroll-mt-24">
      <div className="container">
        <div className="mb-10 grid items-center gap-8 sm:mb-12 md:mb-16 md:gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <p className="mb-2 text-xs font-semibold tracking-wider text-accent uppercase sm:mb-3 sm:text-sm">{t("materials.kicker")}</p>
            <h2 className="mb-4 text-3xl font-bold text-balance sm:mb-6 sm:text-4xl md:text-5xl">{t("materials.title")}</h2>
            <p className="text-base text-muted-foreground sm:text-lg">{t("materials.sub")}</p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-accent/20 blur-3xl" />
            <img
              src={cornImg}
              alt="Corn starch ingredients"
              loading="lazy"
              width={800}
              height={800}
              className="relative mx-auto w-full max-w-lg rounded-2xl shadow-elegant sm:max-w-none sm:rounded-3xl lg:mx-0"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {materials.map((material, index) => (
            <div
              key={material.nameKey}
              className="animate-fade-up rounded-2xl border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`mb-4 inline-block rounded-full px-3 py-1 text-xs font-bold ${material.color}`}>{material.pct}</div>
              <h3 className="mb-1 text-xl font-bold">{t(material.nameKey)}</h3>
              <p className="mb-3 text-sm font-semibold text-accent">{t(material.roleKey)}</p>
              <p className="text-sm text-muted-foreground">{t(material.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Materials;
