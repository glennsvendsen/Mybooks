import { useLang } from "@/lib/i18n";

export const SHOTS = ["01-reading", "02-library", "03-details", "04-stats", "05-recs", "06-add", "07-finish"] as const;
const base = import.meta.env.BASE_URL;

type Props = { index: number; priority?: boolean; className?: string };

const Phone = ({ index, priority = false, className = "" }: Props) => {
  const { lang, t } = useLang();
  const name = SHOTS[index];
  const src = `${base}shots/${lang}-${name}`;
  const caption = t.showcase.captions[index];
  return (
    <div className={`relative rounded-[2.6rem] bg-[#1F1B16] p-[7px] shadow-phone ring-1 ring-black/20 ${className}`}>
      <picture>
        <source srcSet={`${src}.webp`} type="image/webp" />
        <img
          src={`${src}.jpg`}
          alt={`${t.alt.phone} ${caption}`}
          width={660}
          height={1434}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          className="block h-auto w-full rounded-[2.1rem] bg-muted"
        />
      </picture>
    </div>
  );
};

export default Phone;
