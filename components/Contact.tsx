import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-20 bg-slate-900 text-white">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-sm font-bold text-primary-400 uppercase tracking-widest mb-2">Contato</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-8">
              Vamos agendar sua sessão?
            </h3>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
              Entre em contato pelo WhatsApp para verificar disponibilidade de horários. Respondo pessoalmente em até 24h.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-primary-400">
                   <Phone size={20} />
                 </div>
                 <div>
                   <p className="text-sm text-slate-400 font-bold uppercase">Telefone / WhatsApp</p>
                   <p className="text-xl font-bold">(11) 99999-8888</p>
                 </div>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-primary-400">
                   <Mail size={20} />
                 </div>
                 <div>
                   <p className="text-sm text-slate-400 font-bold uppercase">E-mail</p>
                   <p className="text-xl font-bold">contato@psicoluizfelipe.com.br</p>
                 </div>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-primary-400">
                   <MapPin size={20} />
                 </div>
                 <div>
                   <p className="text-sm text-slate-400 font-bold uppercase">Localização</p>
                   <p className="text-xl font-bold">Atendimento 100% Online</p>
                   <p className="text-sm text-slate-400">Para todo o Brasil e Exterior</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl text-slate-900 shadow-xl">
            <h4 className="text-2xl font-bold mb-6 text-center">Mande uma mensagem</h4>
            <a 
               href="https://wa.me/5511999998888" 
               target="_blank"
               rel="noopener noreferrer"
               className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl text-center mb-6 transition-colors flex items-center justify-center gap-2"
            >
               <MessageCircle size={24} /> Conversar no WhatsApp
            </a>
            <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-slate-200"></div>
                <span className="flex-shrink mx-4 text-slate-400">ou envie um e-mail</span>
                <div className="flex-grow border-t border-slate-200"></div>
            </div>
            <form className="space-y-4">
               <input type="text" placeholder="Seu Nome" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary-500" />
               <input type="email" placeholder="Seu E-mail" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary-500" />
               <textarea rows={3} placeholder="Mensagem breve..." className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary-500"></textarea>
               <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition-colors">Enviar E-mail</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;