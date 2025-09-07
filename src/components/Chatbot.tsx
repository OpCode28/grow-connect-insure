import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Send, X, Bot, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import freshFruits from "@/assets/fresh-fruits.jpg";
import happyFarmer from "@/assets/happy-farmer.jpg";

type Message = {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { translate } = useLanguage();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message when chatbot opens
      const welcomeMessage: Message = {
        id: 1,
        text: translate('chatbot.welcome'),
        isBot: true,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, translate]);

  const getAgriculturalResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Agricultural responses based on keywords
    if (message.includes('farmer') || message.includes('farming') || message.includes('crop')) {
      return "I can help you connect with investors and insurance providers. Our platform has helped over 10,000 farmers secure funding for their agricultural projects. Would you like to know more about listing your farming project?";
    }
    
    if (message.includes('invest') || message.includes('money') || message.includes('fund')) {
      return "Great! We have many verified agricultural projects seeking investment. You can browse projects by crop type, location, and expected returns. Our investors have seen average returns of 12-15% annually. Would you like to explore current opportunities?";
    }
    
    if (message.includes('insurance') || message.includes('protect') || message.includes('coverage')) {
      return "We offer comprehensive agricultural insurance including crop insurance, weather protection, and investment insurance. Our insurance partners provide coverage for 95% of projects on our platform. What type of coverage are you interested in?";
    }
    
    if (message.includes('fruit') || message.includes('mango') || message.includes('banana')) {
      return "Fruit cultivation is one of our most popular investment categories! We have projects for mangoes, bananas, oranges, and other fruits. These typically offer good returns and have strong market demand. Would you like to see current fruit farming projects?";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('namaste')) {
      return "Hello! Welcome to AgriConnect. I'm here to help you with farming projects, investments, and insurance. What would you like to know more about?";
    }
    
    // Default response
    return "That's an interesting question! AgriConnect specializes in connecting farmers with investors and insurance providers. I can help you with information about farming projects, investment opportunities, or insurance options. What specific area would you like to explore?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getAgriculturalResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="rounded-full w-14 h-14 shadow-glow hover:shadow-soft transition-all duration-300"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-2rem)]">
          <Card className="shadow-glow border-primary/20 h-[500px] flex flex-col">
            {/* Header */}
            <CardHeader className="bg-gradient-hero text-primary-foreground rounded-t-lg p-4">
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">AgriConnect Assistant</div>
                  <div className="text-xs text-primary-foreground/80">
                    Farming • Investment • Insurance
                  </div>
                </div>
              </CardTitle>
            </CardHeader>

            {/* Messages Area */}
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {message.isBot && (
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isBot
                        ? 'bg-secondary text-secondary-foreground'
                        : 'bg-primary text-primary-foreground'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <div className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                  </div>

                  {!message.isBot && (
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-secondary text-secondary-foreground p-3 rounded-lg">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </CardContent>

            {/* Input Area */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={translate('chatbot.placeholder')}
                  className="flex-1"
                />
                <Button 
                  onClick={handleSendMessage}
                  size="sm"
                  disabled={!inputValue.trim()}
                  className="px-3"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              
              {/* Sample Images */}
              <div className="flex gap-2 mt-3">
                <img 
                  src={freshFruits} 
                  alt="Fresh fruits" 
                  className="w-12 h-12 rounded-lg object-cover cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setInputValue("Tell me about fruit farming opportunities")}
                />
                <img 
                  src={happyFarmer} 
                  alt="Happy farmer" 
                  className="w-12 h-12 rounded-lg object-cover cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setInputValue("How can I connect with farmers?")}
                />
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;