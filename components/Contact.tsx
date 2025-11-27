import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-sm font-bold text-sage-700 uppercase tracking-wider mb-2">Contato</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">
              Vamos conversar?
            </h3>
            <p className="text-lg text-slate-600 mb-8">
              Entre em contato para agendar uma consulta ou tirar dúvidas. 
              Sua saúde mental é prioridade.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sage-50 rounded-full flex items-center justify-center text-sage-700 flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Telefone / WhatsApp</h4>
                  <p className="text-slate-600">(11) 99999-8888</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sage-50 rounded-full flex items-center justify-center text-sage-700 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">E-mail</h4>
                  <p className="text-slate-600">contato@drandresilva.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sage-50 rounded-full flex items-center justify-center text-sage-700 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Consultório</h4>
                  <p className="text-slate-600">Av. Paulista, 1000 - Cerqueira César</p>
                  <p className="text-slate-600">São Paulo - SP</p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sage-50 rounded-full flex items-center justify-center text-sage-700 flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Horário</h4>
                  <p className="text-slate-600">Segunda a Sexta: 08:00 - 20:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-sand-100 p-8 rounded-2xl border border-sand-200 shadow-sm">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-800 mb-2">Mensagem Enviada!</h4>
                <p className="text-slate-600">Entrarei em contato em breve.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sage-700 font-medium hover:underline"
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
                  <input required type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sage-500 focus:border-sage-500 outline-none transition-all" placeholder="Seu nome" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
                    <input required type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sage-500 focus:border-sage-500 outline-none transition-all" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Telefone</label>
                    <input required type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sage-500 focus:border-sage-500 outline-none transition-all" placeholder="(11) 99999-9999" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Assunto</label>
                  <select id="subject" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sage-500 focus:border-sage-500 outline-none transition-all bg-white">
                    <option>Agendamento</option>
                    <option>Dúvidas</option>
                    <option>Primeira Consulta</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mensagem</label>
                  <textarea required id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sage-500 focus:border-sage-500 outline-none transition-all" placeholder="Como posso ajudar?"></textarea>
                </div>

                <button type="submit" className="w-full py-4 px-6 bg-slate-800 hover:bg-slate-900 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
