import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const Offer: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-luxury-charcoal border-t border-white/5">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        <div className="space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl text-platinum leading-tight">
            Протокол <br /> <span className="text-muted-gold italic">Соматический Ренессанс</span>
          </h2>
          <p className="font-sans text-white/60 text-lg leading-relaxed font-light">
            Это не терапия в классическом понимании. Мы не будем годами обсуждать ваше детство. 
            Это инженерная перестройка вашей нервной системы для возвращения способности чувствовать жизнь.
          </p>
          
          <ul className="space-y-4">
            {[
              "Глубокая работа с лимбической системой",
              "Восстановление естественного гормонального фона",
              "Персональные аудио-гипнотические треки",
              "Поддержка Concierge-формата 24/7"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-platinum font-sans tracking-wide">
                <CheckCircle className="text-muted-gold w-4 h-4" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-muted-gold/20 to-transparent blur-3xl opacity-30"></div>
          <div className="relative bg-black/40 border border-white/10 p-8 backdrop-blur-md">
            <div className="flex justify-between items-start mb-6">
              <span className="text-xs uppercase text-white/40 tracking-widest">Инвестиция</span>
              <div className="flex gap-1">
                {[1,2,3,4,5].map(s => <Star key={s} size={12} className="text-muted-gold fill-muted-gold" />)}
              </div>
            </div>
            
            <div className="mb-8">
              <p className="text-3xl font-serif text-white mb-2">Персональное ведение</p>
              <p className="text-sm text-white/50">Длительность: 8 недель</p>
            </div>

            <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-serif text-white">$5,000</span>
                <span className="text-sm text-white/40">/ курс</span>
            </div>

            <p className="text-xs text-white/40 mb-8 italic">
              *Эквивалент одного ужина с партнерами, который вы, возможно, даже не запомните.
            </p>

            <button disabled className="w-full py-4 border border-white/10 text-white/30 text-xs uppercase tracking-widest cursor-not-allowed">
              Места на Сентябрь заняты
            </button>
            <p className="text-center mt-2 text-[10px] text-deep-burgundy uppercase tracking-widest">
              Доступно 2 места на Октябрь
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Offer;