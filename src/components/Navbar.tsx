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
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2 font-bold text-xl text-primary">
          <span className="w-10 h-10 rounded-full gradient-leaf flex items-center justify-center shadow-soft">
            <Leaf className="w-5 h-5 text-primary-foreground" />
          </span>
          <span className="font-[Playfair_Display]">Vasundhara Compostable Bags</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth">
              {l.label}
            </a>
          ))}
          <LanguageSwitcher />
          <Button variant="hero" size="sm" onClick={onEnquire}>{t("nav.enquire")}</Button>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button className="p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium">
                {l.label}
              </a>
            ))}
            <Button variant="hero" onClick={() => { setOpen(false); onEnquire(); }}>{t("nav.enquire")}</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
