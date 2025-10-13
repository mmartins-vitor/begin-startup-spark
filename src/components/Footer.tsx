import { Mail, Phone, MapPin } from "lucide-react";
import logoImage from "@/assets/begin-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and description */}
          <div>
            <img 
              src={logoImage} 
              alt="BEGIN Logo" 
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-bold mb-2">BEGIN</h3>
            <p className="text-primary-foreground/80 text-sm">
              Brazil Egix Innovation - Transformando o futuro através da tecnologia
            </p>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="w-4 h-4" />
                <span>contato@begin.com.br</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="w-4 h-4" />
                <span>+55 11 9999-9999</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, Brasil</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Soluções</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Portfólio</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Contato</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2025 BEGIN - Brazil Egix Innovation. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
