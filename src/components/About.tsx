import { Card } from "@/components/ui/card";
import { Heart, Users, Award } from "lucide-react";

export const About = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">La Nostra Storia</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dal 1985, la famiglia Rossi porta avanti con passione la tradizione culinaria 
            emiliano-romagnola nel cuore di Forlimpopoli, città natale di Pellegrino Artusi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 text-center bg-card border-border hover:shadow-card-custom transition-all duration-300">
            <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">Passione</h3>
            <p className="text-muted-foreground">
              Ogni piatto è preparato con amore e rispetto per le ricette tradizionali 
              tramandate di generazione in generazione.
            </p>
          </Card>

          <Card className="p-8 text-center bg-card border-border hover:shadow-card-custom transition-all duration-300">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">Famiglia</h3>
            <p className="text-muted-foreground">
              Un ambiente familiare dove ogni ospite è accolto come un amico, 
              in un'atmosfera calda e accogliente.
            </p>
          </Card>

          <Card className="p-8 text-center bg-card border-border hover:shadow-card-custom transition-all duration-300">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">Qualità</h3>
            <p className="text-muted-foreground">
              Ingredienti selezionati dai migliori produttori locali per garantire 
              freschezza e autenticità in ogni portata.
            </p>
          </Card>
        </div>

        <div className="bg-gradient-card rounded-lg p-8 border border-border">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-bordeaux mb-4">Nel Cuore di Forlimpopoli</h3>
              <p className="text-muted-foreground mb-4">
                Situato nella storica via Roma, Il Melograno si trova a pochi passi dalla Casa Artusi, 
                tempio della gastronomia italiana. La nostra posizione ci permette di essere 
                immersi nella cultura culinaria che ha reso famosa questa terra in tutto il mondo.
              </p>
              <p className="text-muted-foreground">
                Il nostro chef, formatosi nelle migliori cucine dell'Emilia-Romagna, 
                reinterpreta con creatività i piatti della tradizione, mantenendo 
                sempre il rispetto per i sapori autentici.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-hero rounded-full w-32 h-32 mx-auto flex items-center justify-center mb-4">
                <span className="text-4xl font-bold text-primary-foreground">1985</span>
              </div>
              <p className="text-lg font-semibold text-foreground">Anni di Tradizione</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};