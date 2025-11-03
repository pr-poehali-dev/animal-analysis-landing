import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activePlan, setActivePlan] = useState<number | null>(1);

  const openTelegramBot = () => {
    window.open("https://t.me/your_bot_username", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
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
          <Button onClick={openTelegramBot} size="sm" className="hidden md:flex">
            Перейти в бот
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                <Icon name="Stethoscope" size={16} className="mr-1" />
                Доверяют тысячи владельцев
              </Badge>
              <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight text-foreground">
                Расшифровка анализов вашего питомца за 2 минуты
              </h1>
              <p className="text-xl text-muted-foreground">
                Точная интерпретация результатов от команды ветеринарных врачей. Узнайте, что делать дальше и насколько это критично.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={openTelegramBot} 
                  size="lg" 
                  className="text-lg h-14 px-8 animate-pulse-slow shadow-lg hover:shadow-xl transition-all"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Расшифровать анализы
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg h-14 px-8"
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Как это работает
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-heading font-bold text-primary">2 мин</div>
                  <div className="text-sm text-muted-foreground">Скорость</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-secondary">100%</div>
                  <div className="text-sm text-muted-foreground">Врачи</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-accent">24/7</div>
                  <div className="text-sm text-muted-foreground">Доступно</div>
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

      <section id="benefits" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Почему СмартЛаб?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы объединили опыт ветеринарных врачей и современные технологии
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((benefit, index) => (
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

      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Как это работает</h2>
            <p className="text-xl text-muted-foreground">Три простых шага до результата</p>
          </div>
          <div className="space-y-8">
            {[
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
            ].map((step, index) => (
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
            <Button onClick={openTelegramBot} size="lg" className="text-lg h-14 px-8 shadow-lg">
              <Icon name="ArrowRight" size={20} className="mr-2" />
              Попробовать сейчас
            </Button>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Выберите тариф</h2>
            <p className="text-xl text-muted-foreground">Прозрачные цены без скрытых платежей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((plan, index) => (
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
                    onClick={openTelegramBot}
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

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Отзывы владельцев</h2>
            <p className="text-xl text-muted-foreground">Нам доверяют тысячи хозяев питомцев</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((review, index) => (
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

      <section id="faq" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Частые вопросы</h2>
            <p className="text-xl text-muted-foreground">Всё, что вы хотели знать о СмартЛаб</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Насколько точны ваши расшифровки?",
                answer: "Все расшифровки проверены командой практикующих ветеринарных врачей. Основатель сервиса — врач с многолетним опытом. Мы используем проверенные медицинские базы данных и постоянно обновляем знания."
              },
              {
                question: "Может ли бот заменить визит к врачу?",
                answer: "Нет, СмартЛаб не заменяет очный прием у ветеринара. Мы помогаем понять результаты анализов и определить, насколько срочно нужна консультация специалиста. При критических показателях мы рекомендуем немедленно обратиться к врачу."
              },
              {
                question: "Какие виды анализов вы расшифровываете?",
                answer: "Мы работаем с общими анализами крови и мочи, биохимией крови, гормональными панелями и другими распространенными типами исследований для собак и кошек."
              },
              {
                question: "Как быстро придет расшифровка?",
                answer: "В среднем расшифровка готова через 2 минуты после отправки фото анализов. В редких случаях, если анализ сложный, это может занять до 5 минут."
              },
              {
                question: "Безопасны ли мои данные?",
                answer: "Мы серьезно относимся к конфиденциальности. Все данные шифруются и хранятся в защищенных системах. Мы не передаем информацию третьим лицам и соблюдаем политику конфиденциальности."
              },
              {
                question: "Что делать, если я не понял расшифровку?",
                answer: "В боте есть техподдержка, где вы можете задать любые вопросы по расшифровке. Для тарифа 'Безлимит' доступны экспертные консультации с врачами в режиме 24/7."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left font-heading font-semibold text-lg hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Об основателе</h2>
          <Card className="border-2 shadow-xl">
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-5xl font-heading font-bold text-white shadow-lg">
                  ДМ
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-2xl font-heading font-bold mb-2">Мещеряков Дмитрий Георгиевич</h3>
                  <p className="text-lg text-primary font-semibold mb-4">Ветеринарный врач, основатель СмартЛаб</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Практикующий ветеринарный специалист с 10+ летним опытом работы. Создал СмартЛаб, чтобы сделать расшифровку анализов доступной каждому владельцу питомца. Верю, что понимание здоровья своего животного — ключ к его долгой и счастливой жизни.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Узнайте о здоровье питомца прямо сейчас
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Быстро, надежно, профессионально
          </p>
          <Button 
            onClick={openTelegramBot}
            size="lg" 
            variant="secondary"
            className="text-lg h-14 px-8 shadow-2xl hover:shadow-xl transition-all animate-pulse-slow"
          >
            <Icon name="Send" size={20} className="mr-2" />
            Начать в Telegram
          </Button>
        </div>
      </section>

      <footer className="py-12 px-4 bg-muted/50 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Activity" className="text-primary" size={28} />
                <span className="text-xl font-heading font-bold">СмартЛаб</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональная расшифровка анализов животных
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Сервис</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#benefits" className="hover:text-primary transition-colors">Преимущества</a></li>
                <li><a href="#how-it-works" className="hover:text-primary transition-colors">Как работает</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Send" size={16} />
                  <span>Telegram-бот</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>support@smartlab.ru</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 СмартЛаб. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
