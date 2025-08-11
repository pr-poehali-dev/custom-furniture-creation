import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    time: '',
    roomType: '',
    budget: '',
    comment: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь будет отправка данных
  };
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Home" className="h-6 w-6" />
            <span className="font-display text-xl font-semibold">StoneTree</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-sm font-medium hover:text-accent transition-colors">Главная</a>
            <a href="#catalog" className="text-sm font-medium hover:text-accent transition-colors">Каталог</a>
            <a href="#services" className="text-sm font-medium hover:text-accent transition-colors">Услуги</a>
            <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">О компании</a>
            <a href="#contacts" className="text-sm font-medium hover:text-accent transition-colors">Контакты</a>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>
                Консультация
                <Icon name="ChevronDown" className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <a href="tel:+79280730331" className="flex items-center">
                  <Icon name="Phone" className="mr-3 h-4 w-4 text-blue-600" />
                  <div className="flex flex-col">
                    <span className="font-medium">Позвонить</span>
                    <span className="text-xs text-muted-foreground">+7 (928) 073-03-31</span>
                  </div>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://wa.me/79280730331" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <div className="mr-3 h-4 w-4 rounded bg-green-500 flex items-center justify-center text-white text-xs font-bold">W</div>
                  <div className="flex flex-col">
                    <span className="font-medium">WhatsApp</span>
                    <span className="text-xs text-muted-foreground">Написать сообщение</span>
                  </div>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://t.me/+79280730331" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <div className="mr-3 h-4 w-4 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">T</div>
                  <div className="flex flex-col">
                    <span className="font-medium">Telegram</span>
                    <span className="text-xs text-muted-foreground">Написать в мессенджер</span>
                  </div>
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/50 to-accent/5" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">Премиум качество</Badge>
                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Элитные кухни
                  <span className="text-accent"> на заказ</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Создаем кухонные гарнитуры премиум-класса с индивидуальным дизайном. 
                  Роскошные материалы, безупречное качество, эксклюзивное исполнение.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Icon name="Palette" className="mr-2 h-5 w-5" />
                  3D Конфигуратор
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="lg">
                      <Icon name="Calendar" className="mr-2 h-5 w-5" />
                      Вызвать замерщика
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="font-display text-2xl">Заявка на выезд замерщика</DialogTitle>
                      <DialogDescription>
                        Заполните форму, и наш специалист свяжется с вами для согласования времени визита
                      </DialogDescription>
                    </DialogHeader>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Имя *</Label>
                          <Input
                            id="name"
                            placeholder="Ваше имя"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Телефон *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+7 (999) 123-45-67"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="address">Адрес объекта *</Label>
                        <Input
                          id="address"
                          placeholder="Москва, ул. Примерная, д. 123, кв. 45"
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Предпочтительное время</Label>
                          <Select onValueChange={(value) => handleInputChange('time', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите время" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="morning">Утром (9:00-12:00)</SelectItem>
                              <SelectItem value="afternoon">Днем (12:00-15:00)</SelectItem>
                              <SelectItem value="evening">Вечером (15:00-18:00)</SelectItem>
                              <SelectItem value="weekend">Выходные</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Тип помещения</Label>
                          <Select onValueChange={(value) => handleInputChange('roomType', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите тип" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="kitchen">Кухня</SelectItem>
                              <SelectItem value="studio">Кухня-студия</SelectItem>
                              <SelectItem value="pantry">Кладовая</SelectItem>
                              <SelectItem value="office">Офисная кухня</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Планируемый бюджет</Label>
                        <Select onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите диапазон" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="300-500">300 000 - 500 000 ₽</SelectItem>
                            <SelectItem value="500-800">500 000 - 800 000 ₽</SelectItem>
                            <SelectItem value="800-1200">800 000 - 1 200 000 ₽</SelectItem>
                            <SelectItem value="1200+">От 1 200 000 ₽</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="comment">Комментарий</Label>
                        <Textarea
                          id="comment"
                          placeholder="Расскажите о ваших пожеланиях, особенностях помещения и т.д."
                          value={formData.comment}
                          onChange={(e) => handleInputChange('comment', e.target.value)}
                          rows={3}
                        />
                      </div>
                      
                      <Separator />
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2 flex items-center">
                          <Icon name="CheckCircle" className="mr-2 h-5 w-5 text-accent" />
                          Что входит в услугу замера:
                        </h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Выезд специалиста в удобное для вас время</li>
                          <li>• Точные замеры помещения</li>
                          <li>• Консультация по планировке и материалам</li>
                          <li>• Предварительный расчет стоимости</li>
                          <li>• Создание эскиза (при заключении договора)</li>
                        </ul>
                      </div>
                      
                      <div className="flex gap-3 pt-4">
                        <Button type="submit" className="flex-1 bg-accent hover:bg-accent/90">
                          <Icon name="Send" className="mr-2 h-4 w-4" />
                          Отправить заявку
                        </Button>
                        <Button type="button" variant="outline" className="px-8">
                          <Icon name="Phone" className="mr-2 h-4 w-4" />
                          Позвонить
                        </Button>
                      </div>
                      
                      <p className="text-xs text-muted-foreground text-center">
                        Нажимая "Отправить заявку", вы соглашаетесь с обработкой персональных данных
                      </p>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-accent">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-accent">500+</div>
                  <div className="text-sm text-muted-foreground">проектов</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-accent">100%</div>
                  <div className="text-sm text-muted-foreground">гарантия</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/5 rounded-2xl blur-2xl" />
              <img 
                src="/img/1be33108-e585-47d0-8ef5-5686def553f5.jpg" 
                alt="Элитная кухня"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы создаем не просто мебель — мы воплощаем мечты о совершенной кухне
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "Crown", title: "Премиум материалы", desc: "Только лучшие породы дерева и фурнитура европейского качества" },
              { icon: "Palette", title: "Индивидуальный дизайн", desc: "Каждая кухня создается по уникальному проекту под ваши потребности" },
              { icon: "Shield", title: "Пожизненная гарантия", desc: "Полная ответственность за качество на все время эксплуатации" },
              { icon: "Truck", title: "Доставка и монтаж", desc: "Бережная доставка и профессиональная установка в любой точке города" },
              { icon: "Clock", title: "Точные сроки", desc: "Изготовление от 2 недель с соблюдением всех договорных обязательств" },
              { icon: "Headphones", title: "Поддержка 24/7", desc: "Круглосуточная техническая поддержка и сервисное обслуживание" }
            ].map((feature, i) => (
              <Card key={i} className="group hover:shadow-lg transition-all duration-300 animate-fade-in border-0 bg-background/80 backdrop-blur">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon name={feature.icon} className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="font-display">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Configurator */}
      <section id="catalog" className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              3D Конфигуратор кухонь
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Спроектируйте кухню своей мечты в интерактивном 3D режиме
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Tabs defaultValue="style" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="style">Стиль</TabsTrigger>
                  <TabsTrigger value="materials">Материалы</TabsTrigger>
                  <TabsTrigger value="layout">Планировка</TabsTrigger>
                </TabsList>
                <TabsContent value="style" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {["Современный", "Классический", "Минимализм", "Лофт"].map((style) => (
                      <Button key={style} variant="outline" className="justify-start">
                        {style}
                      </Button>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="materials" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {["Массив дуба", "МДФ эмаль", "Шпон ореха", "Пластик"].map((material) => (
                      <Button key={material} variant="outline" className="justify-start">
                        {material}
                      </Button>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="layout" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {["Прямая", "Угловая", "П-образная", "Островная"].map((layout) => (
                      <Button key={layout} variant="outline" className="justify-start">
                        {layout}
                      </Button>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
              <Button size="lg" className="w-full bg-accent hover:bg-accent/90">
                <Icon name="Play" className="mr-2 h-5 w-5" />
                Запустить 3D конфигуратор
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-muted to-accent/5 rounded-2xl flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                <div className="text-center space-y-4">
                  <Icon name="Box" className="h-16 w-16 mx-auto text-accent" />
                  <h3 className="font-display text-xl font-semibold">3D Превью</h3>
                  <p className="text-muted-foreground">Здесь будет отображаться ваша кухня в 3D</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Наши работы
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Галерея реализованных проектов элитных кухонь
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({length: 6}).map((_, i) => (
              <Card key={i} className="group overflow-hidden border-0 bg-background/80 backdrop-blur hover:shadow-xl transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={i % 2 === 0 ? "/img/1be33108-e585-47d0-8ef5-5686def553f5.jpg" : "/img/aa66e8c5-a6d2-4c92-9ec4-4fd8bd767698.jpg"}
                    alt={`Кухня ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-display">Проект {i + 1}</CardTitle>
                  <CardDescription>
                    {["Современная кухня в стиле минимализм", "Классическая кухня с островом", "Лофт кухня с барной стойкой"][i % 3]}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">от 450 000 ₽</Badge>
                    <Button variant="ghost" size="sm">
                      <Icon name="ArrowRight" className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Наши услуги
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Полный цикл создания кухни от дизайна до установки
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                { icon: "PenTool", title: "Дизайн-проект", desc: "Создание индивидуального дизайн-проекта с 3D визуализацией", price: "от 15 000 ₽" },
                { icon: "Hammer", title: "Изготовление", desc: "Производство мебели на собственном производстве", price: "от 350 000 ₽" },
                { icon: "Truck", title: "Доставка и монтаж", desc: "Бережная доставка и профессиональная установка", price: "от 25 000 ₽" },
                { icon: "Settings", title: "Сервисное обслуживание", desc: "Регулировка, ремонт, замена комплектующих", price: "от 3 000 ₽" }
              ].map((service, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-lg bg-background/80 backdrop-blur border hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={service.icon} className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-2">{service.desc}</p>
                    <div className="font-semibold text-accent">{service.price}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <img 
                src="/img/aa66e8c5-a6d2-4c92-9ec4-4fd8bd767698.jpg" 
                alt="Услуги"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                О компании ГРЕНАМ
              </h2>
              <p className="text-lg text-muted-foreground">
                Более 15 лет мы создаем кухни премиум-класса, сочетая традиционные 
                мастерские техники с современными технологиями производства.
              </p>
              <p className="text-muted-foreground">
                Наша команда — это опытные дизайнеры, мастера-краснодеревщики и 
                технологи, которые воплощают в жизнь самые смелые идеи наших клиентов. 
                Каждая кухня — это произведение искусства, созданное с любовью к деталям.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <div className="font-display text-3xl font-bold text-accent mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">лет на рынке элитной мебели</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-accent mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">довольных клиентов</div>
                </div>
              </div>
              <Button className="bg-accent hover:bg-accent/90">
                <Icon name="Users" className="mr-2 h-5 w-5" />
                Познакомиться с командой
              </Button>
            </div>
            
            <div className="space-y-6">
              {[
                { title: "Собственное производство", desc: "Полный контроль качества на всех этапах" },
                { title: "Европейская фурнитура", desc: "Blum, Hafele, Grass — только лучшие бренды" },
                { title: "Эксклюзивные материалы", desc: "Редкие породы дерева и премиум покрытия" },
                { title: "Индивидуальный подход", desc: "Каждый проект уникален и неповторим" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-lg bg-background/80 backdrop-blur">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Контакты
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами для консультации и создания кухни мечты
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 bg-background/80 backdrop-blur">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto">
                  <Icon name="Phone" className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold">Телефон</h3>
                <p className="text-muted-foreground">+7 (928) 073-03-31</p>
                <p className="text-muted-foreground">+7 (495) 765-43-21</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-0 bg-background/80 backdrop-blur">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto">
                  <Icon name="Mail" className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold">Email</h3>
                <p className="text-muted-foreground">info@grenam.ru</p>
                <p className="text-muted-foreground">sales@grenam.ru</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-0 bg-background/80 backdrop-blur">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto">
                  <Icon name="MapPin" className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold">Адрес</h3>
                <p className="text-muted-foreground">Москва, ул. Дизайнерская, 15</p>
                <p className="text-muted-foreground">ТЦ "Элитная мебель"</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              <Icon name="Calendar" className="mr-2 h-5 w-5" />
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background/95 backdrop-blur">
        <div className="container py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="Home" className="h-6 w-6" />
                <span className="font-display text-xl font-semibold">ГРЕНАМ</span>
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
    </div>
  );
};

export default Index;