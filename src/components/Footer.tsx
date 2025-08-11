import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="border-t bg-background/95 backdrop-blur">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icon name="Home" className="h-6 w-6" />
              <span className="font-display text-xl font-semibold">Stone Tree</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Элитные кухни на заказ. Премиум качество, индивидуальный дизайн.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Дизайн-проект</li>
              <li>Изготовление</li>
              <li>Монтаж</li>
              <li>Сервис</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Каталог</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Современные кухни</li>
              <li>Классические кухни</li>
              <li>Кухни-островки</li>
              <li>Угловые кухни</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>+7 (495) 123-45-67</li>
              <li>info@grenam.ru</li>
              <li>Москва, ул. Дизайнерская, 15</li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 ГРЕНАМ. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;