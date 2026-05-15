import { Leaf } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary py-8 text-primary-foreground sm:py-10">
    <div className="container flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
      <div className="flex items-center gap-2 text-base font-bold sm:text-lg">
        <Leaf className="h-5 w-5 shrink-0" /> bactofun
      </div>
      <p className="max-w-md text-xs opacity-80 sm:text-sm">© {new Date().getFullYear()} bactofun. Made in India 🇮🇳 with love for the planet.</p>
    </div>
  </footer>
);

export default Footer;