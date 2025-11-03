import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface HowItWorksSectionProps {
  onBotClick: () => void;
}

const HowItWorksSection = ({ onBotClick }: HowItWorksSectionProps) => {
  const steps = [
    {
      step: 1,
      title: "Отправьте фото анализов",
      description: "Сфотографируйте результаты анализов и отправьте в наш Telegram-бот. Поддерживаем все форматы.",
      icon: "Camera"
    },
    {
      step: 2,
      title: "Получите расшифровку",
      description: "Через 2 минуты вы получите подробную расшифровку с объяснением каждого параметра и его значения.",
      icon: "FileSearch"
    },
    {
      step: 3,
      title: "Следуйте рекомендациям",
      description: "Узнайте, насколько критична ситуация, какие действия предпринять и когда обратиться к врачу.",
      icon: "CheckCircle2"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Как это работает</h2>
          <p className="text-xl text-muted-foreground">Три простых шага до результата</p>
        </div>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 items-start animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-heading font-bold shadow-lg">
                {step.step}
              </div>
              <Card className="flex-1 border-2">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon name={step.icon as any} className="text-primary" size={24} />
                    <CardTitle className="font-heading text-2xl">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button onClick={onBotClick} size="lg" className="text-lg h-14 px-8 shadow-lg">
            <Icon name="ArrowRight" size={20} className="mr-2" />
            Попробовать сейчас
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
