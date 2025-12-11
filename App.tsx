import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Diagnosis from './components/Diagnosis';
import BentoScience from './components/BentoScience';
import COICalculator from './components/COICalculator';
import Offer from './components/Offer';
import ApplicationForm from './components/ApplicationForm';

const App: React.FC = () => {
  
  useEffect(() => {
    // Add smooth scroll behavior to anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') as string);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
      });
    });
  }, []);

  return (
    <div className="bg-luxury-black min-h-screen text-platinum selection:bg-deep-burgundy selection:text-white">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-luxury-black/80 backdrop-blur-md border-b border-white/5 py-4 px-6 flex justify-between items-center">
        <div className="text-lg font-serif tracking-widest text-platinum">
          OLGA <span className="text-muted-gold">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-white/60">
          <a href="#diagnosis" className="hover:text-white transition-colors">Диагностика</a>
          <a href="#science" className="hover:text-white transition-colors">Метод</a>
          <a href="#calculator" className="hover:text-white transition-colors">Цена</a>
        </div>
        <a href="#apply" className="px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors text-xs uppercase tracking-widest border border-white/10">
          Записаться
        </a>
      </nav>

      <main>
        <Hero />
        <div id="diagnosis">
          <Diagnosis />
        </div>
        <div id="science">
          <BentoScience />
        </div>
        <COICalculator />
        <Offer />
        <div id="apply">
          <ApplicationForm />
        </div>
      </main>

      <footer className="py-12 bg-black text-center border-t border-white/5">
        <p className="text-2xl font-serif text-white/20 mb-4">ORGASMOLOGIST</p>
        <p className="text-[10px] uppercase tracking-widest text-white/30">
          Saint Petersburg &bull; Private Practice &bull; Est. 2024
        </p>
        <div className="mt-8 text-[10px] text-white/20 max-w-lg mx-auto leading-relaxed px-4">
          Отказ от ответственности: Услуги не являются медицинской деятельностью. 
          Результаты могут варьироваться. Полная конфиденциальность гарантирована.
        </div>
      </footer>
    </div>
  );
};

export default App;