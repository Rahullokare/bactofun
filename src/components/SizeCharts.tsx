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
    <section id="sizes" className="bg-muted/40 py-20 md:py-28">
      <div className="container">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">{t("sizes.kicker")}</p>
          <h2 className="mb-6 text-4xl font-bold text-balance md:text-5xl">{t("sizes.title")}</h2>
          <p className="text-muted-foreground">{t("sizes.sub")}</p>
        </div>

        <div
          className="mx-auto max-w-4xl overflow-hidden rounded-3xl border-2 border-border bg-[hsl(var(--card))] p-4 shadow-elegant md:p-6"
          style={{ backgroundColor: "hsl(60 30% 96%)" }}
        >
          <div className="mb-4 text-center">
            <h3 className="text-3xl font-extrabold tracking-tight md:text-5xl" style={{ color: "hsl(95 65% 45%)" }}>
              {t("sizes.chartTitle")}
            </h3>
            <p className="text-lg font-semibold text-foreground/80 md:text-2xl">{t("sizes.chartSub")}</p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-center">
              <thead>
                <tr className="text-foreground" style={{ backgroundColor: "hsl(95 60% 65%)" }}>
                  <th className="px-4 py-4 font-semibold">{t("sizes.colSize")}</th>
                  <th className="px-4 py-4 font-semibold">{t("sizes.colMicron")}</th>
                  <th className="px-4 py-4 font-semibold">{t("sizes.colPcs")}</th>
                  <th className="px-4 py-4 font-semibold">{t("sizes.colLoad")}</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.size} className="border-t border-border/60">
                    <td className="bg-card px-4 py-3 font-bold text-foreground" style={{ backgroundColor: "hsl(28 90% 75%)" }}>
                      {row.size}
                    </td>
                    <td className="bg-card px-4 py-3">{row.micron}</td>
                    <td className="bg-card px-4 py-3">{row.pcs}</td>
                    <td className="bg-card px-4 py-3 font-semibold">{row.load}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" /> {t("cert.iso")} · CPCB Approved
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="mb-4 text-muted-foreground">{t("sizes.custom")}</p>
          <Button variant="hero" size="lg" onClick={onEnquire}>
            {t("cta.enquiry")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SizeCharts;
