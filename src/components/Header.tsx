import { MapPin, Phone, Clock } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary">Il Melograno</h1>
            <p className="text-muted-foreground text-sm">Forlimpopoli - Tradizione & Sapore</p>
          </div>
          
          <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 text-sm">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin size={16} />
              <span>Via Roma, 123 - Forlimpopoli (FC)</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Phone size={16} />
              <span>0543 123456</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Clock size={16} />
              <span>Mart-Dom 19:00-23:00</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};