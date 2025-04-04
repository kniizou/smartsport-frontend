
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const FAQ = () => {
  const faqItems = [
    {
      question: "Comment s'inscrire à un tournoi ?",
      answer: "Pour vous inscrire à un tournoi, naviguez vers la page Tournois, sélectionnez le tournoi qui vous intéresse et cliquez sur le bouton 'S'inscrire'. Suivez ensuite les instructions pour compléter votre inscription."
    },
    {
      question: "Quels types de jeux sont supportés ?",
      answer: "Notre plateforme supporte une large variété de jeux e-sport populaires, incluant League of Legends, Counter-Strike, Valorant, Fortnite, Rocket League, et bien d'autres. Consultez notre page Jeux pour voir la liste complète."
    },
    {
      question: "Comment fonctionne le système de classement ?",
      answer: "Notre système de classement est basé sur un algorithme ELO modifié. Vous gagnez ou perdez des points en fonction de vos performances dans les tournois et des matchs contre d'autres joueurs. Plus votre adversaire est classé haut, plus vous gagnez de points en cas de victoire."
    },
    {
      question: "Puis-je créer mon propre tournoi ?",
      answer: "Oui, les utilisateurs enregistrés peuvent créer leurs propres tournois. Après vous être connecté, rendez-vous sur la page Tournois et cliquez sur 'Créer un tournoi'. Vous pourrez alors définir les paramètres de votre tournoi, comme le format, les jeux, et les règles."
    },
    {
      question: "Comment contacter le support ?",
      answer: "Vous pouvez contacter notre équipe de support via notre page Contact ou directement par email à support@smartsport.com. Nous nous efforçons de répondre à toutes les demandes dans un délai de 24 heures."
    },
    {
      question: "Les tournois sont-ils gratuits ?",
      answer: "Cela dépend du tournoi. Certains tournois sont gratuits, tandis que d'autres peuvent avoir des frais d'inscription. Ces informations sont toujours clairement indiquées sur la page du tournoi."
    },
    {
      question: "Comment récupérer mes récompenses ?",
      answer: "Si vous avez gagné un tournoi, les récompenses seront distribuées selon les modalités indiquées dans les règles du tournoi. Généralement, vous recevrez un email avec les instructions pour réclamer votre prix."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-3">Foire aux questions</h1>
            <p className="text-muted-foreground">
              Retrouvez les réponses aux questions les plus fréquemment posées par notre communauté
            </p>
          </div>

          <Card className="border border-border/50 bg-card/50 backdrop-blur-md shadow-xl">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="space-y-2">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg px-5">
                    <AccordionTrigger className="text-lg font-medium py-4 hover:text-accent transition-colors">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-1">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Vous n'avez pas trouvé votre réponse ? <a href="/contact" className="text-accent hover:underline">Contactez-nous</a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
