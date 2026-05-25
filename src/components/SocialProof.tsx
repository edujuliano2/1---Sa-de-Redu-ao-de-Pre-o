import React, { useState } from 'react';
import { Quote, MessageSquare, TrendingDown, Star, Sparkles } from 'lucide-react';

interface SocialProofProps {
  onWhatsAppClick: (savingText: string) => void;
}

export const SocialProof: React.FC<SocialProofProps> = ({ onWhatsAppClick }) => {
  const [currentCost, setCurrentCost] = useState(8500); // Initial current plan cost in R$

  // Calculate savings (average reduction of 28%)
  const monthlySaving = Math.round(currentCost * 0.28);
  const annualSaving = Math.round(monthlySaving * 12);
  const optimizedCost = currentCost - monthlySaving;

  // Format currency helpers
  const formatCurrency = (val: number) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
  };

  const handleCtaClick = () => {
    const text = `Olá! Fiz a simulação no site e vi que minha empresa pode economizar cerca de R$ ${formatCurrency(monthlySaving)}/mês (${formatCurrency(annualSaving)}/ano). Gostaria de solicitar minha análise gratuita!`;
    onWhatsAppClick(text);
  };

  const testimonials = [
    {
      name: 'Luiza Mendonça',
      role: 'CFO / Sócia na TechVanguard',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120&h=120',
      comment: 'Estávamos sufocados com o reajuste de 22% da operadora anterior. A equipe da TRYGG fez um estudo minucioso e nos migrou para o mesmo nível de rede credenciada, reduzindo nossa fatura em 31%. Economia anual de mais de R$ 42.000.',
    },
    {
      name: 'Ricardo Santos',
      role: 'Diretor de Operações na Construtora Lótus',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=120&h=120',
      comment: 'O atendimento parceiro da TRYGG é um divisor de águas. Nosso RH não perde mais tempo ligando para operadoras. Além de cortarem custos em 25%, o suporte dedicado resolve qualquer reembolso em poucas horas.',
    },
  ];

  return (
    <section id="calculadora" className="py-20 sm:py-28 bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] relative overflow-hidden">
      
      {/* Visual background circles */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-trygg-teal/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-trygg-teal/10 text-trygg-teal border border-trygg-teal/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Simulador de Otimização
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-trygg-navy-900 tracking-tight">
            Descubra o potencial de economia da sua PME
          </h2>
          <p className="text-base sm:text-lg text-slate-500">
            Ajuste o simulador abaixo com o valor aproximado que sua empresa paga atualmente e veja quanta inteligência financeira podemos aplicar na sua operação.
          </p>
        </div>

        {/* Dynamic Calculator & Trust Stats Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-20">
          
          {/* Slider Widget Card (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xl flex flex-col justify-between text-left">
            <div className="space-y-6">
              
              {/* Header inside widget */}
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <h3 className="font-bold text-trygg-navy-900 text-lg">Simule seu Plano Empresarial</h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold bg-slate-50 px-2.5 py-1 rounded-full">
                  <Sparkles className="w-3.5 h-3.5 text-trygg-teal" />
                  <span>Cálculo Inteligente</span>
                </div>
              </div>

              {/* Slider Input */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label htmlFor="plan-cost-range" className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                    Gasto Mensal Atual
                  </label>
                  <p className="text-2xl font-black text-trygg-navy-900">
                    {formatCurrency(currentCost)}
                  </p>
                </div>
                
                <input
                  type="range"
                  id="plan-cost-range"
                  min="2000"
                  max="50000"
                  step="500"
                  value={currentCost}
                  onChange={(e) => setCurrentCost(Number(e.target.value))}
                  className="custom-range-slider w-full cursor-pointer"
                />
                
                <div className="flex justify-between text-xs font-semibold text-slate-400">
                  <span>R$ 2.000/mês</span>
                  <span>R$ 25.000/mês</span>
                  <span>R$ 50.000/mês</span>
                </div>
              </div>

              {/* Output Display Panel */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                
                {/* Cost Optimized Card */}
                <div className="bg-trygg-navy-900 text-white rounded-2xl p-5 border border-trygg-navy-800">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Custo Otimizado TRYGG</p>
                  <p className="text-2xl font-black text-white mt-1">
                    {formatCurrency(optimizedCost)}
                    <span className="text-sm text-slate-400 font-normal">/mês</span>
                  </p>
                  <span className="inline-block mt-2.5 bg-trygg-teal/20 border border-trygg-teal/30 text-trygg-teal text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Garantia de Cobertura
                  </span>
                </div>

                {/* Savings Estimated Card */}
                <div className="bg-trygg-teal-bg border border-trygg-teal/20 rounded-2xl p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] text-trygg-teal-dark uppercase tracking-wider font-bold">Economia Estimada</p>
                    <span className="text-[11px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">-28% Média</span>
                  </div>
                  <p className="text-2xl font-black text-trygg-teal-dark mt-1">
                    {formatCurrency(monthlySaving)}
                    <span className="text-sm text-slate-500 font-normal">/mês</span>
                  </p>
                  <p className="text-xs font-semibold text-emerald-600 mt-2">
                    {formatCurrency(annualSaving)} de economia ao ano
                  </p>
                </div>

              </div>

              {/* Equivalent Capital Real Value */}
              <div className="bg-[#F8FAFC] border border-slate-100 rounded-xl p-4 flex items-center gap-3">
                <div className="p-2 bg-emerald-100/60 rounded-xl text-emerald-600">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <p className="text-xs text-slate-500 text-left">
                  Esta redução mensal de <span className="font-bold text-trygg-navy-900">{formatCurrency(monthlySaving)}</span> equivale a eliminar custos desnecessários da sua folha de pagamento e liberar capital estratégico para reinvestir no seu negócio.
                </p>
              </div>

            </div>

            {/* CTA Trigger */}
            <div className="pt-6 border-t border-slate-100 mt-6 sm:mt-0">
              <button
                onClick={handleCtaClick}
                id="cta-calculator-whatsapp"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2.5"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.384 9.86-9.778.001-2.614-1.015-5.07-2.861-6.92C16.615 2.056 14.159 1.037 11.55 1.037 6.114 1.037 1.692 5.423 1.69 10.817c-.001 1.679.452 3.3 1.309 4.729L2.03 21.03l5.617-1.876zM17.67 14.87c-.29-.145-1.713-.846-1.977-.941-.264-.096-.456-.145-.648.145-.191.29-.741.94-.908 1.132-.167.19-.333.21-.623.067-.29-.145-1.226-.452-2.335-1.442-.864-.77-1.447-1.721-1.616-2.011-.17-.29-.018-.447.127-.592.13-.13.29-.339.435-.508.145-.17.19-.29.29-.483.096-.193.048-.362-.024-.508-.073-.145-.648-1.56-.888-2.138-.233-.56-.47-.482-.648-.492-.167-.008-.36-.01-.552-.01s-.504.072-.768.362c-.264.29-1.008.986-1.008 2.406 0 1.42 1.032 2.788 1.176 2.98.145.193 2.03 3.1 4.919 4.348.687.297 1.224.475 1.642.608.69.22 1.319.189 1.815.115.553-.083 1.714-.7 1.956-1.378.24-.678.24-1.258.17-1.378-.072-.12-.264-.193-.554-.339z" />
                </svg>
                <span>Solicitar Estudo de Economia Deste Valor</span>
              </button>
            </div>

          </div>

          {/* Trust Numbers & Statistics Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between text-left">
            
            {/* Stat Box 1 */}
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-md">
              <p className="text-[10px] font-bold tracking-wider text-trygg-teal uppercase">Experiência e Autoridade</p>
              <h4 className="text-3xl font-extrabold text-trygg-navy-900 mt-1">150+</h4>
              <p className="text-sm font-semibold text-slate-600 mt-0.5">Empresas Ajudadas</p>
              <p className="text-xs text-slate-400 mt-2">
                PMEs e corporações que confiaram sua gestão de benefícios às nossas soluções estratégicas.
              </p>
            </div>

            {/* Stat Box 2 */}
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-md">
              <p className="text-[10px] font-bold tracking-wider text-trygg-teal uppercase">Retorno Médio</p>
              <h4 className="text-3xl font-extrabold text-trygg-navy-900 mt-1">28,4%</h4>
              <p className="text-sm font-semibold text-slate-600 mt-0.5">Potencial Médio de Economia</p>
              <p className="text-xs text-slate-400 mt-2">
                Redução direta auditada sobre faturas anteriores de planos de saúde corporativos.
              </p>
            </div>

            {/* Stat Box 3 */}
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-md">
              <p className="text-[10px] font-bold tracking-wider text-trygg-teal uppercase">Velocidade no Atendimento</p>
              <h4 className="text-3xl font-extrabold text-trygg-navy-900 mt-1">98,7%</h4>
              <p className="text-sm font-semibold text-slate-600 mt-0.5">NPS / Satisfação de Clientes</p>
              <p className="text-xs text-slate-400 mt-2">
                Tempo médio de resposta abaixo de 10 minutos pelo gerente de contas dedicado.
              </p>
            </div>

          </div>

        </div>

        {/* Mini Testimonial slider / deck */}
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MessageSquare className="w-5 h-5 text-trygg-teal" />
            <h3 className="font-bold text-trygg-navy-900 uppercase tracking-wider text-sm">O que dizem os gestores</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {testimonials.map((test, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-md flex flex-col justify-between relative group hover:shadow-lg transition-all duration-300"
              >
                <span className="absolute top-6 right-6 text-slate-100 group-hover:text-trygg-teal/10 transition-colors">
                  <Quote className="w-10 h-10 fill-current" />
                </span>

                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current text-amber-500 stroke-none" />
                    ))}
                  </div>
                  
                  {/* Testimony comment */}
                  <p className="text-sm text-slate-500 italic leading-relaxed">
                    "{test.comment}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-100">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <h5 className="text-sm font-bold text-trygg-navy-900 leading-tight">{test.name}</h5>
                    <p className="text-[11px] font-semibold text-slate-400">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
