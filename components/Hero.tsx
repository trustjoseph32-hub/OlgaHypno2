import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Simulation - In prod this would be a high-res video */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Abstract Luxury Texture" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 via-transparent to-luxury-black"></div>
        <div className="absolute inset-0 bg-luxury-black/30 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <p className="font-sans text-muted-gold tracking-[0.3em] text-sm uppercase mb-6 animate-fade-in-up">
          Нейробиология • Соматика • Эстетика
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight text-platinum mb-8 font-light tracking-wide">
          Вы научились <br />
          <span className="italic text-white/80">управлять капиталом.</span>
        </h1>
        <p className="font-serif text-2xl md:text-4xl text-white/60 mb-12 font-thin">
          Почему ваше тело все еще банкрот?
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8">
          <a 
            href="#calculator"
            className="group relative px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-platinum font-sans tracking-widest uppercase text-xs hover:bg-deep-burgundy/80 hover:border-deep-burgundy transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-white transition-colors">Рассчитать цену бездействия</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ArrowDown className="text-muted-gold w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;