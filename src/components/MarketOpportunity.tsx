import { Building2, Landmark, ShoppingCart, Store, TrendingUp, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const chartData = [
  { year: "2024", value: 986 },
  { year: "2026", value: 1230 },
  { year: "2028", value: 1540 },
  { year: "2030", value: 1930 },
  { year: "2033", value: 2772 },
];

const drivers = [
  { icon: Landmark, titleKey: "market.driver1.title", descKey: "market.driver1.desc" },
  { icon: Users, titleKey: "market.driver2.title", descKey: "market.driver2.desc" },
  { icon: Building2, titleKey: "market.driver3.title", descKey: "market.driver3.desc" },
  { icon: ShoppingCart, titleKey: "market.driver4.title", descKey: "market.driver4.desc" },
];

const segments = [
  { icon: Store, titleKey: "market.segment1.title", metaKey: "market.segment1.meta" },
  { icon: ShoppingCart, titleKey: "market.segment2.title", metaKey: "market.segment2.meta" },
  { icon: TrendingUp, titleKey: "market.segment3.title", metaKey: "market.segment3.meta" },
  { icon: Landmark, titleKey: "market.segment4.title", metaKey: "market.segment4.meta" },
];

const maxValue = Math.max(...chartData.map((item) => item.value));

const MarketOpportunity = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding scroll-mt-20 bg-muted/30 sm:scroll-mt-24">
      <div className="container">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 md:mb-14">
          <p className="mb-2 text-xs font-semibold tracking-wider text-accent uppercase sm:mb-3 sm:text-sm">{t("market.kicker")}</p>
          <h2 className="mb-4 text-balance text-3xl font-bold sm:mb-6 sm:text-4xl md:text-5xl">{t("market.title")}</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="space-y-6">
            <article className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <h3 className="mb-6 text-xl font-bold sm:text-2xl">{t("market.chartTitle")}</h3>
              <div className="rounded-2xl bg-muted/30 p-4 sm:p-6">
                <div className="flex h-52 items-end justify-between gap-3 border-b border-border/80 pb-4 sm:h-64 sm:gap-4">
                  {chartData.map((point) => (
                    <div key={point.year} className="flex flex-1 flex-col items-center gap-3">
                      <div className="text-xs font-bold text-foreground/70 sm:text-sm">{point.value}</div>
                      <div
                        className="w-full rounded-t-2xl bg-[linear-gradient(180deg,#cfe5d7_0%,#5e9783_100%)]"
                        style={{ height: `${(point.value / maxValue) * 150 + 12}px` }}
                      />
                      <div className="text-xs font-medium text-muted-foreground sm:text-sm">{point.year}</div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground sm:text-base">{t("market.chartFootnote")}</p>
              </div>
            </article>

            <article className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <h3 className="mb-6 text-xl font-bold sm:text-2xl">{t("market.driversTitle")}</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {drivers.map((driver) => (
                  <div key={driver.titleKey} className="rounded-2xl bg-muted/35 p-5">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                      <driver.icon className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-bold">{t(driver.titleKey)}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{t(driver.descKey)}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="space-y-6">
            <article className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              <div className="bg-[linear-gradient(135deg,#eef6d7_0%,#cfe28a_100%)] px-6 py-8 sm:px-8">
                <h3 className="text-xl font-bold sm:text-2xl">{t("market.retailTitle")}</h3>
              </div>
              <div className="bg-[#2f4138] px-6 py-4 text-sm font-medium text-white/90 sm:px-8 sm:text-base">
                {t("market.retailCaption")}
              </div>
            </article>

            <article className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <h3 className="mb-6 text-xl font-bold sm:text-2xl">{t("market.segmentsTitle")}</h3>
              <div className="space-y-3">
                {segments.map((segment) => (
                  <div key={segment.titleKey} className="flex items-center justify-between gap-4 rounded-2xl bg-muted/35 px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                        <segment.icon className="h-5 w-5" />
                      </div>
                      <span className="font-semibold text-foreground">{t(segment.titleKey)}</span>
                    </div>
                    <span className="text-right text-sm text-muted-foreground">{t(segment.metaKey)}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl bg-[#2e4037] p-6 text-white shadow-elegant sm:p-8">
              <h3 className="mb-4 text-xl font-bold sm:text-2xl">{t("market.impactTitle")}</h3>
              <div className="text-3xl font-black text-[#c0ed8f]">{t("market.impactMetric")}</div>
              <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">{t("market.impactDesc")}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunity;
