
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Tournaments = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Tous les Tournois</h1>
        <p className="text-lg text-muted-foreground mb-16">
          Page en cours de développement. Cette page affichera tous les tournois disponibles avec des options de filtrage et de recherche.
        </p>
        
        <div className="flex justify-center items-center h-64 border border-border rounded-lg">
          <p className="text-2xl text-muted-foreground">Bientôt disponible</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tournaments;
