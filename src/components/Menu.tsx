import { Card } from "@/components/ui/card";
import pastaImage from "@/assets/pasta-dish.jpg";
import meatImage from "@/assets/meat-dish.jpg";
import dessertImage from "@/assets/dessert-dish.jpg";

const menuItems = [
  {
    category: "Primi Piatti",
    image: pastaImage,
    dishes: [
      { name: "Tagliatelle alla Bolognese", description: "Pasta fresca all'uovo con ragù di carne di manzo", price: "€14" },
      { name: "Tortellini in Brodo", description: "Tortellini fatti a mano in brodo di cappone", price: "€16" },
      { name: "Lasagne della Casa", description: "Lasagne con ragù, besciamella e Parmigiano", price: "€15" },
      { name: "Risotto ai Porcini", description: "Risotto cremoso con funghi porcini di stagione", price: "€18" }
    ]
  },
  {
    category: "Secondi Piatti",
    image: meatImage,
    dishes: [
      { name: "Brasato al Sangiovese", description: "Carne brasata nel vino con contorno di stagione", price: "€22" },
      { name: "Scaloppine al Limone", description: "Scaloppine di vitello al limone con patate", price: "€20" },
      { name: "Branzino in Crosta", description: "Branzino fresco in crosta di sale con verdure", price: "€24" },
      { name: "Cotoletta alla Bolognese", description: "Cotoletta impanata con prosciutto e formaggio", price: "€19" }
    ]
  },
  {
    category: "Dolci",
    image: dessertImage,
    dishes: [
      { name: "Tiramisù della Casa", description: "Il nostro tiramisù con mascarpone e caffè", price: "€8" },
      { name: "Panna Cotta ai Frutti Rossi", description: "Panna cotta con coulis di frutti di bosco", price: "€7" },
      { name: "Gelato Artigianale", description: "Gelato di produzione propria, gusti di stagione", price: "€6" },
      { name: "Cannoli Siciliani", description: "Cannoli ripieni di ricotta e gocce di cioccolato", price: "€9" }
    ]
  }
];

export const Menu = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">La Nostra Carta</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Piatti tradizionali preparati con ingredienti freschi e di qualità, 
            nel rispetto delle ricette della nonna
          </p>
        </div>

        <div className="space-y-16">
          {menuItems.map((category, index) => (
            <div key={category.category} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={category.image}
                  alt={category.category}
                  className="w-full h-80 object-cover rounded-lg shadow-card-custom"
                />
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="text-3xl font-bold text-bordeaux mb-8">{category.category}</h3>
                <div className="space-y-6">
                  {category.dishes.map((dish) => (
                    <Card key={dish.name} className="p-6 bg-gradient-card border-border hover:shadow-card-custom transition-all duration-300">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-foreground mb-2">{dish.name}</h4>
                          <p className="text-muted-foreground">{dish.description}</p>
                        </div>
                        <span className="text-xl font-bold text-primary ml-4">{dish.price}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};