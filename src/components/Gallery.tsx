import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Gallery = () => {
  return (
    <>
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
    </>
  );
};

export default Gallery;