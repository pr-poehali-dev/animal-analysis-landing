import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  onBotClick: () => void;
}

const HeroSection = ({ onBotClick }: HeroSectionProps) => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20">
              <Icon name="Stethoscope" size={16} className="mr-1" />
              Доверяют тысячи владельцев
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-foreground">
              Расшифровка анализов вашего питомца за 2 минуты
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
              Точная интерпретация результатов от команды ветеринарных врачей. Узнайте, что делать дальше и насколько это критично.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button 
                onClick={onBotClick} 
                size="lg" 
                className="text-base md:text-lg h-12 md:h-14 px-6 md:px-8 animate-pulse-slow shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
              >
                <Icon name="Send" size={18} className="mr-2" />
                Расшифровать анализы
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base md:text-lg h-12 md:h-14 px-6 md:px-8 w-full sm:w-auto"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Как это работает
              </Button>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-6 md:gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-heading font-bold text-primary">2 мин</div>
                <div className="text-xs md:text-sm text-muted-foreground">Скорость</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-heading font-bold text-secondary">100%</div>
                <div className="text-xs md:text-sm text-muted-foreground">Врачи</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-heading font-bold text-accent">24/7</div>
                <div className="text-xs md:text-sm text-muted-foreground">Доступно</div>
              </div>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <Card className="relative border-2 shadow-2xl">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Пример расшифровки</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span className="text-sm font-medium">Общий анализ крови</span>
                  <Badge className="bg-secondary">Готово</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Эритроциты</span>
                    <span className="font-medium">7.2 млн/мкл</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Лейкоциты</span>
                    <span className="font-medium text-accent">12.5 тыс/мкл ⚠️</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Гемоглобин</span>
                    <span className="font-medium">145 г/л</span>
                  </div>
                </div>
                <div className="p-4 bg-secondary/10 border border-secondary/20 rounded-lg">
                  <p className="text-sm font-medium text-secondary mb-2">
                    <Icon name="CheckCircle" size={16} className="inline mr-1" />
                    Рекомендация врача:
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Повышенные лейкоциты указывают на воспалительный процесс. Рекомендуется консультация для...
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;