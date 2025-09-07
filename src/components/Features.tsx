import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Sprout, 
  TrendingUp, 
  Shield, 
  BarChart3, 
  Users, 
  Lock,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Features = () => {
  const userTypes = [
    {
      title: "For Farmers",
      icon: Sprout,
      description: "Access funding and insurance for your agricultural projects",
      features: [
        "Showcase your farming projects",
        "Access capital from verified investors", 
        "Get comprehensive insurance coverage",
        "Track project performance"
      ],
      cta: "Start Farming",
      gradient: "from-primary to-primary-glow"
    },
    {
      title: "For Investors",
      icon: TrendingUp,
      description: "Discover profitable agricultural investment opportunities",
      features: [
        "Browse vetted farming projects",
        "Diversify your investment portfolio",
        "Monitor real-time project metrics",
        "Enjoy protected investments"
      ],
      cta: "Start Investing",
      gradient: "from-trust to-accent-foreground"
    },
    {
      title: "For Insurance",
      icon: Shield,
      description: "Provide coverage for agricultural investments and operations",
      features: [
        "Access new agricultural markets",
        "Risk assessment tools",
        "Streamlined claims processing",
        "Data-driven premium calculation"
      ],
      cta: "Partner With Us",
      gradient: "from-accent-foreground to-trust"
    }
  ];

  const platformFeatures = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time data and insights for informed decision making"
    },
    {
      icon: Lock,
      title: "Secure Platform",
      description: "Bank-level security with end-to-end encryption"
    },
    {
      icon: Users,
      title: "Community Network",
      description: "Connect with verified farmers, investors, and insurers"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* User Type Features */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Built for Everyone
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're growing crops, seeking returns, or providing protection, 
            we have the tools you need to succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {userTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <Card key={index} className="relative overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 border-border/50">
                <div className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-5`} />
                <CardHeader className="relative z-10 text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {type.title}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {type.description}
                  </p>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-3 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full shadow-soft hover:shadow-glow transition-all duration-300">
                    {type.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Platform Features */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Powerful Platform Features
          </h3>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Built with cutting-edge technology to ensure reliability, security, and growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {platformFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;