import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-stone-900 text-stone-200 relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-stone-800/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Info Side */}
          <div className="lg:pt-8">
            <span className="block text-xs font-bold text-primary-500 uppercase tracking-[0.2em] mb-4">Contato</span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-stone-50 mb-8 leading-tight">
              Vamos iniciar sua jornada?
            </h2>
            <p className="text-stone-400 text-lg mb-12 leading-relaxed font-light max-w-lg">
              Estou à disposição para esclarecer dúvidas e agendar sua sessão. Entre em contato pelo WhatsApp para um retorno mais ágil.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-stone-800/50 border border-stone-700/50 flex items-center justify-center text-primary-400 group-hover:bg-primary-900/20 group-hover:border-primary-500/30 transition-all duration-500">
                  <Phone size={22} className="group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <p className="text-sm text-stone-500 font-bold uppercase tracking-wider mb-1">Telefone / WhatsApp</p>
                  <p className="text-xl text-stone-100 font-medium">(11) 99999-8888</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-stone-800/50 border border-stone-700/50 flex items-center justify-center text-primary-400 group-hover:bg-primary-900/20 group-hover:border-primary-500/30 transition-all duration-500">
                  <Mail size={22} className="group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <p className="text-sm text-stone-500 font-bold uppercase tracking-wider mb-1">E-mail</p>
                  <p className="text-xl text-stone-100 font-medium">contato@psicoluizfelipe.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-stone-800/50 border border-stone-700/50 flex items-center justify-center text-primary-400 group-hover:bg-primary-900/20 group-hover:border-primary-500/30 transition-all duration-500">
                  <MapPin size={22} className="group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <p className="text-sm text-stone-500 font-bold uppercase tracking-wider mb-1">Localização</p>
                  <p className="text-xl text-stone-100 font-medium">Atendimento Online</p>
                  <p className="text-stone-400 font-light mt-1">Sessões seguras no conforto de onde estiver.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-stone-50 p-8 md:p-12 rounded-[2.5rem] text-stone-900 shadow-2xl shadow-black/20 relative overflow-hidden">
            {/* Decorative blob on card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100/50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <h4 className="text-2xl font-serif font-medium mb-8 relative z-10">Envie uma mensagem</h4>

            <a
              href="https://wa.me/5511999998888"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-6 rounded-xl text-center mb-8 transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-3 relative z-10"
            >
              <MessageCircle size={24} />
              <span>Conversar no WhatsApp</span>
            </a>

            <div className="relative flex py-2 items-center mb-8 z-10">
              <div className="flex-grow border-t border-stone-200"></div>
              <span className="flex-shrink mx-4 text-stone-400 text-sm font-medium uppercase tracking-widest">Ou por e-mail</span>
              <div className="flex-grow border-t border-stone-200"></div>
            </div>

            <form className="space-y-5 relative z-10">
              <div>
                <input type="text" placeholder="Seu Nome" className="w-full px-5 py-4 bg-white border border-stone-200 rounded-xl focus:outline-none focus:border-primary-400 focus:ring-4 focus:ring-primary-50 transition-all placeholder:text-stone-400" />
              </div>
              <div>
                <input type="email" placeholder="Seu E-mail" className="w-full px-5 py-4 bg-white border border-stone-200 rounded-xl focus:outline-none focus:border-primary-400 focus:ring-4 focus:ring-primary-50 transition-all placeholder:text-stone-400" />
              </div>
              <div>
                <textarea rows={4} placeholder="Como posso ajudar?" className="w-full px-5 py-4 bg-white border border-stone-200 rounded-xl focus:outline-none focus:border-primary-400 focus:ring-4 focus:ring-primary-50 transition-all placeholder:text-stone-400 resize-none"></textarea>
              </div>
              <button className="w-full bg-stone-900 hover:bg-stone-800 text-white font-bold py-4 rounded-xl transition-all hover:shadow-xl hover:-translate-y-0.5">
                Enviar Mensagem
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;