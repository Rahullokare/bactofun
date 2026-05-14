import { Leaf } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 font-bold text-lg">
        <Leaf className="w-5 h-5" /> Vasundhara Compostable Bags
      </div>
      <p className="text-sm opacity-80">© {new Date().getFullYear()} Vasundhara Compostable Bags. Made in India 🇮🇳 with love for the planet.</p>
    </div>
  </footer>
);

export default Footer;