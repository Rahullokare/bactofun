import { Cloud, Clock3, Droplets, FlaskConical, Leaf, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const timeline = [
  { key: "bio.timeline1", value: "90 days" },
  { key: "bio.timeline2", value: "180 days" },
  { key: "bio.timeline3", value: "3-6 mo" },
];

const endProducts = [
  { icon: Cloud, titleKey: "bio.product1.title", descKey: "bio.product1.desc" },
  { icon: Droplets, titleKey: "bio.product2.title", descKey: "bio.product2.desc" },
  { icon: Leaf, titleKey: "bio.product3.title", descKey: "bio.product3.desc" },
];

const standards = [
  { titleKey: "bio.standard1.title", descKey: "bio.standard1.desc" },
  { titleKey: "bio.standard2.title", descKey: "bio.standard2.desc" },
  { titleKey: "bio.standard3.title", descKey: "bio.standard3.desc" },
];

const Biodegradation = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding scroll-mt-20 bg-[linear-gradient(180deg,#f8fbf6_0%,#ffffff_100%)] sm:scroll-mt-24">
      <div className="container">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 md:mb-14">
          <p className="mb-2 text-xs font-semibold tracking-wider text-accent uppercase sm:mb-3 sm:text-sm">{t("bio.kicker")}</p>
          <h2 className="mb-4 text-balance text-3xl font-bold sm:mb-6 sm:text-4xl md:text-5xl">{t("bio.title")}</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="space-y-6">
            <article className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <FlaskConical className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold sm:text-2xl">{t("bio.how.title")}</h3>
                  <p className="text-sm text-muted-foreground">{t("bio.how.sub")}</p>
                </div>
              </div>

              <div className="rounded-2xl bg-muted/50 p-4 sm:p-5">
                <div className="mb-4 flex items-center gap-2 text-foreground">
                  <Clock3 className="h-4 w-4 text-primary" />
                  <span className="font-semibold">{t("bio.timelineTitle")}</span>
                </div>
                <div className="space-y-3">
                  {timeline.map((item) => (
                    <div key={item.key} className="flex items-center gap-3 rounded-xl bg-background/80 px-3 py-3">
                      <span className="min-w-20 rounded-lg bg-emerald-600 px-3 py-1 text-center text-xs font-bold text-white sm:text-sm">
                        {item.value}
                      </span>
                      <span className="text-sm text-muted-foreground sm:text-base">{t(item.key)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <article className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <h3 className="mb-6 text-xl font-bold sm:text-2xl">{t("bio.productsTitle")}</h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {endProducts.map((product) => (
                  <div key={product.titleKey} className="rounded-2xl bg-muted/40 p-5 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <product.icon className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-bold">{t(product.titleKey)}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{t(product.descKey)}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-center text-sm font-medium text-muted-foreground">{t("bio.productsFootnote")}</p>
            </article>
          </div>

          <div className="space-y-6">
            <article className="overflow-hidden rounded-3xl border border-emerald-200 bg-card shadow-soft">
              <div className="bg-[linear-gradient(135deg,#b8df7a_0%,#5f9e48_55%,#25462f_100%)] px-6 py-10 text-white sm:px-8">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">{t("bio.bannerTop")}</p>
                <h3 className="max-w-lg text-2xl font-bold sm:text-3xl">{t("bio.bannerTitle")}</h3>
              </div>
              <div className="bg-[#2e4037] px-6 py-4 text-sm font-medium text-white/90 sm:px-8 sm:text-base">
                {t("bio.bannerCaption")}
              </div>
            </article>

            <article className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <h3 className="mb-5 text-xl font-bold sm:text-2xl">{t("bio.standardsTitle")}</h3>
              <div className="space-y-4">
                {standards.map((item) => (
                  <div key={item.titleKey} className="border-l-4 border-emerald-500 pl-4">
                    <div className="font-bold text-foreground">{t(item.titleKey)}</div>
                    <div className="text-sm text-muted-foreground">{t(item.descKey)}</div>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl bg-[#2e4037] p-6 text-white shadow-elegant sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#89c67b]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold sm:text-2xl">{t("bio.contrastTitle")}</h3>
              </div>
              <div className="text-3xl font-black text-[#aee57f]">{t("bio.contrastMetric")}</div>
              <div className="mt-1 text-lg font-semibold">{t("bio.contrastSub")}</div>
              <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">{t("bio.contrastDesc")}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biodegradation;
