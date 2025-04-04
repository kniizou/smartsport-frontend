
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-md esports-gradient flex items-center justify-center">
                <span className="font-bold text-white">SS</span>
              </div>
              <span className="font-bold text-xl">SmartSport</span>
            </div>
            <p className="text-sm text-muted-foreground">
              La plateforme de gestion des tournois e-sport pour les joueurs passionnés.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-3 text-lg">Plateforme</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/" className="hover:text-accent transition-colors">Accueil</Link></li>
              <li><Link to="/tournaments" className="hover:text-accent transition-colors">Tournois</Link></li>
              <li><Link to="/games" className="hover:text-accent transition-colors">Jeux</Link></li>
              <li><Link to="/ranking" className="hover:text-accent transition-colors">Classement</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3 text-lg">Ressources</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="/support" className="hover:text-accent transition-colors">Support</Link></li>
              <li><Link to="/news" className="hover:text-accent transition-colors">Actualités</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3 text-lg">Légal</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/terms" className="hover:text-accent transition-colors">Conditions d'utilisation</Link></li>
              <li><Link to="/privacy" className="hover:text-accent transition-colors">Politique de confidentialité</Link></li>
              <li><Link to="/cookies" className="hover:text-accent transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SmartSport. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
