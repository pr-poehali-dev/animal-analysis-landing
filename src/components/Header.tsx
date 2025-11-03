import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  onBotClick: () => void;
}

const Header = ({ onBotClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Activity" className="text-primary" size={32} />
          <span className="text-2xl font-heading font-bold text-foreground">СмартЛаб</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">Преимущества</a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">Как работает</a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Тарифы</a>
          <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
          <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
        </nav>
        <Button onClick={onBotClick} size="sm" className="hidden md:flex">
          Перейти в бот
        </Button>
      </div>
    </header>
  );
};

export default Header;
