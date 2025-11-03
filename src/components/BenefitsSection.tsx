import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "Zap",
      title: "Быстро и просто",
      description: "Загрузите фото анализов в бот и получите расшифровку за 2 минуты. Без очередей и ожидания.",
      color: "primary"
    },
    {
      icon: "Users",
      title: "Команда врачей",
      description: "Все рекомендации проверены группой ветеринарных врачей. Основатель — практикующий специалист.",
      color: "secondary"
    },
    {
      icon: "ClipboardList",
      title: "Пошаговый план",
      description: "Получите четкие инструкции: что делать, насколько критично, какие диагнозы вероятны.",
      color: "accent"
    },
    {
      icon: "FileText",
      title: "Разбор каждого параметра",
      description: "Подробное объяснение каждого показателя с нормами и отклонениями для вашего питомца.",
      color: "primary"
    },
    {
      icon: "ShieldCheck",
      title: "Надежность",
      description: "Методика протестирована на тысячах анализов. Постоянные обновления базы знаний.",
      color: "secondary"
    },
    {
      icon: "HeartPulse",
      title: "Забота о здоровье",
      description: "Помогаем владельцам понять состояние питомца и принять правильное решение.",
      color: "accent"
    }
  ];

  return (
    <section id="benefits" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Почему СмартЛаб?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы объединили опыт ветеринарных врачей и современные технологии
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className={`w-14 h-14 rounded-xl bg-${benefit.color}/10 flex items-center justify-center mb-4`}>
                  <Icon name={benefit.icon as any} className={`text-${benefit.color}`} size={28} />
                </div>
                <CardTitle className="font-heading text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
