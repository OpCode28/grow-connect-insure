import { Card, CardContent } from "@/components/ui/card";
import { Sprout, HandCoins, Shield, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Sprout,
      title: "Farmers List Projects",
      description: "Agricultural producers showcase their farming projects, crop plans, and funding needs on our secure platform.",
      step: "01"
    },
    {
      icon: HandCoins,
      title: "Investors Connect",
      description: "Qualified investors browse vetted agricultural opportunities and make informed investment decisions.",
      step: "02"
    },
    {
      icon: Shield,
      title: "Insurance Protects",
      description: "Insurance providers offer comprehensive coverage options to protect both farmers and investors from risks.",
      step: "03"
    }
  ];

  return (
    <section className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform creates a seamless ecosystem where agriculture meets finance and protection.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="h-full shadow-card hover:shadow-glow transition-all duration-300 border-border/50">
                  <CardContent className="p-8 text-center">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                        {step.step}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Arrow between cards */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-primary/60" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;