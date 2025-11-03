import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
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
  );
};

export default Footer;
