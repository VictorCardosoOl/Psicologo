import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat: React.FC = () => {
  return (
    <a
      href="https://wa.me/5511999998888" // Replace with actual number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] transition-all duration-300 transform hover:scale-105 group"
      aria-label="Falar com Luiz Felipe no WhatsApp"
    >
      <MessageCircle size={30} strokeWidth={2} />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-800 px-4 py-2 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none translate-x-2 group-hover:translate-x-0 duration-300 border border-slate-100 hidden md:block">
        Fale comigo no WhatsApp
        <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 rotate-45 w-2 h-2 bg-white border-t border-r border-slate-100"></div>
      </span>
    </a>
  );
};

export default WhatsAppFloat;