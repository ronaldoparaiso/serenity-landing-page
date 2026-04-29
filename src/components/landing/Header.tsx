import { siteConfig } from "@/config/site";

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-6 md:py-8">
      <div className="container-soft flex justify-center">
        <a href="#top" className="flex flex-col leading-tight text-center">
          <span className="font-serif text-2xl md:text-3xl font-semibold text-primary tracking-tight">
            {siteConfig.name}
          </span>
          <span className="text-[10px] md:text-xs text-muted-foreground tracking-[0.25em] uppercase mt-1">
            <span className="text-gold">—</span> {siteConfig.role} · {siteConfig.crp}
          </span>
        </a>
      </div>
    </header>
  );
};
