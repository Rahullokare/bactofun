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
  <section id="contact" className="py-20 md:py-28 gradient-cream">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm">{t("contact.kicker")}</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{t("contact.title")}</h2>
        <p className="text-muted-foreground">{t("contact.sub")}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {team.map((t) => (
          <div key={t.role} className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-elegant transition-smooth border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl gradient-leaf flex items-center justify-center">
                <User className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{t.name}</h3>
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
      <div className="text-center mt-12">
        <Button variant="hero" size="lg" onClick={onEnquire}>{t("cta.enquiry")}</Button>
      </div>
    </div>
  </section>
  );
};

export default Contact;
