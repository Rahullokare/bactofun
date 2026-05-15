import { Globe, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useLanguage, LANGUAGES } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const LanguageSwitcher = ({ className }: { className?: string }) => {
  const { lang, setLang, t } = useLanguage();
  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className={cn("gap-1.5", className)} aria-label={t("lang.label")}>
          <Globe className="h-4 w-4 shrink-0" />
          <span className="max-w-[4.5rem] truncate font-semibold sm:max-w-none">{current.native}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuLabel>{t("lang.label")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {LANGUAGES.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => setLang(l.code)}
            className="flex items-center justify-between cursor-pointer"
          >
            <span className="font-medium">{l.native}</span>
            {lang === l.code && <Check className="w-4 h-4 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;