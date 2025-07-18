import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Contatti e Orari</h2>
          <p className="text-xl text-muted-foreground">
            Vieni a trovarci o contattaci per informazioni
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-bordeaux mb-6">Informazioni</h3>
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-card border-border">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Indirizzo</h4>
                    <p className="text-muted-foreground">
                      Via Roma, 123<br />
                      47034 Forlimpopoli (FC)<br />
                      Emilia-Romagna, Italia
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-border">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefono</h4>
                    <p className="text-muted-foreground">+39 0543 123456</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Per informazioni e consigli sui nostri piatti
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-border">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">info@ilmelograno-forlimpopoli.it</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-border">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Orari di Apertura</h4>
                    <div className="space-y-1 text-muted-foreground">
                      <p><span className="font-medium">Martedì - Domenica:</span> 19:00 - 23:00</p>
                      <p><span className="font-medium">Lunedì:</span> Chiuso</p>
                      <p className="text-sm mt-2 text-primary">
                        *Consigliamo di telefonare per confermare la disponibilità
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-bordeaux mb-6">Come Raggiungerci</h3>
            <Card className="p-6 bg-gradient-card border-border mb-6">
              <h4 className="font-semibold text-foreground mb-3">Dove Siamo</h4>
              <p className="text-muted-foreground mb-4">
                Il ristorante si trova nel centro storico di Forlimpopoli, 
                a pochi metri dalla famosa Casa Artusi e dal Municipio.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>In auto:</strong> Parcheggio gratuito in Piazza Fratti (100m)</p>
                <p><strong>In treno:</strong> Stazione di Forlimpopoli (800m)</p>
                <p><strong>Aeroporto:</strong> Bologna Marconi (90 km)</p>
              </div>
            </Card>

            <div className="bg-muted rounded-lg p-8 text-center">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Non accettiamo prenotazioni online
              </h4>
              <p className="text-muted-foreground mb-6">
                Per garantire un servizio personalizzato, preferiamo il contatto diretto. 
                Chiamaci per prenotare il tuo tavolo!
              </p>
              <Button variant="elegant" size="lg" className="text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                Chiama Ora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};