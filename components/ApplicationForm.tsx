import React, { useState } from 'react';
import { Send, Lock } from 'lucide-react';

const ApplicationForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    income: '',
    motivation: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Ваша заявка принята на рассмотрение. Мы свяжемся с вами в случае положительного решения.");
    // Here you would integrate with backend/email service
  };

  return (
    <section className="py-32 px-4 bg-luxury-black flex justify-center items-center min-h-screen">
      <div className="max-w-2xl w-full bg-[#0f0f0f] border border-white/5 p-8 md:p-16 relative shadow-2xl shadow-black">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-muted-gold via-white/20 to-muted-gold opacity-50"></div>
        
        <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 border border-deep-burgundy/50 rounded-full text-[10px] text-deep-burgundy uppercase tracking-widest mb-4">
                Закрытый лист ожидания
            </span>
          <h2 className="font-serif text-3xl md:text-4xl text-platinum">Аудит соответствия</h2>
          <p className="font-sans text-sm text-white/40 mt-4">
            Я работаю только с 5 клиентами в квартал. <br/> Заполните анкету, чтобы подать заявку на рассмотрение кандидатуры.
          </p>
        </div>

        <form onSubmit={step === 3 ? handleSubmit : handleNext} className="space-y-8">
          
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-gold mb-2">Ваше Имя</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border-b border-white/20 p-3 text-platinum focus:border-muted-gold focus:outline-none transition-colors placeholder-white/10"
                  placeholder="Иван Петров"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-gold mb-2">Корпоративный Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border-b border-white/20 p-3 text-platinum focus:border-muted-gold focus:outline-none transition-colors placeholder-white/10"
                  placeholder="ivan@company.com"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
               <div>
                <label className="block text-xs uppercase tracking-widest text-muted-gold mb-2">Оценочный годовой доход ($)</label>
                <select 
                  name="income"
                  value={formData.income}
                  onChange={handleChange}
                  className="w-full bg-black border-b border-white/20 p-3 text-platinum focus:border-muted-gold focus:outline-none transition-colors"
                >
                    <option value="" disabled>Выберите диапазон</option>
                    <option value="100k-500k">$100k - $500k</option>
                    <option value="500k-1m">$500k - $1M</option>
                    <option value="1m+">$1M+</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-gold mb-2">Главная проблема</label>
                <textarea 
                  name="motivation" 
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full bg-black border-b border-white/20 p-3 text-platinum focus:border-muted-gold focus:outline-none transition-colors placeholder-white/10 resize-none"
                  placeholder="Опишите, что вы чувствуете..."
                />
              </div>
            </div>
          )}

          {step === 3 && (
             <div className="text-center animate-fade-in py-8">
                <Lock className="mx-auto text-muted-gold mb-4" size={40} />
                <p className="text-lg text-platinum mb-2">Данные зашифрованы.</p>
                <p className="text-sm text-white/50">Нажимая кнопку ниже, вы соглашаетесь с условиями полной конфиденциальности.</p>
             </div>
          )}

          <div className="flex justify-between items-center pt-6">
            {step > 1 && (
                <button 
                type="button" 
                onClick={() => setStep(step - 1)}
                className="text-xs text-white/40 hover:text-white uppercase tracking-widest"
                >
                Назад
                </button>
            )}
            <button 
              type="submit"
              className={`ml-auto px-8 py-3 bg-white text-black font-sans uppercase tracking-widest text-xs font-bold hover:bg-muted-gold transition-colors flex items-center gap-2 ${step === 1 ? 'w-full md:w-auto' : ''}`}
            >
              {step === 3 ? 'Подать заявку' : 'Далее'}
              {step !== 3 && <Send size={14} />}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ApplicationForm;