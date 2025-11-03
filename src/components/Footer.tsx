import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-muted/50 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="https://cdn.poehali.dev/files/b4ffaf12-e7b9-4fac-80c5-30b3b2f8f99e.jpg" alt="Смарт Лаб" className="h-6 w-auto" />
              <span className="text-lg md:text-xl font-heading font-bold">
                Смарт <span className="text-primary">Лаб</span>
              </span>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">
              Профессиональная расшифровка анализов животных
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3 md:mb-4 text-sm md:text-base">Сервис</h4>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li><a href="#benefits" className="hover:text-primary transition-colors">Преимущества</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">Как работает</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3 md:mb-4 text-sm md:text-base">Информация</h4>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3 md:mb-4 text-sm md:text-base">Контакты</h4>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
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
        <div className="border-t border-border pt-6 md:pt-8 text-center text-xs md:text-sm text-muted-foreground">
          <p>© 2024 Смарт <span className="text-primary">Лаб</span>. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;