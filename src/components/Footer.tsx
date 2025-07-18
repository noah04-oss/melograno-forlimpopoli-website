import { MapPin, Phone, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-bordeaux text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold mb-4">Il Melograno</h3>
            <p className="opacity-90 mb-4">
              Tradizione culinaria emiliano-romagnola dal 1985
            </p>
            <p className="text-sm opacity-75">
              Nel cuore di Forlimpopoli, dove la passione per la buona cucina 
              si tramanda di generazione in generazione.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contatti Rapidi</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Phone size={16} />
                <span>0543 123456</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <MapPin size={16} />
                <span>Via Roma, 123 - Forlimpopoli</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Clock size={16} />
                <span>Mar-Dom 19:00-23:00</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Informazioni</h4>
            <div className="space-y-2 text-sm opacity-90">
              <p>P.IVA: 12345678901</p>
              <p>Codice Fiscale: RSSMRA85A01H199X</p>
              <p>Rea: FC-123456</p>
              <p className="mt-4 text-xs opacity-75">
                Non accettiamo prenotazioni online.<br />
                Contattaci telefonicamente.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2024 Il Melograno - Forlimpopoli. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};