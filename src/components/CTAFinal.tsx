import React from 'react';
import { ShieldCheck, Sparkles, Send } from 'lucide-react';

interface CTAFinalProps {
  onCtaClick: () => void;
}

export const CTAFinal: React.FC<CTAFinalProps> = ({ onCtaClick }) => {
  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-[linear-gradient(180deg,_#0B192C_0%,_#132B4A_100%)] p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl">
          <div className="absolute inset-0 bg-grid-dots-dark opacity-20 pointer-events-none"></div>
          <div className="absolute -top-12 -left-12 h-64 w-64 rounded-full bg-trygg-teal/10 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-trygg-teal/10 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 mx-auto max-w-3xl space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-trygg-teal/20 bg-trygg-teal/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-trygg-teal">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Cotação gratuita e rápida</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-[1.2] text-white">
              Feche o envio da cotação com um clique no WhatsApp.
            </h2>

            <p className="mx-auto max-w-xl text-base sm:text-lg leading-relaxed text-slate-300">
              Preencha os dados da empresa, valide a composição etária e siga para uma conversa consultiva sem custo.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6 pt-2 text-slate-300 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-trygg-teal" />
                <span>Sem custo ou compromisso</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-trygg-teal" />
                <span>Sigilo e LGPD garantidos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-trygg-teal" />
                <span>Retorno rápido</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onCtaClick}
                id="cta-final-whatsapp"
                className="group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-emerald-500 px-8 py-4 text-base font-extrabold text-white shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 active:scale-95 sm:px-10 sm:py-5 sm:text-lg"
              >
                <svg className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.384 9.86-9.778.001-2.614-1.015-5.07-2.861-6.92C16.615 2.056 14.159 1.037 11.55 1.037 6.114 1.037 1.692 5.423 1.69 10.817c-.001 1.679.452 3.3 1.309 4.729L2.03 21.03l5.617-1.876zM17.67 14.87c-.29-.145-1.713-.846-1.977-.941-.264-.096-.456-.145-.648.145-.191.29-.741.94-.908 1.132-.167.19-.333.21-.623.067-.29-.145-1.226-.452-2.335-1.442-.864-.77-1.447-1.721-1.616-2.011-.17-.29-.018-.447.127-.592.13-.13.29-.339.435-.508.145-.17.19-.29.29-.483.096-.193.048-.362-.024-.508-.073-.145-.648-1.56-.888-2.138-.233-.56-.47-.482-.648-.492-.167-.008-.36-.01-.552-.01s-.504.072-.768.362c-.264.29-1.008.986-1.008 2.406 0 1.42 1.032 2.788 1.176 2.98.145.193 2.03 3.1 4.919 4.348.687.297 1.224.475 1.642.608.69.22 1.319.189 1.815.115.553-.083 1.714-.7 1.956-1.378.24-.678.24-1.258.17-1.378-.072-.12-.264-.193-.554-.339z" />
                </svg>
                <span>Receber cotação no WhatsApp</span>
                <Send className="h-4 w-4 opacity-60 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            <p className="text-[11px] font-semibold tracking-wide uppercase text-slate-400">
              Retorno rápido em horário comercial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
