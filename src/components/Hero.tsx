import { Button } from "@/components/ui/button";
import { ArrowRight, Ban, Globe2, Leaf, Sprout, Users } from "lucide-react";
import heroImg from "@/assets/hero-bags.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = ({ onEnquire }: { onEnquire: () => void }) => {
  const { t } = useLanguage();

  return (
    <section className="hero-shell relative overflow-hidden pt-24 pb-8 sm:pt-28 lg:pt-30">
      <div className="hero-orb pointer-events-none absolute top-12 right-[-8rem] h-[34rem] w-[34rem] rounded-full blur-3xl" />
      <div className="hero-orb-secondary pointer-events-none absolute top-22 left-[10%] h-[16rem] w-[16rem] rounded-full blur-3xl" />

      <div className="container relative">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.93fr)_minmax(0,1.07fr)] lg:gap-2 xl:gap-6">
          <div className="animate-fade-up text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#dff5d7] px-4 py-2.5 text-[0.92rem] font-semibold text-[#23754c] shadow-[0_12px_24px_rgba(101,149,84,0.12)]">
              <Leaf className="h-4.5 w-4.5" />
              {t("hero.tag")}
            </div>

            <h1 className="max-w-[9.4ch] text-balance text-[3.45rem] leading-[0.94] font-black tracking-[-0.05em] text-[#0a5f46] sm:text-[4.4rem] lg:text-[5.15rem]">
              {t("hero.title1")}
              <span className="mt-2 block text-[#ff6b0b]">{t("hero.title2")}</span>
            </h1>

            <p className="mx-auto mt-6 max-w-[31rem] text-[1.02rem] leading-[1.55] font-medium text-[#6e706e] lg:mx-0">
              {t("hero.sub")}
            </p>

            <div className="mt-6 max-w-[34.5rem] overflow-hidden rounded-[1.6rem] border border-[#eeaf84] bg-white/88 text-left shadow-[0_24px_64px_rgba(162,139,76,0.16)] backdrop-blur-sm">
              <div className="flex items-stretch gap-4 p-5 sm:gap-5 sm:p-6">
                <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-full border-[3px] border-[#ff6b0b] text-[#ff6b0b]">
                  <Ban className="h-7 w-7" />
                </div>
                <div className="min-w-0 flex-1 pt-1">
                  <p className="text-[1rem] leading-none font-black text-[#ff6b0b] uppercase sm:text-[1.14rem]">
                    {t("hero.notice1.title")}
                  </p>
                  <p className="mt-2 max-w-[15.5rem] text-[0.98rem] leading-[1.3] font-medium text-[#222222]">
                    {t("hero.notice1.desc")}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-4">
                  <div className="hidden h-14 w-px bg-[#f0c39e] sm:block" />
                  <div className="flex h-15 w-15 items-center justify-center rounded-full bg-[#fff6ee] text-[#e19c59]">
                    <Users className="h-7 w-7" />
                  </div>
                </div>
              </div>

              <div className="h-px bg-[#bfe0c5]" />

              <div className="flex items-stretch gap-4 p-5 sm:gap-5 sm:p-6">
                <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-full bg-[#0a9d63] text-white shadow-[0_12px_26px_rgba(10,157,99,0.24)]">
                  <Leaf className="h-7 w-7" />
                </div>
                <div className="min-w-0 flex-1 pt-1">
                  <p className="text-[1rem] leading-none font-black text-[#0c8d57] uppercase sm:text-[1.14rem]">
                    {t("hero.notice2.title")}
                  </p>
                  <p className="mt-2 max-w-[15.5rem] text-[0.98rem] leading-[1.3] font-medium text-[#222222]">
                    {t("hero.notice2.desc")}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-4">
                  <div className="hidden h-14 w-px bg-[#bfe0c5] sm:block" />
                  <div className="flex h-15 w-15 items-center justify-center rounded-full bg-[#eef9f0] text-[#0c9e65]">
                    <Sprout className="h-7 w-7" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <Button
                variant="hero"
                size="lg"
                className="h-12 rounded-2xl bg-[#0f572f] px-6 text-[0.98rem] font-semibold shadow-[0_16px_34px_rgba(15,87,47,0.22)] hover:bg-[#0c4d29]"
                asChild
              >
                <a href="#sizes">
                  {t("hero.cta1")} <ArrowRight className="ml-2 h-4.5 w-4.5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 rounded-2xl border-[#e3ddd3] bg-white/95 px-6 text-[0.98rem] font-semibold text-[#2a2a2a] shadow-[0_10px_24px_rgba(167,171,177,0.12)] hover:bg-[#faf8f2]"
                asChild
              >
                <a href="#materials">{t("hero.cta2")}</a>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                type="button"
                className="h-12 rounded-2xl bg-[#eef6c9] px-6 text-[0.98rem] font-semibold text-[#2a2a2a] shadow-[0_12px_24px_rgba(174,191,96,0.18)] hover:bg-[#e6f0ba]"
                onClick={onEnquire}
              >
                {t("nav.enquire")}
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-up lg:min-h-[640px]" style={{ animationDelay: "0.15s" }}>
            <div className="absolute inset-x-10 top-0 bottom-14 rounded-full bg-[radial-gradient(circle_at_center,rgba(220,237,168,0.95)_0%,rgba(234,241,207,0.56)_42%,rgba(255,252,244,0)_76%)]" />
            <div className="absolute inset-x-18 top-16 bottom-20 rounded-full bg-[radial-gradient(circle_at_center,rgba(180,212,123,0.34)_0%,rgba(255,252,244,0)_74%)]" />

            <span className="absolute top-10 left-[16%] h-2.5 w-2.5 rounded-full bg-[#d8df9a]" />
            <span className="absolute top-28 right-[16%] h-3 w-3 rounded-full bg-[#cad975]" />
            <span className="absolute top-48 left-[8%] h-2.5 w-2.5 rounded-full bg-[#86bb4e]" />
            <span className="absolute right-[2%] bottom-22 h-4 w-4 rounded-full bg-[#f0b46f]" />
            <Leaf className="absolute top-6 right-[21%] h-10 w-10 text-[#21975d]" />
            <Globe2 className="absolute bottom-10 right-[6%] h-8 w-8 text-white/90 drop-shadow-[0_4px_14px_rgba(255,255,255,0.6)]" />

            <div className="relative mx-auto flex max-w-[46rem] items-end justify-center pt-2">
              <img
                src={heroImg}
                alt="Biodegradable bags with corn and leaves"
                width={764}
                height={697}
                className="hero-product-image relative z-10 w-full max-w-[43rem] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
