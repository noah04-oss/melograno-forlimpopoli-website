import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-restaurant.jpg";

export const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h2 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Il Melograno
        </h2>
        <p className="text-xl lg:text-2xl mb-8 font-light animate-slide-in-left">
          Autentica cucina emiliano-romagnola nel cuore di Forlimpopoli
        </p>
        <p className="text-lg mb-10 opacity-90 animate-fade-in">
          Dove la tradizione incontra la passione. Dal 1985 vi accogliamo con i sapori 
          genuini della nostra terra, preparati con amore e ingredienti selezionati.
        </p>
        
        <div className="space-x-4 animate-fade-in">
          <Button variant="elegant" size="lg" className="text-lg px-8 py-3">
            Scopri il Menu
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-white/10 border-white text-white hover:bg-white hover:text-foreground">
            La Nostra Storia
          </Button>
        </div>
      </div>
    </section>
  );
};