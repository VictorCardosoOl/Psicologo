import React from 'react';
import { Instagram, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 pt-24 pb-8 border-t border-stone-900 relative overflow-hidden">

      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-900/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-stone-900/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Header do Footer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-100 font-medium leading-[1.1] mb-8">
              Vamos iniciar sua <br />
              <span className="text-stone-500 italic">jornada</span> de autoconhecimento?
            </h2>
            <p className="text-lg leading-relaxed text-stone-500 max-w-md font-light">
              A psicologia é um ato de coragem e liberdade. Estou aqui para oferecer um espaço ético e acolhedor para que você possa se reencontrar e construir novos caminhos.
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:pt-8">
            <div className="bg-stone-900/50 rounded-3xl p-8 border border-stone-800/50">
              <h3 className="text-stone-100 font-serif text-xl mb-6">Canais de Contato</h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/5511999998888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl bg-stone-900 border border-stone-800 hover:border-primary-900/50 hover:bg-stone-800 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                      <ArrowUpRight size={20} />
                    </div>
                    <span className="text-stone-300 font-medium group-hover:text-white transition-colors">Agendar via WhatsApp</span>
                  </div>
                  <span className="text-sm text-stone-500">(11) 99999-8888</span>
                </a>

                <a
                  href="mailto:contato@psicoluizfelipe.com.br"
                  className="group flex items-center justify-between p-4 rounded-xl bg-stone-900 border border-stone-800 hover:border-primary-900/50 hover:bg-stone-800 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400">
                      <Mail size={20} />
                    </div>
                    <span className="text-stone-300 font-medium group-hover:text-white transition-colors">Enviar E-mail</span>
                  </div>
                  <span className="text-sm text-stone-500">contato@psicoluizfelipe.com.br</span>
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <SocialButton icon={<Instagram size={20} />} href="#" label="Instagram" />
              <SocialButton icon={<Linkedin size={20} />} href="#" label="LinkedIn" />
              <SocialButton icon={<Mail size={20} />} href="mailto:contato@psicoluizfelipe.com.br" label="Email" />
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-stone-800 to-transparent mb-12"></div>

        {/* Links e Info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-stone-600 font-medium">
          <div className="flex gap-8">
            <a href="#" className="hover:text-stone-300 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Termos de Uso</a>
            <span>CRP 06/181948</span>
          </div>
          <p>&copy; {new Date().getFullYear()} Luiz Felipe Braziliano.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialButton = ({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) => (
  <a
    href={href}
    aria-label={label}
    className="w-12 h-12 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:bg-primary-900/20 hover:text-primary-400 hover:border-primary-900/30 transition-all"
  >
    {icon}
  </a>
);

export default Footer;