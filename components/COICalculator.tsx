import React, { useState, useMemo } from 'react';
import { RefreshCw, TrendingDown } from 'lucide-react';

const COICalculator: React.FC = () => {
  const [income, setIncome] = useState(1000000); // Monthly income in RUB
  const [stress, setStress] = useState(5); // 1-10
  const [duration, setDuration] = useState(2); // Years

  const calculatedLoss = useMemo(() => {
    // Logic: 
    // 1. Productivity loss due to burnout (approx 20-40% depending on stress)
    // 2. Bad decisions cost (10% of annual income)
    // 3. Potential medical/divorce costs (flat rate risk accelerator)
    
    const annualIncome = income * 12;
    const productivityLossFactor = (stress / 10) * 0.35; // Max 35% productivity loss
    const lostProductivity = annualIncome * productivityLossFactor * duration;
    
    // Cost of potential errors/missed opportunities
    const opportunityCost = (annualIncome * 0.15) * duration;
    
    return Math.floor(lostProductivity + opportunityCost);
  }, [income, stress, duration]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="calculator" className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-deep-burgundy/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl text-platinum mb-6">Калькулятор <span className="text-deep-burgundy italic">Потерь</span></h2>
          <p className="font-sans text-white/60 max-w-2xl mx-auto">
            Бездействие — это не экономия. Это инвестиция в вашу деградацию. 
            Посчитайте реальную стоимость вашего текущего состояния.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white/5 p-8 md:p-12 border border-white/10 backdrop-blur-md rounded-sm">
          
          {/* Controls */}
          <div className="space-y-10">
            <div>
              <label className="flex justify-between text-sm uppercase tracking-widest text-muted-gold mb-4">
                <span>Ежемесячный доход</span>
                <span className="text-white">{formatCurrency(income)}</span>
              </label>
              <input 
                type="range" 
                min="300000" 
                max="10000000" 
                step="100000"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-muted-gold hover:accent-white transition-all"
              />
            </div>

            <div>
              <label className="flex justify-between text-sm uppercase tracking-widest text-muted-gold mb-4">
                <span>Уровень стресса (1-10)</span>
                <span className="text-white">{stress} / 10</span>
              </label>
              <input 
                type="range" 
                min="1" 
                max="10" 
                step="1"
                value={stress}
                onChange={(e) => setStress(Number(e.target.value))}
                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-muted-gold hover:accent-white transition-all"
              />
              <p className="text-xs text-white/30 mt-2">
                {stress < 4 ? "Умеренное напряжение" : stress < 8 ? "Хроническая усталость" : "Клиническое выгорание"}
              </p>
            </div>

            <div>
              <label className="flex justify-between text-sm uppercase tracking-widest text-muted-gold mb-4">
                <span>Длительность состояния</span>
                <span className="text-white">{duration} года</span>
              </label>
              <input 
                type="range" 
                min="0.5" 
                max="10" 
                step="0.5"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-muted-gold hover:accent-white transition-all"
              />
            </div>
          </div>

          {/* Result */}
          <div className="relative border-l border-white/10 pl-0 lg:pl-12 text-center lg:text-left">
            <div className="mb-2 text-white/40 text-sm uppercase tracking-widest">
                Цена вашего бездействия (COI)
            </div>
            <div className="text-5xl md:text-6xl font-serif text-deep-burgundy mb-6 animate-pulse-slow">
              {formatCurrency(calculatedLoss)}
            </div>
            
            <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                    <TrendingDown className="text-white/40 shrink-0 mt-1" size={18} />
                    <p className="text-sm text-white/60">
                        Вы потеряли эквивалент <span className="text-white font-medium">{Math.floor(calculatedLoss / 2000000)} люксовых отпусков</span>, которые не принесли радости.
                    </p>
                </div>
                <div className="flex items-start gap-3">
                    <RefreshCw className="text-white/40 shrink-0 mt-1" size={18} />
                    <p className="text-sm text-white/60">
                        Вероятность необратимых изменений в отношениях: <span className="text-white font-medium">{Math.min(stress * duration * 10, 99)}%</span>.
                    </p>
                </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
                 <p className="text-xs text-white/30 italic">
                    *Расчет основан на модели снижения когнитивной эффективности при хроническом стрессе и упущенной выгоде капитала.
                 </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default COICalculator;