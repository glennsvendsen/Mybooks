import { Apple } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { SITE } from "@/lib/site";

// Placeholder App Store button. TODO: swap for Apple's official badge artwork once the App Store URL is live.
const StoreBadge = ({ className = "" }: { className?: string }) => {
  const { t } = useLang();
  return (
    <a
      href={SITE.appStoreUrl}
      className={`inline-flex items-center gap-3 rounded-xl bg-[#1F1B16] px-5 py-2.5 text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-black dark:bg-[#E8DED3] dark:text-[#14110F] dark:hover:bg-white ${className}`}
    >
      <Apple className="h-7 w-7 fill-current" aria-hidden="true" strokeWidth={0} />
      <span className="flex flex-col text-left leading-none">
        <span className="text-[11px] font-medium opacity-80">{t.badge.top}</span>
        <span className="mt-1 text-xl font-semibold tracking-tight">{t.badge.main}</span>
      </span>
    </a>
  );
};

export default StoreBadge;
