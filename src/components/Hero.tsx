
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
          
          <div className="relative">
            <div className="w-full h-[400px] overflow-hidden rounded-xl relative border border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-esports-blue/70 to-esports-darkpurple/40"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full animate-pulse-glow bg-accent/20 backdrop-blur-sm">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Comment ça marche</h3>
                  <p className="text-sm text-muted-foreground mb-4">Découvrez comment organiser votre premier tournoi</p>
                  <Link to="/how-it-works">
                    <Button variant="outline" className="border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20">
                      Regarder la vidéo
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-esports-accent/30 rounded-full blur-2xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-esports-purple/30 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
