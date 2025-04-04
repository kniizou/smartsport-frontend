
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden py-10 sm:py-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-esports-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-esports-accent/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full border border-accent/50 bg-accent/5 text-accent text-sm font-medium">
              La nouvelle génération de tournois e-sport
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Gerez vos <span className="text-accent text-glow">tournois e-sport</span> comme un pro
            </h1>
            <p className="text-lg text-muted-foreground">
              Créez, gérez et participez à des tournois de Valorant, FIFA, League of Legends et plus encore. Suivez les classements et résultats en temps réel.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="esports-gradient">
                Créer un tournoi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-accent/50 hover:border-accent text-accent hover:bg-accent/10">
                Explorer les tournois
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-secondary border-2 border-background"></div>
                <div className="w-8 h-8 rounded-full bg-secondary border-2 border-background"></div>
                <div className="w-8 h-8 rounded-full bg-secondary border-2 border-background"></div>
                <div className="w-8 h-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs">+</div>
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">2,000+</span> joueurs ont rejoint la plateforme
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
