import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = ({ onEnquire }: { onEnquire: () => void }) => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const links = [
    { href: "#about", label: t("nav.about") },
    { href: "#materials", label: t("nav.materials") },
    { href: "#features", label: t("nav.features") },
    { href: "#sizes", label: t("nav.sizes") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-stone-200/80 bg-white/92 backdrop-blur-xl">
      <nav className="container flex min-h-16 items-center justify-between gap-3 py-3.5">
        <a href="#" className="flex min-w-0 shrink items-center gap-2 font-bold text-primary">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full gradient-leaf shadow-[0_10px_28px_rgba(44,132,74,0.2)]">
            <Leaf className="h-4 w-4 text-primary-foreground" />
          </span>
          <span className="truncate font-[Playfair_Display] text-[1.15rem] text-stone-900 md:text-[1.35rem]">Bactofun Compostable</span>
        </a>
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.95rem] font-medium text-stone-700 transition-smooth hover:text-emerald-700"
            >
              {l.label}
            </a>
          ))}
          <LanguageSwitcher />
          <Button variant="hero" size="sm" className="h-11 rounded-xl px-5 text-[0.95rem] font-semibold" onClick={onEnquire}>
            {t("nav.enquire")}
          </Button>
        </div>
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 md:hidden">
          <LanguageSwitcher className="h-10 rounded-xl px-3" />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200 bg-white"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-stone-200 bg-white md:hidden">
          <div className="container flex max-h-[calc(100dvh-4rem)] flex-col gap-3 overflow-y-auto py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className="rounded-xl px-3 py-2.5 text-sm font-medium transition-smooth hover:bg-stone-100"
              >
                {l.label}
              </a>
            ))}
            <Button
              variant="hero"
              className="mt-1 w-full"
              onClick={() => {
                closeMenu();
                onEnquire();
              }}
            >
              {t("nav.enquire")}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
