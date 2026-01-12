import { ShieldCheck, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold">Mamedio Veículos</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Conectando você às melhores agências de veículos com transparência, segurança e confiança. Sua conquista começa aqui.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Navegação</h4>
            <ul className="space-y-3">
              {["Início", "Veículos", "Agências", "Como funciona", "Sobre nós"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Suporte</h4>
            <ul className="space-y-3">
              {["Central de ajuda", "Termos de uso", "Política de privacidade", "FAQ", "Seja parceiro"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-accent" />
                contato@mamedioveiculos.com.br
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 text-accent" />
                (11) 99999-9999
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                Av. Paulista, 1000 - São Paulo, SP
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Mamedio Veículos. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>Plataforma 100% segura</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
