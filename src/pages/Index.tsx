import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

interface FamilyMember {
  id: number;
  name: string;
  relation: string;
  birthDate?: string;
  deathDate?: string;
  isAlive?: boolean;
}

interface Memorial {
  id: number;
  name: string;
  birthDate: string;
  deathDate: string;
  x: number;
  y: number;
  description?: string;
  photo?: string;
  biography?: string;
  profession?: string;
  graveLocation?: string;
  familyTree?: FamilyMember[];
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
      description: 'Любящий отец и дедушка',
      photo: '/img/8ec7b3de-23df-4af4-a5aa-32493e15b980.jpg',
      profession: 'Слесарь на заводе',
      graveLocation: 'Участок 3, ряд 12, место 5',
      biography: 'Петр Сергеевич родился в деревне под Москвой. С юности работал на заводе, прошел путь от ученика до мастера. Участвовал в строительстве крупных промышленных объектов. Воспитал троих детей, имел 5 внуков. Любил рыбалку и столярное дело.',
      familyTree: [
        { id: 1, name: 'Иванов Сергей Петрович', relation: 'Сын', birthDate: '1970-05-12', isAlive: true },
        { id: 2, name: 'Иванова Анна Петровна', relation: 'Дочь', birthDate: '1972-08-20', isAlive: true },
        { id: 3, name: 'Иванов Михаил Петрович', relation: 'Сын', birthDate: '1975-11-03', isAlive: true }
      ]
    },
    {
      id: 2,
      name: 'Петрова Мария Ивановна',
      birthDate: '1952-07-08',
      deathDate: '2021-05-14',
      x: 60,
      y: 45,
      description: 'Учитель начальных классов',
      photo: '/img/d77e910e-c7df-48c7-9b4f-67496ed876d0.jpg',
      profession: 'Учитель начальных классов',
      graveLocation: 'Участок 7, ряд 8, место 12',
      biography: 'Мария Ивановна посвятила свою жизнь образованию детей. За 40 лет работы в школе она обучила более 800 учеников. Была награждена званием "Отличник народного просвещения". Любила читать, выращивать цветы, и всегда находила время для каждого ученика.',
      familyTree: [
        { id: 4, name: 'Петров Иван Васильевич', relation: 'Муж', birthDate: '1950-03-22', deathDate: '2018-12-10' },
        { id: 5, name: 'Петрова Елена Ивановна', relation: 'Дочь', birthDate: '1978-09-15', isAlive: true }
      ]
    },
    {
      id: 3,
      name: 'Сидоров Александр Николаевич',
      birthDate: '1938-12-01',
      deathDate: '2019-08-30',
      x: 40,
      y: 70,
      description: 'Ветеран труда',
      photo: '/img/95d03ba7-0f2e-4298-90f2-90489c6684b9.jpg',
      profession: 'Инженер-механик',
      graveLocation: 'Участок 5, ряд 15, место 8',
      biography: 'Александр Николаевич - участник Великой Отечественной войны, ветеран труда. После войны работал инженером-механиком на крупном предприятии. Участвовал в разработке новых технологий. Награжден множеством медалей за трудовые заслуги.',
      familyTree: [
        { id: 6, name: 'Сидорова Валентина Петровна', relation: 'Жена', birthDate: '1940-06-18', deathDate: '2020-03-25' },
        { id: 7, name: 'Сидоров Николай Александрович', relation: 'Сын', birthDate: '1965-04-10', isAlive: true }
      ]
    },
    {
      id: 4,
      name: 'Козлова Елена Викторовна',
      birthDate: '1960-04-20',
      deathDate: '2022-01-10',
      x: 80,
      y: 25,
      description: 'Врач-педиатр',
      photo: '/img/d77e910e-c7df-48c7-9b4f-67496ed876d0.jpg',
      profession: 'Врач-педиатр',
      graveLocation: 'Участок 2, ряд 6, место 14',
      biography: 'Елена Викторовна - врач-педиатр высшей категории. 30 лет работала в детской поликлинике, спасла тысячи детских жизней. Была очень любима пациентами и коллегами. Получила звание "Заслуженный врач".',
      familyTree: [
        { id: 8, name: 'Козлов Виктор Петрович', relation: 'Муж', birthDate: '1958-11-12', isAlive: true },
        { id: 9, name: 'Козлова Анастасия Викторовна', relation: 'Дочь', birthDate: '1985-07-03', isAlive: true }
      ]
    },
    {
      id: 5,
      name: 'Морозов Владимир Петрович',
      birthDate: '1955-09-12',
      deathDate: '2023-03-05',
      x: 15,
      y: 80,
      description: 'Инженер-строитель',
      photo: '/img/8ec7b3de-23df-4af4-a5aa-32493e15b980.jpg',
      profession: 'Инженер-строитель',
      graveLocation: 'Участок 1, ряд 20, место 3',
      biography: 'Владимир Петрович - инженер-строитель, участвовал в строительстве многих значимых объектов города. Руководил крупными стройками, был известен своей принципиальностью и профессионализмом. Воспитал двух сыновей.',
      familyTree: [
        { id: 10, name: 'Морозова Людмила Ивановна', relation: 'Жена', birthDate: '1957-02-28', isAlive: true },
        { id: 11, name: 'Морозов Андрей Владимирович', relation: 'Сын', birthDate: '1980-12-15', isAlive: true },
        { id: 12, name: 'Морозов Дмитрий Владимирович', relation: 'Сын', birthDate: '1983-05-22', isAlive: true }
      ]
    }
  ];

  const filteredMemorials = memorials.filter(memorial =>
    memorial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    memorial.profession?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    memorial.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU');
  };

  const FamilyTreeComponent = ({ familyTree }: { familyTree: FamilyMember[] }) => {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-yellow-400 mb-4">Генеалогическое дерево</h3>
        <div className="grid gap-3">
          {familyTree.map((member) => (
            <div key={member.id} className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg">
              <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center border border-yellow-400/50">
                <Icon name="User" className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">{member.name}</p>
                <p className="text-sm text-slate-400">{member.relation}</p>
                {member.birthDate && (
                  <p className="text-xs text-slate-500">
                    {formatDate(member.birthDate)} 
                    {member.deathDate && ` - ${formatDate(member.deathDate)}`}
                    {member.isAlive && ' - живой'}
                  </p>
                )}
              </div>
              <div className="flex items-center">
                {member.isAlive ? (
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                ) : (
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
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
            placeholder="Поиск по ФИО, профессии..."
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
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{
                left: `${memorial.x}%`,
                top: `${memorial.y}%`
              }}
              onClick={() => setSelectedMemorial(memorial)}
            >
              <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-full animate-pulse hover:scale-150 transition-all duration-300 shadow-lg shadow-yellow-400/50">
                <div className="absolute inset-0 bg-yellow-300 rounded-full animate-ping opacity-20"></div>
              </div>
              {/* Всплывающая подсказка */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-800/90 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {memorial.name}
              </div>
            </div>
          ))}
          
          {/* Фоновая сетка */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>
      </div>

      {/* Расширенная карточка выбранного захоронения */}
      {selectedMemorial && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="bg-slate-800/95 border-slate-600 text-white max-w-2xl w-full max-h-[90vh] overflow-hidden">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-4">
                  {selectedMemorial.photo && (
                    <img 
                      src={selectedMemorial.photo} 
                      alt={selectedMemorial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400/50"
                    />
                  )}
                  <div>
                    <CardTitle className="text-yellow-400 text-xl">{selectedMemorial.name}</CardTitle>
                    <CardDescription className="text-slate-300">
                      {formatDate(selectedMemorial.birthDate)} - {formatDate(selectedMemorial.deathDate)}
                    </CardDescription>
                    {selectedMemorial.profession && (
                      <p className="text-sm text-slate-400 mt-1">{selectedMemorial.profession}</p>
                    )}
                  </div>
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
              <Tabs defaultValue="info" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-slate-700/50">
                  <TabsTrigger value="info" className="text-white">Информация</TabsTrigger>
                  <TabsTrigger value="biography" className="text-white">Биография</TabsTrigger>
                  <TabsTrigger value="family" className="text-white">Семья</TabsTrigger>
                </TabsList>
                
                <TabsContent value="info" className="space-y-4 mt-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Calendar" className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm text-slate-300">
                      Прожил {new Date(selectedMemorial.deathDate).getFullYear() - new Date(selectedMemorial.birthDate).getFullYear()} лет
                    </span>
                  </div>
                  {selectedMemorial.graveLocation && (
                    <div className="flex items-center space-x-2">
                      <Icon name="MapPin" className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm text-slate-300">{selectedMemorial.graveLocation}</span>
                    </div>
                  )}
                  {selectedMemorial.description && (
                    <div className="flex items-start space-x-2">
                      <Icon name="Heart" className="h-4 w-4 text-yellow-400 mt-0.5" />
                      <p className="text-sm text-slate-300">{selectedMemorial.description}</p>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="biography" className="mt-4">
                  <ScrollArea className="h-48">
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <Icon name="BookOpen" className="h-4 w-4 text-yellow-400 mt-0.5" />
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {selectedMemorial.biography || 'Информация о биографии отсутствует.'}
                        </p>
                      </div>
                    </div>
                  </ScrollArea>
                </TabsContent>
                
                <TabsContent value="family" className="mt-4">
                  <ScrollArea className="h-48">
                    {selectedMemorial.familyTree && selectedMemorial.familyTree.length > 0 ? (
                      <FamilyTreeComponent familyTree={selectedMemorial.familyTree} />
                    ) : (
                      <p className="text-slate-400 text-center py-8">Информация о родственниках отсутствует</p>
                    )}
                  </ScrollArea>
                </TabsContent>
              </Tabs>
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
                <div className="flex items-center space-x-3">
                  {memorial.photo && (
                    <img 
                      src={memorial.photo} 
                      alt={memorial.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <p className="text-yellow-400 font-medium">{memorial.name}</p>
                    <p className="text-xs text-slate-400">{memorial.profession}</p>
                    <p className="text-xs text-slate-300">
                      {formatDate(memorial.birthDate)} - {formatDate(memorial.deathDate)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;