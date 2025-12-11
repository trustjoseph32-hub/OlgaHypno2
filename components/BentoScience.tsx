import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Fingerprint, ScanFace, Waves, Lock } from 'lucide-react';

const data = [
  { name: 'Start', cortisol: 22 },
  { name: 'Week 2', cortisol: 18 },
  { name: 'Week 4', cortisol: 12 },
  { name: 'Week 6', cortisol: 8 },
  { name: 'Week 8', cortisol: 6 }, // Optimal
];

const BentoScience: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-luxury-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="font-sans text-muted-gold uppercase tracking-widest text-xs">Доказательная база</span>
          <h2 className="font-serif text-4xl md:text-6xl text-platinum mt-4">
            Это не магия. <br/><span className="italic text-white/50">Это нейрофизиология.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-auto gap-4 md:h-[800px]">
          
          {/* Main Chart Block */}
          <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-luxury-black to-[#1a1a1a] border border-white/5 p-8 relative overflow-hidden group hover:border-white/10 transition-all">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-deep-burgundy to-transparent"></div>
            <h3 className="font-serif text-2xl text-platinum mb-2">Снижение уровня кортизола</h3>
            <p className="font-sans text-sm text-white/50 mb-8">Динамика биомаркеров стресса за 8 недель протокола.</p>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorCortisol" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#c5a059" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#c5a059" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" hide />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#121212', border: '1px solid #333', color: '#fff' }}
                    itemStyle={{ color: '#c5a059' }}
                  />
                  <Area type="monotone" dataKey="cortisol" stroke="#c5a059" fillOpacity={1} fill="url(#colorCortisol)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 flex justify-between items-end">
                <div>
                    <div className="text-4xl font-serif text-white">-72%</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">Тревожность</div>
                </div>
                <div className="text-right">
                    <div className="text-4xl font-serif text-white">+140%</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">HRV (Вариабельность ритма сердца)</div>
                </div>
            </div>
          </div>

          {/* Oura Integration */}
          <div className="bg-luxury-black border border-white/5 p-6 flex flex-col justify-between hover:bg-white/5 transition-colors">
             <Fingerprint className="text-muted-gold mb-4" size={32} />
             <div>
                <h4 className="font-serif text-xl text-platinum">Биометрический контроль</h4>
                <p className="font-sans text-xs text-white/50 mt-2 leading-relaxed">
                    Мы интегрируем данные Oura Ring и Whoop для объективного мониторинга восстановления нервной системы.
                </p>
             </div>
          </div>

          {/* Vagus Nerve */}
          <div className="bg-luxury-black border border-white/5 p-6 flex flex-col justify-between hover:bg-white/5 transition-colors">
             <Waves className="text-muted-gold mb-4" size={32} />
             <div>
                <h4 className="font-serif text-xl text-platinum">Калибровка Вагуса</h4>
                <p className="font-sans text-xs text-white/50 mt-2 leading-relaxed">
                    Активация парасимпатической системы через соматические техники, возвращающая способность к глубокому расслаблению.
                </p>
             </div>
          </div>

          {/* Privacy */}
          <div className="md:col-span-2 bg-[#151515] border border-white/5 p-8 flex items-center gap-6 relative overflow-hidden">
             <div className="absolute -right-10 -bottom-10 opacity-10 text-9xl">
                <Lock />
             </div>
             <div className="relative z-10 max-w-md">
                <h3 className="font-serif text-2xl text-platinum mb-2">Протокол Конфиденциальности</h3>
                <p className="font-sans text-sm text-white/50 leading-relaxed">
                    Ваша приватность — наш приоритет. Мы работаем по стандарту NDA, аналогичному Private Banking. 
                    Никаких групповых занятий. Только закрытый формат 1-на-1.
                </p>
             </div>
          </div>

           {/* Image Tile */}
           <div className="md:col-span-1 md:row-span-2 relative border border-white/5 overflow-hidden group">
              <img 
                src="https://picsum.photos/400/600?grayscale" 
                alt="Mindfulness" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="font-serif text-xl italic text-platinum">"Тело помнит то, что разум пытается забыть."</p>
              </div>
           </div>
           
           {/* Stat Tile */}
           <div className="bg-deep-burgundy/20 border border-deep-burgundy/30 p-6 flex flex-col justify-center items-center text-center backdrop-blur-sm">
                <ScanFace className="text-white/80 mb-2" size={28} />
                <div className="text-3xl font-serif text-platinum mb-1">94%</div>
                <p className="text-[10px] uppercase tracking-widest text-white/50">Клиентов возвращают яркость ощущений</p>
           </div>

        </div>
      </div>
    </section>
  );
};

export default BentoScience;