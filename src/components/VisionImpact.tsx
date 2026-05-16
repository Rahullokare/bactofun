import { BadgeCheck, BriefcaseBusiness, Factory, Globe, Leaf, Recycle, Tractor, Trash2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const goals = [
  { icon: Factory, valueKey: "vision.goal1.value", labelKey: "vision.goal1.label" },
  { icon: Trash2, valueKey: "vision.goal2.value", labelKey: "vision.goal2.label" },
  { icon: BriefcaseBusiness, valueKey: "vision.goal3.value", labelKey: "vision.goal3.label" },
  { icon: Tractor, valueKey: "vision.goal4.value", labelKey: "vision.goal4.label" },
];

const nationalGoals = [
  { icon: Leaf, titleKey: "vision.national1.title", descKey: "vision.national1.desc" },
  { icon: BadgeCheck, titleKey: "vision.national2.title", descKey: "vision.national2.desc" },
  { icon: Recycle, titleKey: "vision.national3.title", descKey: "vision.national3.desc" },
  { icon: Globe, titleKey: "vision.national4.title", descKey: "vision.national4.desc" },
];

const commitments = ["vision.commit1", "vision.commit2", "vision.commit3", "vision.commit4"];

const whyItems = [
  { labelKey: "vision.why1.label", descKey: "vision.why1.desc" },
  { labelKey: "vision.why2.label", descKey: "vision.why2.desc" },
  { labelKey: "vision.why3.label", descKey: "vision.why3.desc" },
  { labelKey: "vision.why4.label", descKey: "vision.why4.desc" },
  { labelKey: "vision.why5.label", descKey: "vision.why5.desc" },
];

const VisionImpact = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding scroll-mt-20 bg-[linear-gradient(180deg,#ffffff_0%,#f4fae7_100%)] sm:scroll-mt-24">
      <div className="container">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 md:mb-12">
          <p className="mb-2 text-xs font-semibold tracking-wider text-accent uppercase sm:mb-3 sm:text-sm">{t("vision.kicker")}</p>
          <h2 className="text-balance text-3xl font-bold text-[#7aa81f] sm:text-4xl md:text-5xl">{t("vision.title")}</h2>
        </div>

        <article className="mx-auto max-w-7xl rounded-[2rem] border border-[#d7e6c3] bg-white/92 p-4 shadow-[0_22px_70px_rgba(119,145,77,0.14)] sm:p-6 lg:p-8">
          <div className="grid gap-4 lg:grid-cols-12">
            <section className="rounded-[1.6rem] bg-[#f7fbf2] p-5 sm:p-6 lg:col-span-7">
              <h3 className="mb-5 text-xl font-bold sm:text-2xl">{t("vision.goalsTitle")}</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {goals.map((goal) => (
                  <div key={goal.valueKey} className="rounded-2xl border border-[#dbe8cf] bg-white px-4 py-5 text-center shadow-[0_8px_24px_rgba(112,136,85,0.08)]">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                      <goal.icon className="h-6 w-6" />
                    </div>
                    <div className="text-2xl font-black text-foreground sm:text-3xl">{t(goal.valueKey)}</div>
                    <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(goal.labelKey)}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="overflow-hidden rounded-[1.6rem] border border-[#dbe8cf] bg-white lg:col-span-5 lg:row-span-2">
              <div className="bg-[linear-gradient(135deg,#d9ef9d_0%,#b5dc69_100%)] px-5 py-8 sm:px-6 sm:py-10">
                <h3 className="text-balance text-2xl font-bold text-[#24361d] sm:text-3xl">{t("vision.bannerTitle")}</h3>
              </div>
              <div className="bg-[#2f4138] px-5 py-4 text-sm leading-relaxed font-medium text-white/90 sm:px-6 sm:text-base">
                {t("vision.bannerCaption")}
              </div>
              <div className="bg-[#2e4037] p-5 text-white sm:p-6">
                <h3 className="mb-5 text-xl font-bold sm:text-2xl">{t("vision.whyTitle")}</h3>
                <div className="space-y-4 text-sm leading-relaxed text-white/85 sm:text-base">
                  {whyItems.map((item) => (
                    <div key={item.labelKey} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <span className="font-semibold text-white">{t(item.labelKey)}</span>{" "}
                      <span>{t(item.descKey)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-[1.6rem] bg-[#f7fbf2] p-5 sm:p-6 lg:col-span-7">
              <h3 className="mb-5 text-xl font-bold sm:text-2xl">{t("vision.nationalTitle")}</h3>
              <div className="grid gap-4">
                {nationalGoals.map((item) => (
                  <div key={item.titleKey} className="flex gap-4 rounded-2xl border border-[#dbe8cf] bg-white p-4 shadow-[0_8px_24px_rgba(112,136,85,0.08)]">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{t(item.titleKey)}</div>
                      <div className="mt-1 text-sm leading-relaxed text-muted-foreground">{t(item.descKey)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[1.6rem] bg-white p-5 ring-1 ring-[#dbe8cf] sm:p-6 lg:col-span-12">
              <h3 className="mb-5 text-xl font-bold sm:text-2xl">{t("vision.commitTitle")}</h3>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {commitments.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-[#f7fbf2] px-4 py-4">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                      ✓
                    </span>
                    <span className="font-medium text-foreground">{t(item)}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </article>
      </div>
    </section>
  );
};

export default VisionImpact;
