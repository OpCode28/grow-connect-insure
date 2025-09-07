import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import AgricultureShowcase from "@/components/AgricultureShowcase";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <HowItWorks />
        <AgricultureShowcase />
        <Features />
        <CallToAction />
        <Footer />
        <Chatbot />
      </div>
    </LanguageProvider>
  );
};

export default Index;
