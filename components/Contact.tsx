import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <h2 className="text-sm font-bold text-sage-600 uppercase tracking-widest mb-2">Fale Comigo</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">
              O primeiro passo para a mudança começa aqui.
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Agende sua consulta ou tire dúvidas sobre o atendimento. Respondo a todas as mensagens pessoalmente em até 24h.
            </p>

            <div className="space-y-8">
              <a href="https://wa.me/5511999998888" target="_blank" rel="noreferrer" className="group flex items-start gap-4 p-4 rounded-xl hover:bg-sage-50 transition-colors -mx-4">
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center text-sage-700 flex-shrink-0 group-hover:bg-sage-200 transition-colors">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">WhatsApp / Telefone</h4>
                  <p className="text-slate-600">(11) 99999-8888</p>
                  <span className="text-xs text-sage-600 font-medium">Resposta mais rápida</span>
                </div>
              </a>
              
              <div className="flex items-start gap-4 p-4 -mx-4">
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center text-sage-700 flex-shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">E-mail</h4>
                  <p className="text-slate-600">contato@drandresilva.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 -mx-4">
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center text-sage-700 flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">Consultório</h4>
                  <p className="text-slate-600">Av. Paulista, 1000 - Cerqueira César</p>
                  <p className="text-slate-600">São Paulo - SP (Próximo ao Metrô Trianon)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-sand-50 p-8 md:p-10 rounded-3xl border border-sand-200 shadow-lg">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Send size={32} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-800 mb-3">Mensagem Recebida!</h4>
                <p className="text-slate-600 mb-8">Obrigado pelo contato. Retornarei em breve pelo canal de sua preferência.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-sage-700 font-bold hover:underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Nome Completo</label>
                  <input required type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sage-500 focus:border-sage-500 outline-none transition-all bg-white" placeholder="Seu nome" />
                </div>
                
                <div>
                  <label htmlFor="contact_info" className="block text-sm font-bold text-slate-700 mb-2">Email ou Telefone</label>
                  <input required type="text" id="contact_info" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sage-500 focus:border-sage-500 outline-none transition-all bg-white" placeholder="Como prefere ser contatado?" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-slate-700 mb-2">Motivo do contato</label>
                  <select id="subject" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sage-500 focus:border-sage-500 outline-none transition-all bg-white">
                    <option>Quero agendar uma consulta</option>
                    <option>Tenho dúvidas sobre valores</option>
                    <option>Primeira vez na terapia</option>
                    <option>Outros assuntos</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Mensagem (Opcional)</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sage-500 focus:border-sage-500 outline-none transition-all bg-white resize-none" placeholder="Sinta-se à vontade para resumir o que sente..."></textarea>
                </div>

                <button type="submit" className="w-full py-4 px-6 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  Enviar Mensagem <Send size={18} />
                </button>
                
                <p className="text-center text-xs text-slate-400 mt-4">
                  Seus dados são confidenciais e protegidos por sigilo profissional.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;