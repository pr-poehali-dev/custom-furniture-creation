import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Features = () => {
  return (
    <>
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
    </>
  );
};

export default Features;