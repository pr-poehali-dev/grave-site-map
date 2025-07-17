import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Icon from '@/components/ui/icon';

interface Memorial {
  id: number;
  name: string;
  birthDate: string;
  deathDate: string;
  x: number;
  y: number;
  description?: string;
}

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMemorial, setSelectedMemorial] = useState<Memorial | null>(null);

  // Примеры данных о захоронениях
  const memorials: Memorial[] = [
    {
      id: 1,
      name: 'Иванов Петр Сергеевич',
      birthDate: '1945-03-15',
      deathDate: '2020-11-22',
      x: 20,
      y: 30,
      description: 'Любящий отец и дедушка'
    },
    {
      id: 2,
      name: 'Петрова Мария Ивановна',
      birthDate: '1952-07-08',
      deathDate: '2021-05-14',
      x: 60,
      y: 45,
      description: 'Учитель начальных классов'
    },
    {
      id: 3,
      name: 'Сидоров Александр Николаевич',
      birthDate: '1938-12-01',
      deathDate: '2019-08-30',
      x: 40,
      y: 70,
      description: 'Ветеран труда'
    },
    {
      id: 4,
      name: 'Козлова Елена Викторовна',
      birthDate: '1960-04-20',
      deathDate: '2022-01-10',
      x: 80,
      y: 25,
      description: 'Врач-педиатр'
    },
    {
      id: 5,
      name: 'Морозов Владимир Петрович',
      birthDate: '1955-09-12',
      deathDate: '2023-03-05',
      x: 15,
      y: 80,
      description: 'Инженер-строитель'
    }
  ];

  const filteredMemorials = memorials.filter(memorial =>
    memorial.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a2e] via-[#16213e] to-[#1a1a2e] relative overflow-hidden">
      {/* Анимированные звезды */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-200 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Большие звезды */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Заголовок и меню */}
      <header className="relative z-10 p-6 text-center">
        <h1 className="text-4xl font-bold text-white mb-2 font-montserrat">
          Интеллектуальная Карта Кладбища
        </h1>
        <p className="text-slate-300 mb-6">Каждая душа - это звезда в вечности</p>
        
        {/* Выпадающее меню */}
        <div className="flex justify-center mb-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/50">
                <Icon name="Menu" className="mr-2 h-4 w-4" />
                Меню
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-slate-800/90 border-slate-600">
              <DropdownMenuGroup>
                <DropdownMenuItem className="text-white hover:bg-slate-700">
                  <Icon name="Info" className="mr-2 h-4 w-4" />
                  Информация
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-slate-700">
                  <Icon name="Map" className="mr-2 h-4 w-4" />
                  Карта
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-slate-700">
                  <Icon name="Search" className="mr-2 h-4 w-4" />
                  Расширенный поиск
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-slate-700">
                  <Icon name="LogIn" className="mr-2 h-4 w-4" />
                  Вход
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-slate-700">
                  <Icon name="Users" className="mr-2 h-4 w-4" />
                  Информация о родственниках
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-slate-700">
                  <Icon name="Flower" className="mr-2 h-4 w-4" />
                  Ритуальные услуги
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Поисковая строка */}
        <div className="max-w-md mx-auto relative">
          <Input
            type="text"
            placeholder="Поиск по ФИО..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 pl-10"
          />
          <Icon name="Search" className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
        </div>
      </header>

      {/* Интерактивная карта */}
      <div className="relative z-10 flex-1 p-6">
        <div className="relative h-96 bg-slate-900/30 rounded-lg border border-slate-700 overflow-hidden">
          {/* Звезды-души на карте */}
          {filteredMemorials.map((memorial) => (
            <div
              key={memorial.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{
                left: `${memorial.x}%`,
                top: `${memorial.y}%`
              }}
              onClick={() => setSelectedMemorial(memorial)}
            >
              <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-full animate-pulse hover:scale-150 transition-all duration-300 shadow-lg shadow-yellow-400/50">
                <div className="absolute inset-0 bg-yellow-300 rounded-full animate-ping opacity-20"></div>
              </div>
            </div>
          ))}
          
          {/* Фоновая сетка */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>

        {/* Генеалогическое дерево (заглушка) */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Генеалогическое Дерево</h2>
          <div className="bg-slate-800/30 rounded-lg p-8 border border-slate-700">
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center border-2 border-yellow-400/50 mb-2">
                  <Icon name="User" className="h-8 w-8 text-yellow-400" />
                </div>
                <p className="text-sm text-slate-300">Предок</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-0.5 bg-yellow-400/30 mb-2"></div>
                <div className="w-0.5 h-8 bg-yellow-400/30"></div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center border-2 border-yellow-400/50 mb-2">
                  <Icon name="User" className="h-8 w-8 text-yellow-400" />
                </div>
                <p className="text-sm text-slate-300">Потомок</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Карточка выбранного захоронения */}
      {selectedMemorial && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="bg-slate-800/95 border-slate-600 text-white max-w-md w-full">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-yellow-400">{selectedMemorial.name}</CardTitle>
                  <CardDescription className="text-slate-300">
                    {formatDate(selectedMemorial.birthDate)} - {formatDate(selectedMemorial.deathDate)}
                  </CardDescription>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedMemorial(null)}
                  className="text-slate-400 hover:text-white"
                >
                  <Icon name="X" className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm text-slate-300">
                    Прожил {new Date(selectedMemorial.deathDate).getFullYear() - new Date(selectedMemorial.birthDate).getFullYear()} лет
                  </span>
                </div>
                {selectedMemorial.description && (
                  <div className="flex items-start space-x-2">
                    <Icon name="Heart" className="h-4 w-4 text-yellow-400 mt-0.5" />
                    <p className="text-sm text-slate-300">{selectedMemorial.description}</p>
                  </div>
                )}
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm text-slate-300">
                    Участок: {selectedMemorial.x.toFixed(0)}-{selectedMemorial.y.toFixed(0)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Список результатов поиска */}
      {searchTerm && (
        <div className="fixed bottom-4 right-4 w-80 max-h-96 overflow-y-auto bg-slate-800/95 rounded-lg border border-slate-600 p-4 z-40">
          <h3 className="text-white font-semibold mb-3">Результаты поиска:</h3>
          <div className="space-y-2">
            {filteredMemorials.map((memorial) => (
              <div
                key={memorial.id}
                className="p-3 bg-slate-700/50 rounded cursor-pointer hover:bg-slate-700 transition-colors"
                onClick={() => setSelectedMemorial(memorial)}
              >
                <p className="text-yellow-400 font-medium">{memorial.name}</p>
                <p className="text-sm text-slate-300">
                  {formatDate(memorial.birthDate)} - {formatDate(memorial.deathDate)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;