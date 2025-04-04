
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
    <nav className="sticky top-0 z-50 w-full border-b border-border backdrop-blur-md bg-background/80">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-md esports-gradient flex items-center justify-center">
              <span className="font-bold text-white">SS</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline-block">
              SmartSport
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground/80 hover:text-accent transition-colors">
            Accueil
          </Link>
          <Link to="/tournaments" className="text-foreground/80 hover:text-accent transition-colors">
            Tournois
          </Link>
          <Link to="/games" className="text-foreground/80 hover:text-accent transition-colors">
            Jeux
          </Link>
          <Link to="/ranking" className="text-foreground/80 hover:text-accent transition-colors">
            Classement
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="icon" className="rounded-full">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <LogIn className="mr-2 h-4 w-4" /> Se connecter
          </Button>
          <Button className="esports-gradient">
            <User className="mr-2 h-4 w-4" /> S'inscrire
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <Button variant="outline" size="icon" className="mr-2" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-background border-b border-border z-50">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="px-4 py-2 hover:bg-secondary rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Accueil
            </Link>
            <Link
              to="/tournaments"
              className="px-4 py-2 hover:bg-secondary rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Tournois
            </Link>
            <Link
              to="/games"
              className="px-4 py-2 hover:bg-secondary rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Jeux
            </Link>
            <Link
              to="/ranking"
              className="px-4 py-2 hover:bg-secondary rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Classement
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t border-border">
              <Button variant="outline" className="justify-start border-accent text-accent hover:bg-accent hover:text-accent-foreground">
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
