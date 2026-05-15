import { ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const data = [
  { size: "8X10", micron: 30, pcs: 225, load: "0.5 KG" },
  { size: "9X13", micron: 30, pcs: 155, load: "1 KG" },
  { size: "11X14", micron: 30, pcs: 125, load: "2 KG" },
  { size: "13X16", micron: 35, pcs: 95, load: "3 KG" },
  { size: "16X20", micron: 40, pcs: 50, load: "5 KG" },
];

const SizeCharts = ({ onEnquire }: { onEnquire: () => void }) => {
  const { t } = useLanguage();

  return (
    <section id="sizes" className="section-padding scroll-mt-20 bg-muted/40 sm:scroll-mt-24">
      <div className="container">
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
          <p className="mb-2 text-xs font-semibold tracking-wider text-accent uppercase sm:mb-3 sm:text-sm">{t("sizes.kicker")}</p>
          <h2 className="mb-4 text-3xl font-bold text-balance sm:mb-6 sm:text-4xl md:text-5xl">{t("sizes.title")}</h2>
          <p className="text-sm text-muted-foreground sm:text-base">{t("sizes.sub")}</p>
        </div>

        <div
          className="mx-auto max-w-4xl overflow-hidden rounded-2xl border-2 border-border p-3 shadow-elegant sm:rounded-3xl sm:p-4 md:p-6"
          style={{ backgroundColor: "hsl(60 30% 96%)" }}
        >
          <div className="mb-4 text-center">
            <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-5xl" style={{ color: "hsl(95 65% 45%)" }}>
              {t("sizes.chartTitle")}
            </h3>
            <p className="text-base font-semibold text-foreground/80 sm:text-lg md:text-2xl">{t("sizes.chartSub")}</p>
          </div>

          {/* Mobile: card layout */}
          <div className="space-y-3 md:hidden">
            {data.map((row) => (
              <article key={row.size} className="rounded-xl border border-border bg-card p-4">
                <div className="mb-3 flex items-center justify-between gap-2 border-b border-border/60 pb-2">
                  <span className="text-lg font-bold" style={{ color: "hsl(28 90% 45%)" }}>
                    {row.size}
                  </span>
                  <span className="text-sm font-semibold text-primary">{row.load}</span>
                </div>
                <dl className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <dt className="text-xs text-muted-foreground">{t("sizes.colMicron")}</dt>
                    <dd className="font-medium">{row.micron}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted-foreground">{t("sizes.colPcs")}</dt>
                    <dd className="font-medium">{row.pcs}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>

          {/* Tablet & desktop: table */}
          <div className="hidden overflow-x-auto rounded-xl border border-border md:block">
            <table className="w-full min-w-[32rem] text-center text-sm md:text-base">
              <thead>
                <tr className="text-foreground" style={{ backgroundColor: "hsl(95 60% 65%)" }}>
                  <th className="px-3 py-3 font-semibold sm:px-4 sm:py-4">{t("sizes.colSize")}</th>
                  <th className="px-3 py-3 font-semibold sm:px-4 sm:py-4">{t("sizes.colMicron")}</th>
                  <th className="px-3 py-3 font-semibold sm:px-4 sm:py-4">{t("sizes.colPcs")}</th>
                  <th className="px-3 py-3 font-semibold sm:px-4 sm:py-4">{t("sizes.colLoad")}</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.size} className="border-t border-border/60">
                    <td className="px-3 py-2.5 font-bold sm:px-4 sm:py-3" style={{ backgroundColor: "hsl(28 90% 75%)" }}>
                      {row.size}
                    </td>
                    <td className="bg-card px-3 py-2.5 sm:px-4 sm:py-3">{row.micron}</td>
                    <td className="bg-card px-3 py-2.5 sm:px-4 sm:py-3">{row.pcs}</td>
                    <td className="bg-card px-3 py-2.5 font-semibold sm:px-4 sm:py-3">{row.load}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 px-1 text-center text-xs text-muted-foreground sm:text-sm">
            <ShieldCheck className="h-4 w-4 shrink-0 text-primary" />
            <span>{t("cert.iso")} · CPCB Approved</span>
          </div>
        </div>

        <div className="mt-8 text-center sm:mt-10">
          <p className="mb-4 text-sm text-muted-foreground sm:text-base">{t("sizes.custom")}</p>
          <Button variant="hero" size="lg" className="w-full sm:w-auto" onClick={onEnquire}>
            {t("cta.enquiry")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SizeCharts;
