import React, { useEffect, useRef, useState } from 'react';
import { Activity, Brain, HeartCrack } from 'lucide-react';

const Diagnosis: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 px-4 md:px-12 bg-luxury-black relative">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-platinum leading-tight">
              Высокофункциональный <span className="italic text-deep-burgundy">Износ</span>
            </h2>
            <div className="w-16 h-[1px] bg-muted-gold"></div>
            <p className="font-sans text-white/70 text-lg leading-relaxed font-light">
              Снаружи — безупречный фасад успеха. Слияния, поглощения, IPO. 
              Внутри — сенсорная анестезия. Вы помните вкус победы, но забыли вкус еды. 
              Секс стал механической разрядкой, сон — перезагрузкой системы, а не отдыхом.
            </p>
            <p className="font-sans text-white/70 text-lg leading-relaxed font-light">
              Ваше тело стало инструментом для достижения целей, но этот инструмент затупился. 
              Это не усталость. Это нейробиологический дефолт.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              { 
                icon: Brain, 
                title: "Дофаминовая Яма", 
                desc: "Привычные стимулы больше не вызывают радости. Требуется всё больше риска, чтобы просто почувствовать себя живым." 
              },
              { 
                icon: Activity, 
                title: "Кортизоловый Шлейф", 
                desc: "Хроническая активация оси ГГН разрушает когнитивные способности. Вы принимаете решения медленнее, чем 5 лет назад." 
              },
              { 
                icon: HeartCrack, 
                title: "Эмоциональное Онемение", 
                desc: "Партнер рядом кажется чужим. Близость вызывает не возбуждение, а раздражение или скуку." 
              }
            ].map((item, idx) => (
              <div key={idx} className="group p-6 bg-white/5 border border-white/5 hover:border-muted-gold/30 transition-all duration-500 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-black/40 rounded-full text-muted-gold group-hover:text-white transition-colors">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-platinum mb-2">{item.title}</h3>
                    <p className="font-sans text-sm text-white/50 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Diagnosis;