import { Card, CardContent } from "@/components/ui/card";
import freshFruits from "@/assets/fresh-fruits.jpg";
import happyFarmer from "@/assets/happy-farmer.jpg";
import agriBanner from "@/assets/agri-banner.jpg";

const AgricultureShowcase = () => {
  return (
    <section className="py-16 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Celebrating Agricultural Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From fresh harvest to happy farmers - witness the beauty of sustainable agriculture
          </p>
        </div>

        {/* Main Banner */}
        <div className="mb-8">
          <Card className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-300">
            <CardContent className="p-0">
              <img
                src={agriBanner}
                alt="Agricultural excellence showcase"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-background">
                <h3 className="text-2xl font-bold mb-2">Farm to Market Excellence</h3>
                <p className="text-background/90">
                  Supporting farmers with technology, investment, and insurance for sustainable growth
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 group">
            <CardContent className="p-0 relative">
              <img
                src={freshFruits}
                alt="Fresh colorful fruits from Indian farms"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="font-bold text-lg mb-1">Fresh Harvest</h4>
                <p className="text-sm text-primary-foreground/90">
                  Premium quality fruits from our partner farms
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 group">
            <CardContent className="p-0 relative">
              <img
                src={happyFarmer}
                alt="Happy farmer with fresh produce"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-trust/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-trust-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="font-bold text-lg mb-1">Farmer Success</h4>
                <p className="text-sm text-trust-foreground/90">
                  Empowered farmers building sustainable livelihoods
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="text-center bg-background/50 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-primary mb-1">500+</div>
            <div className="text-sm text-muted-foreground">Fruit Varieties</div>
          </div>
          <div className="text-center bg-background/50 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-primary mb-1">1000+</div>
            <div className="text-sm text-muted-foreground">Happy Farmers</div>
          </div>
          <div className="text-center bg-background/50 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-primary mb-1">25+</div>
            <div className="text-sm text-muted-foreground">Indian States</div>
          </div>
          <div className="text-center bg-background/50 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Organic Quality</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgricultureShowcase;