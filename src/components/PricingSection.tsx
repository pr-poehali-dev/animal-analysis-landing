import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface PricingSectionProps {
  activePlan: number | null;
  setActivePlan: (plan: number | null) => void;
  onBotClick: () => void;
}

const PricingSection = ({ activePlan, setActivePlan, onBotClick }: PricingSectionProps) => {
  const plans = [
    {
      id: 0,
      name: "Разовая",
      price: "199",
      description: "Попробуйте сервис",
      features: [
        "1 расшифровка анализов",
        "Подробный отчет",
        "Рекомендации врачей",
        "Техподдержка в боте"
      ],
      popular: false
    },
    {
      id: 1,
      name: "Базовый",
      price: "249",
      description: "Оптимально для контроля",
      features: [
        "3 расшифровки анализов",
        "Подробный отчет",
        "Рекомендации врачей",
        "Приоритетная поддержка",
        "Экономия 150₽"
      ],
      popular: true
    },
    {
      id: 2,
      name: "Безлимит",
      price: "399",
      description: "Для постоянного мониторинга",
      features: [
        "Безлимит на месяц",
        "Все виды анализов",
        "История расшифровок",
        "VIP-поддержка 24/7",
        "Экспертные консультации"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Выберите тариф</h2>
          <p className="text-xl text-muted-foreground">Прозрачные цены без скрытых платежей</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fade-in border-2 ${
                plan.popular ? 'border-primary shadow-xl scale-105' : ''
              } ${activePlan === plan.id ? 'ring-4 ring-primary/50' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setActivePlan(plan.id)}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground text-sm px-4 py-1 shadow-lg">
                    Популярный
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="font-heading text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-heading font-bold text-foreground">{plan.price}</span>
                  <span className="text-xl text-muted-foreground ml-2">₽</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Icon name="Check" className="text-secondary flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={onBotClick}
                  className="w-full h-12"
                  variant={plan.popular ? "default" : "outline"}
                >
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
