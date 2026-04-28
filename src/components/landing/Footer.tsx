import { Facebook, Instagram, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export const Footer = () => {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground pt-20 pb-8">
      <div className="container-soft">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Coluna 1 */}
          <div>
            <div className="font-serif text-2xl font-semibold">{siteConfig.name}</div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold-light mt-1">
              {siteConfig.role} · {siteConfig.crp}
            </div>
            <p className="mt-5 text-sm text-primary-foreground/75 leading-relaxed">
              Atendimento psicológico online com Terapia Cognitivo-Comportamental,
              com foco em ansiedade. Um espaço seguro para você cuidar da sua
              saúde mental.
            </p>
          </div>

          {/* Coluna 2 — Contato */}
          <div>
            <h3 className="font-serif text-lg mb-5 text-gold-light">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="flex items-center gap-3 text-primary-foreground/85 hover:text-gold-light transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-primary-foreground/85 hover:text-gold-light transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/85 hover:text-gold-light transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp · {siteConfig.whatsappDisplay}
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 — Redes */}
          <div>
            <h3 className="font-serif text-lg mb-5 text-gold-light">Redes sociais</h3>
            <div className="flex gap-3">
              {[
                { href: siteConfig.instagram, icon: Instagram, label: "Instagram" },
                { href: siteConfig.facebook, icon: Facebook, label: "Facebook" },
                { href: siteConfig.linkedin, icon: Linkedin, label: "LinkedIn" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full bg-primary-foreground/10 hover:bg-gradient-gold hover:text-primary flex items-center justify-center transition-all duration-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-5 py-3 rounded-full text-sm font-medium transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/15 flex flex-col md:flex-row justify-between gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</p>
          <p>Sigilo profissional garantido conforme o Código de Ética do Psicólogo.</p>
        </div>
      </div>
    </footer>
  );
};
