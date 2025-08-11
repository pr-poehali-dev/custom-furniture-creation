import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Stone Tree
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
  );
};

export default About;