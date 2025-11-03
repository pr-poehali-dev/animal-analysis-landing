import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Анна Петрова",
      pet: "Кот Марсик, 5 лет",
      text: "Невероятно удобно! Получила расшифровку анализов за пару минут прямо из дома. Врачи дали четкие рекомендации, что делать дальше.",
      rating: 5
    },
    {
      name: "Михаил Соколов",
      pet: "Собака Рекс, 3 года",
      text: "Очень переживал за своего пса, анализы были странные. СмартЛаб расшифровал всё понятным языком и успокоил — оказалось, ничего критичного.",
      rating: 5
    },
    {
      name: "Елена Волкова",
      pet: "Кошка Мурка, 8 лет",
      text: "Безлимитный тариф — находка для хронических болезней. Постоянно контролирую состояние кошки, экономлю время и деньги на визитах.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Отзывы владельцев</h2>
          <p className="text-xl text-muted-foreground">Нам доверяют тысячи хозяев питомцев</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-fade-in border-2" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="flex items-center gap-1 mb-3">
                  {Array(review.rating).fill(0).map((_, i) => (
                    <Icon key={i} name="Star" className="text-accent fill-accent" size={18} />
                  ))}
                </div>
                <CardTitle className="font-heading text-lg">{review.name}</CardTitle>
                <CardDescription>{review.pet}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">"{review.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
