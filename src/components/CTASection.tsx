import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface CTASectionProps {
  onBotClick: () => void;
}

const CTASection = ({ onBotClick }: CTASectionProps) => {
  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-4xl text-center animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
          Узнайте о здоровье питомца прямо сейчас
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Быстро, надежно, профессионально
        </p>
        <Button 
          onClick={onBotClick}
          size="lg" 
          variant="secondary"
          className="text-lg h-14 px-8 shadow-2xl hover:shadow-xl transition-all animate-pulse-slow"
        >
          <Icon name="Send" size={20} className="mr-2" />
          Начать в Telegram
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
