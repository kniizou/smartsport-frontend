
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, LogIn, User, Gamepad, Trophy } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const isActive = (path: string) => location.pathname === path;

  const handleSignOut = async () => {
    await signOut();
  };

  // Obtenir les initiales du nom d'utilisateur pour l'avatar
  const getUserInitials = () => {
    if (!user) return "U";
    const email = user.email || "";
    return email.charAt(0).toUpperCase();
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
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-lg ${isActive('/') 
                ? 'text-accent bg-accent/10' 
                : 'text-foreground/80 hover:text-accent hover:bg-accent/5'} transition-colors`}
            >
              Accueil
            </Link>
            <Link 
              to="/tournaments" 
              className={`px-3 py-2 rounded-lg ${isActive('/tournaments') 
                ? 'text-accent bg-accent/10' 
                : 'text-foreground/80 hover:text-accent hover:bg-accent/5'} transition-colors`}
            >
              Tournois
            </Link>
            <Link 
              to="/games" 
              className={`px-3 py-2 rounded-lg ${isActive('/games') 
                ? 'text-accent bg-accent/10' 
                : 'text-foreground/80 hover:text-accent hover:bg-accent/5'} transition-colors flex items-center`}
            >
              <Gamepad className="mr-1 h-4 w-4" /> Jeux
            </Link>
            <Link 
              to="/ranking" 
              className={`px-3 py-2 rounded-lg ${isActive('/ranking') 
                ? 'text-accent bg-accent/10' 
                : 'text-foreground/80 hover:text-accent hover:bg-accent/5'} transition-colors flex items-center`}
            >
              <Trophy className="mr-1 h-4 w-4" /> Classement
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
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.user_metadata?.avatar_url} alt="Photo de profil" />
                    <AvatarFallback>{getUserInitials()}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <div className="px-2 py-1.5">
                  <p className="text-sm font-medium">{user.email}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {user.user_metadata?.username || "Utilisateur"}
                  </p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="cursor-pointer flex w-full">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profil</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut} className="text-destructive cursor-pointer">
                  <LogIn className="mr-2 h-4 w-4" />
                  <span>Se déconnecter</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" className="border-accent/50 text-accent hover:bg-accent/10 hover:border-accent">
                  <LogIn className="mr-2 h-4 w-4" /> Se connecter
                </Button>
              </Link>
              <Link to="/register">
                <Button className="esports-gradient shadow-lg shadow-esports-purple/20">
                  <User className="mr-2 h-4 w-4" /> S'inscrire
                </Button>
              </Link>
            </>
          )}
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
              className={`px-4 py-2.5 rounded-lg ${isActive('/') ? 'bg-accent/10 text-accent' : 'hover:bg-secondary/50'} transition-colors flex items-center`}
              onClick={toggleMenu}
            >
              Accueil
            </Link>
            <Link
              to="/tournaments"
              className={`px-4 py-2.5 rounded-lg ${isActive('/tournaments') ? 'bg-accent/10 text-accent' : 'hover:bg-secondary/50'} transition-colors flex items-center`}
              onClick={toggleMenu}
            >
              Tournois
            </Link>
            <Link
              to="/games"
              className={`px-4 py-2.5 rounded-lg ${isActive('/games') ? 'bg-accent/10 text-accent' : 'hover:bg-secondary/50'} transition-colors flex items-center`}
              onClick={toggleMenu}
            >
              <Gamepad className="mr-2 h-4 w-4" /> Jeux
            </Link>
            <Link
              to="/ranking"
              className={`px-4 py-2.5 rounded-lg ${isActive('/ranking') ? 'bg-accent/10 text-accent' : 'hover:bg-secondary/50'} transition-colors flex items-center`}
              onClick={toggleMenu}
            >
              <Trophy className="mr-2 h-4 w-4" /> Classement
            </Link>
            <div className="flex flex-col space-y-3 pt-3 border-t border-border">
              {user ? (
                <>
                  <Link to="/dashboard" onClick={toggleMenu}>
                    <Button variant="outline" className="justify-start border-accent text-accent hover:bg-accent/10 w-full">
                      <User className="mr-2 h-4 w-4" /> Profil
                    </Button>
                  </Link>
                  <Button 
                    className="justify-start w-full bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    onClick={handleSignOut}
                  >
                    <LogIn className="mr-2 h-4 w-4" /> Se déconnecter
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={toggleMenu}>
                    <Button variant="outline" className="justify-start border-accent text-accent hover:bg-accent/10 w-full">
                      <LogIn className="mr-2 h-4 w-4" /> Se connecter
                    </Button>
                  </Link>
                  <Link to="/register" onClick={toggleMenu}>
                    <Button className="justify-start esports-gradient w-full">
                      <User className="mr-2 h-4 w-4" /> S'inscrire
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
