import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-trust relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 bg-trust-foreground/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-trust-foreground" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-trust-foreground mb-6">
            Ready to Transform Agriculture?
          </h2>

          {/* Description */}
          <p className="text-xl text-trust-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of farmers, investors, and insurance providers who are already 
            building the future of sustainable agriculture.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-trust-foreground/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-trust-foreground rounded-full" />
              <span>No Setup Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-trust-foreground rounded-full" />
              <span>Instant Approval</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-trust-foreground rounded-full" />
              <span>24/7 Support</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-4 shadow-glow hover:shadow-soft transition-all duration-300"
            >
              Join the Platform
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4 border-trust-foreground/30 text-trust-foreground hover:bg-trust-foreground hover:text-trust transition-all duration-300"
            >
              Schedule Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 pt-8 border-t border-trust-foreground/20">
            <p className="text-trust-foreground/70 mb-4">Trusted by leading organizations</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-trust-foreground font-bold text-lg">AgriBank</div>
              <div className="text-trust-foreground font-bold text-lg">FarmInsure</div>
              <div className="text-trust-foreground font-bold text-lg">GreenFunds</div>
              <div className="text-trust-foreground font-bold text-lg">CropSecure</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;