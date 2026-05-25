import React from 'react';
import { ArrowUpRight, TrendingDown, DollarSign, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';

interface HeroProps {
  onPrimaryCtaClick: () => void;
  onSecondaryCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPrimaryCtaClick, onSecondaryCtaClick }) => {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pb-24 lg:pt-36 lg:pb-32 bg-gradient-to-b from-trygg-navy-50/70 via-white to-[#F8FAFC]">
      {/* Visual Dot Grid Overlay */}
      <div className="absolute inset-0 bg-grid-dots opacity-70 pointer-events-none"></div>

      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-trygg-teal/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/10 w-[500px] h-[500px] bg-trygg-navy-100/30 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Content Left (5 Cols / 6 Cols) */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8 animate-fade-in-up">
            
            {/* Tagline / Subtitle */}
            <div className="inline-flex items-center gap-2 bg-trygg-navy-900/5 border border-trygg-navy-900/10 px-3 py-1.5 rounded-full">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-trygg-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-trygg-teal"></span>
              </span>
              <span className="text-xs font-semibold text-trygg-navy-800 tracking-wide uppercase">
                Parcerias Oficiais com Planos de Saúde para PMEs
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] tracking-tight text-trygg-navy-900">
              Seu Plano Empresarial Pode Estar Custando{' '}
              <span className="relative inline-block text-trygg-teal">
                Muito Mais
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-trygg-teal/20 rounded"></span>
              </span>{' '}
              do Que Deveria.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-500 max-w-2xl leading-relaxed">
              Descubra como reduzir os custos do plano de saúde da sua empresa sem perder qualidade na cobertura através de nossas parcerias diretas com as principais operadoras.
            </p>

            {/* Core Value Quick Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-trygg-teal flex-shrink-0" />
                <span className="text-sm font-medium text-slate-600">Redução de até 35% nos prêmios</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-trygg-teal flex-shrink-0" />
                <span className="text-sm font-medium text-slate-600">Upgrade de rede credenciada</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-trygg-teal flex-shrink-0" />
                <span className="text-sm font-medium text-slate-600">Sem carência adicional na migração</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-trygg-teal flex-shrink-0" />
                <span className="text-sm font-medium text-slate-600">Estudo de parcerias 100% gratuito</span>
              </div>
            </div>

            {/* Actions (CTAs) */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onPrimaryCtaClick}
                id="cta-hero-whatsapp"
                className="group flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.384 9.86-9.778.001-2.614-1.015-5.07-2.861-6.92C16.615 2.056 14.159 1.037 11.55 1.037 6.114 1.037 1.692 5.423 1.69 10.817c-.001 1.679.452 3.3 1.309 4.729L2.03 21.03l5.617-1.876zM17.67 14.87c-.29-.145-1.713-.846-1.977-.941-.264-.096-.456-.145-.648.145-.191.29-.741.94-.908 1.132-.167.19-.333.21-.623.067-.29-.145-1.226-.452-2.335-1.442-.864-.77-1.447-1.721-1.616-2.011-.17-.29-.018-.447.127-.592.13-.13.29-.339.435-.508.145-.17.19-.29.29-.483.096-.193.048-.362-.024-.508-.073-.145-.648-1.56-.888-2.138-.233-.56-.47-.482-.648-.492-.167-.008-.36-.01-.552-.01s-.504.072-.768.362c-.264.29-1.008.986-1.008 2.406 0 1.42 1.032 2.788 1.176 2.98.145.193 2.03 3.1 4.919 4.348.687.297 1.224.475 1.642.608.69.22 1.319.189 1.815.115.553-.083 1.714-.7 1.956-1.378.24-.678.24-1.258.17-1.378-.072-.12-.264-.193-.554-.339z" />
                </svg>
                <span>Falar no WhatsApp</span>
              </button>
              <button
                onClick={onSecondaryCtaClick}
                id="cta-hero-analysis"
                className="inline-flex items-center justify-center gap-1.5 border-2 border-trygg-navy-900 hover:bg-trygg-navy-900 hover:text-white text-trygg-navy-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 transform active:scale-95 shadow-sm hover:shadow"
              >
                <span>Solicitar Análise Gratuita</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            
            {/* Quick Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-slate-400 border-t border-slate-100">
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-4.5 h-4.5 text-trygg-teal" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Parceria Oficial com Operadoras</span>
              </div>
              <div className="flex items-center gap-1">
                <Activity className="w-4.5 h-4.5 text-trygg-teal" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Gestão 100% Digital</span>
              </div>
            </div>

          </div>

          {/* Hero Visual Mockup Right (7 Cols / 6 Cols) */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end animate-fade-in animate-float duration-[8s] py-4">
            
            {/* Premium CSS-only Dashboard Mockup Container */}
            <div className="w-full max-w-[440px] bg-trygg-navy-900 text-white rounded-3xl p-6 shadow-2xl relative border border-trygg-navy-700/50 glow-navy">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-trygg-navy-800 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 bg-trygg-teal rounded-full flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold font-sans tracking-wide uppercase text-slate-300">TRYGG Optimise</h3>
                    <p className="text-[10px] text-slate-500">Simulador de Saúde Corporativa</p>
                  </div>
                </div>
                <span className="bg-trygg-teal/10 border border-trygg-teal/20 text-trygg-teal text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Ativo
                </span>
              </div>

              {/* Central Graph & Statistics */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] text-slate-400 font-medium">Economia Média Estimada</p>
                    <p className="text-3xl font-extrabold text-white mt-1">
                      -28<span className="text-trygg-teal">%</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-lg">
                    <TrendingDown className="w-3.5 h-3.5" />
                    <span>Redução de Custos</span>
                  </div>
                </div>

                {/* Graph bars representation */}
                <div className="bg-trygg-navy-950 rounded-2xl p-4 space-y-3.5 border border-trygg-navy-800">
                  {/* Bar 1 */}
                  <div>
                    <div className="flex justify-between text-[10px] text-slate-400 font-medium mb-1">
                      <span>Custo Atual do Plano</span>
                      <span className="font-semibold text-slate-300">R$ 14.500/mês</span>
                    </div>
                    <div className="w-full h-3 bg-trygg-navy-800 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-trygg-navy-700 rounded-full"></div>
                    </div>
                  </div>
                  {/* Bar 2 */}
                  <div>
                    <div className="flex justify-between text-[10px] text-slate-400 font-medium mb-1">
                      <span>Proposta Inteligente TRYGG</span>
                      <span className="font-semibold text-trygg-teal">R$ 10.440/mês</span>
                    </div>
                    <div className="w-full h-3 bg-trygg-navy-800 rounded-full overflow-hidden">
                      <div className="w-[72%] h-full bg-trygg-teal rounded-full relative">
                        <span className="absolute inset-0 bg-white/20 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 text-left">
                  <div className="bg-trygg-navy-800/50 border border-trygg-navy-700/30 p-3 rounded-xl">
                    <div className="flex items-center gap-1.5 mb-1 text-[10px] text-slate-400">
                      <DollarSign className="w-3 h-3 text-trygg-teal" />
                      <span>Retorno Anual (ROI)</span>
                    </div>
                    <p className="text-sm font-bold text-white">R$ 48.720,00</p>
                  </div>
                  <div className="bg-trygg-navy-800/50 border border-trygg-navy-700/30 p-3 rounded-xl">
                    <div className="flex items-center gap-1.5 mb-1 text-[10px] text-slate-400">
                      <ShieldCheck className="w-3.5 h-3.5 text-trygg-teal" />
                      <span>Garantia de Rede</span>
                    </div>
                    <p className="text-sm font-bold text-white">Mantida ou Superior</p>
                  </div>
                </div>

                {/* Simulated operator listing checkmarks */}
                <div className="space-y-2 pt-1.5">
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Simulação de Operadoras</p>
                  
                  <div className="flex items-center justify-between bg-trygg-navy-950/60 p-2 rounded-lg text-xs">
                    <span className="font-medium text-slate-300">Portabilidade Bradesco</span>
                    <span className="text-emerald-400 font-bold">-26% Custo</span>
                  </div>
                  <div className="flex items-center justify-between bg-trygg-navy-950/60 p-2 rounded-lg text-xs">
                    <span className="font-medium text-slate-300">Portabilidade SulAmérica</span>
                    <span className="text-emerald-400 font-bold">-32% Custo</span>
                  </div>
                </div>

              </div>

              {/* Floating Decorative Glassmorphic Tag */}
              <div className="absolute -bottom-4 -left-6 bg-white/95 backdrop-blur text-trygg-navy-900 border border-slate-200 p-3.5 rounded-2xl shadow-xl flex items-center gap-3 animate-pulse-subtle max-w-[200px]">
                <div className="p-1.5 bg-emerald-500/10 rounded-lg text-emerald-500">
                  <TrendingDown className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[9px] uppercase tracking-wider font-extrabold text-slate-400 leading-none">Economia Média</p>
                  <p className="text-xs font-black text-trygg-navy-900 mt-1">R$ 4.060 economizados/mês</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
