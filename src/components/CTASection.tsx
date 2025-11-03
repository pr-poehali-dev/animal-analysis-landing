import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface CTASectionProps {
  onBotClick: () => void;
}

const CTASection = ({ onBotClick }: CTASectionProps) => {
  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-4xl text-center animate-fade-in">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6 px-4">
          Узнайте о здоровье питомца прямо сейчас
        </h2>
        <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 opacity-90 px-4">
          Быстро, надежно, профессионально
        </p>
        <Button 
          onClick={onBotClick}
          size="lg" 
          variant="secondary"
          className="text-base md:text-lg h-12 md:h-14 px-6 md:px-8 shadow-2xl hover:shadow-xl transition-all animate-pulse-slow w-full sm:w-auto max-w-xs sm:max-w-none"
        >
          <Icon name="Send" size={18} className="mr-2" />
          Начать в Telegram
        </Button>
      </div>
    </section>
  );
};

export default CTASection;