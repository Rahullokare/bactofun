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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="container flex min-h-14 items-center justify-between gap-3 py-3 sm:min-h-16 sm:py-4">
        <a href="#" className="flex min-w-0 shrink items-center gap-2 font-bold text-primary">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full gradient-leaf shadow-soft sm:h-10 sm:w-10">
            <Leaf className="h-4 w-4 text-primary-foreground sm:h-5 sm:w-5" />
          </span>
          <span className="truncate font-[Playfair_Display] text-base sm:text-lg md:text-xl">bactofun</span>
        </a>
        <div className="hidden items-center gap-4 md:flex lg:gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-smooth hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <LanguageSwitcher />
          <Button variant="hero" size="sm" onClick={onEnquire}>
            {t("nav.enquire")}
          </Button>
        </div>
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 md:hidden">
          <LanguageSwitcher className="h-9 px-2 sm:px-3" />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container flex max-h-[calc(100dvh-4rem)] flex-col gap-3 overflow-y-auto py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className="rounded-md px-2 py-2.5 text-sm font-medium transition-smooth hover:bg-muted"
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
