import { Phone, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const team = [
  { name: "Manoj Mayekar", role: "Partner", phone: "", email: "partner1@ganeshabag.in" },
  { name: "Bhaskar Tupsundar", role: "Partner", phone: "9930469825", email: "partner2@ganeshabag.in" },
];

const Contact = ({ onEnquire }: { onEnquire: () => void }) => {
  const { t } = useLanguage();
  return (
  <section id="contact" className="section-padding scroll-mt-20 gradient-cream sm:scroll-mt-24">
    <div className="container">
      <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 md:mb-14">
        <p className="mb-2 text-xs font-semibold tracking-wider text-accent uppercase sm:mb-3 sm:text-sm">{t("contact.kicker")}</p>
        <h2 className="mb-4 text-3xl font-bold text-balance sm:mb-6 sm:text-4xl md:text-5xl">{t("contact.title")}</h2>
        <p className="text-sm text-muted-foreground sm:text-base">{t("contact.sub")}</p>
      </div>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
        {team.map((t) => (
          <div key={t.role} className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-smooth hover:shadow-elegant sm:rounded-3xl sm:p-8">
            <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl gradient-leaf sm:h-16 sm:w-16">
                <User className="h-7 w-7 text-primary-foreground sm:h-8 sm:w-8" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold sm:text-xl">{t.name}</h3>
                <p className="text-accent font-semibold text-sm">{t.role}</p>
              </div>
            </div>
            <div className="space-y-3">
              {t.phone ? (
                <a href={`tel:${t.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-foreground hover:text-primary transition-smooth">
                  <Phone className="w-5 h-5 text-accent" /> <span className="font-medium">{t.phone}</span>
                </a>
              ) : (
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-accent" /> <span className="font-medium">Phone number pending</span>
                </div>
              )}
              <a href={`mailto:${t.email}`} className="flex items-center gap-3 text-foreground hover:text-primary transition-smooth">
                <Mail className="w-5 h-5 text-accent" /> <span className="font-medium">{t.email}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center sm:mt-12">
        <Button variant="hero" size="lg" className="w-full sm:w-auto" onClick={onEnquire}>{t("cta.enquiry")}</Button>
      </div>
    </div>
  </section>
  );
};

export default Contact;
