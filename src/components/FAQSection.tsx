import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Насколько точны ваши расшифровки?",
      answer: "Все расшифровки проверены командой практикующих ветеринарных врачей. Основатель сервиса — врач с многолетним опытом. Мы используем проверенные медицинские базы данных и постоянно обновляем знания."
    },
    {
      question: "Может ли бот заменить визит к врачу?",
      answer: "Нет, Смарт Лаб не заменяет очный прием у ветеринара. Мы помогаем понять результаты анализов и определить, насколько срочно нужна консультация специалиста. При критических показателях мы рекомендуем немедленно обратиться к врачу."
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
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 md:mb-4">Частые вопросы</h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground">Всё, что вы хотели знать о Смарт <span className="text-primary">Лаб</span></p>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4 md:px-6 bg-card">
              <AccordionTrigger className="text-left font-heading font-semibold text-base md:text-lg hover:text-primary py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;