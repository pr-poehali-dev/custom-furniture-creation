import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Hero = () => {
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
  };

  return (
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
  );
};

export default Hero;