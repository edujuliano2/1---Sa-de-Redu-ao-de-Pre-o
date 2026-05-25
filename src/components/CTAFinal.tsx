import React from 'react';
import { ShieldCheck, Sparkles, Send } from 'lucide-react';

interface CTAFinalProps {
  onCtaClick: () => void;
}

export const CTAFinal: React.FC<CTAFinalProps> = ({ onCtaClick }) => {
  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic Dark Gradient Container */}
        <div className="relative overflow-hidden bg-trygg-navy-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-white border border-trygg-navy-800 shadow-2xl glow-navy">
          
          {/* Visual Overlay Grid and blur spheres */}
          <div className="absolute inset-0 bg-grid-dots-dark opacity-20 pointer-events-none"></div>
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-trygg-teal/10 rounded-full filter blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-trygg-teal/10 rounded-full filter blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6 sm:space-y-8">
            
            {/* Minimal Badge */}
            <div className="inline-flex items-center gap-1.5 bg-trygg-teal/10 text-trygg-teal border border-trygg-teal/20 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Diagnóstico 100% Gratuito</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-[1.2] text-white">
              Descubra exatamente quanto sua empresa pode economizar.
            </h2>

            {/* Subheadline */}
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Receba um estudo comparativo completo das operadoras e uma análise técnica gratuita do seu plano de saúde atual.
            </p>

            {/* Highlights Checkmark List */}
            <div className="flex flex-wrap justify-center items-center gap-6 pt-2 text-slate-300 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-trygg-teal" />
                <span>Sem custo ou compromisso</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-trygg-teal" />
                <span>Sigilo e LGPD garantidos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-trygg-teal" />
                <span>Feito por consultores experientes</span>
              </div>
            </div>

            {/* Conversion CTA button */}
            <div className="pt-4">
              <button
                onClick={onCtaClick}
                id="cta-final-whatsapp"
                className="group inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold px-8 py-4 sm:px-10 sm:py-5 rounded-2xl shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 text-base sm:text-lg glow-pulse"
              >
                <svg
                  className="w-6 h-6 fill-current text-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.384 9.86-9.778.001-2.614-1.015-5.07-2.861-6.92C16.615 2.056 14.159 1.037 11.55 1.037 6.114 1.037 1.692 5.423 1.69 10.817c-.001 1.679.452 3.3 1.309 4.729L2.03 21.03l5.617-1.876zM17.67 14.87c-.29-.145-1.713-.846-1.977-.941-.264-.096-.456-.145-.648.145-.191.29-.741.94-.908 1.132-.167.19-.333.21-.623.067-.29-.145-1.226-.452-2.335-1.442-.864-.77-1.447-1.721-1.616-2.011-.17-.29-.018-.447.127-.592.13-.13.29-.339.435-.508.145-.17.19-.29.29-.483.096-.193.048-.362-.024-.508-.073-.145-.648-1.56-.888-2.138-.233-.56-.47-.482-.648-.492-.167-.008-.36-.01-.552-.01s-.504.072-.768.362c-.264.29-1.008.986-1.008 2.406 0 1.42 1.032 2.788 1.176 2.98.145.193 2.03 3.1 4.919 4.348.687.297 1.224.475 1.642.608.69.22 1.319.189 1.815.115.553-.083 1.714-.7 1.956-1.378.24-.678.24-1.258.17-1.378-.072-.12-.264-.193-.554-.339z" />
                </svg>
                <span>Falar com Especialista no WhatsApp</span>
                <Send className="w-4 h-4 ml-1 opacity-60 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Delivery Guarantee text */}
            <p className="text-[11px] text-slate-400 font-semibold tracking-wide uppercase">
              Retorno rápido em horário comercial
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
