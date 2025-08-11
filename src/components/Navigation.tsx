import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  return (
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
  );
};

export default Navigation;