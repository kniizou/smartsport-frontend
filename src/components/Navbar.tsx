
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, LogIn, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/50 backdrop-blur-xl bg-background/80">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2 mr-6">
            <div className="w-10 h-10 rounded-xl esports-gradient shadow-lg shadow-esports-purple/20 flex items-center justify-center">
              <span className="font-bold text-white">SS</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline-block">
              SmartSport
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="px-3 py-2 rounded-lg text-foreground/80 hover:text-accent hover:bg-accent/5 transition-colors">
              Accueil
            </Link>
            <Link to="/tournaments" className="px-3 py-2 rounded-lg text-foreground/80 hover:text-accent hover:bg-accent/5 transition-colors">
              Tournois
            </Link>
            <Link to="/games" className="px-3 py-2 rounded-lg text-foreground/80 hover:text-accent hover:bg-accent/5 transition-colors">
              Jeux
            </Link>
            <Link to="/ranking" className="px-3 py-2 rounded-lg text-foreground/80 hover:text-accent hover:bg-accent/5 transition-colors">
              Classement
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Rechercher..." 
              className="w-48 pl-10 pr-4 py-2 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-sm"
            />
          </div>
          <Button variant="outline" className="border-accent/50 text-accent hover:bg-accent/10 hover:border-accent">
            <LogIn className="mr-2 h-4 w-4" /> Se connecter
          </Button>
          <Button className="esports-gradient shadow-lg shadow-esports-purple/20">
            <User className="mr-2 h-4 w-4" /> S'inscrire
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-3">
          <Button variant="outline" size="icon" className="rounded-lg border-border/50">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-lg border-border/50" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-background/95 backdrop-blur-md border-b border-border z-50 animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col space-y-5">
            <Link
              to="/"
              className="px-4 py-2.5 rounded-lg hover:bg-secondary/50 transition-colors flex items-center"
              onClick={toggleMenu}
            >
              Accueil
            </Link>
            <Link
              to="/tournaments"
              className="px-4 py-2.5 rounded-lg hover:bg-secondary/50 transition-colors flex items-center"
              onClick={toggleMenu}
            >
              Tournois
            </Link>
            <Link
              to="/games"
              className="px-4 py-2.5 rounded-lg hover:bg-secondary/50 transition-colors flex items-center"
              onClick={toggleMenu}
            >
              Jeux
            </Link>
            <Link
              to="/ranking"
              className="px-4 py-2.5 rounded-lg hover:bg-secondary/50 transition-colors flex items-center"
              onClick={toggleMenu}
            >
              Classement
            </Link>
            <div className="flex flex-col space-y-3 pt-3 border-t border-border">
              <Button variant="outline" className="justify-start border-accent text-accent hover:bg-accent/10">
                <LogIn className="mr-2 h-4 w-4" /> Se connecter
              </Button>
              <Button className="justify-start esports-gradient">
                <User className="mr-2 h-4 w-4" /> S'inscrire
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
