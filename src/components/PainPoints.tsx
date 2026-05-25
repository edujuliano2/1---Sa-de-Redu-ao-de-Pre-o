import React from 'react';
import { AlertCircle, TrendingUp, HelpCircle, EyeOff, Coins, Compass } from 'lucide-react';

export const PainPoints: React.FC = () => {
  const painPoints = [
    {
      icon: <TrendingUp className="w-6 h-6 text-trygg-accent-red" />,
      title: 'Reajustes Anuais Abusivos',
      desc: 'Os planos de saúde PME sofrem aumentos frequentes que chegam a dobrar a inflação oficial, sufocando as margens financeiras da empresa.',
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-trygg-accent-red" />,
      title: 'Aumentos Imprevisíveis',
      desc: 'A surpresa na fatura no mês de aniversário do contrato dificulta o planejamento financeiro anual e desestabiliza o fluxo de caixa.',
    },
    {
      icon: <EyeOff className="w-6 h-6 text-trygg-accent-amber" />,
      title: 'Falta de Transparência',
      desc: 'Operadoras raramente abrem dados detalhados de sinistralidade, dificultando auditar se o aumento cobrado é justo e real.',
    },
    {
      icon: <Compass className="w-6 h-6 text-trygg-accent-amber" />,
      title: 'Dificuldade de Comparar',
      desc: 'O labirinto de cotações confusas, tabelas de carências e redes credenciadas distintas faz a comparação manual parecer impossível.',
    },
    {
      icon: <Coins className="w-6 h-6 text-trygg-accent-red" />,
      title: 'Desperdício Invisível',
      desc: 'Pagar por redes premium para colaboradores que não utilizam ou manter duplicidade de benefícios gera um vazamento financeiro silencioso.',
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-trygg-accent-amber" />,
      title: 'Sensação de Impotência',
      desc: 'Ficar preso a um corretor tradicional que apenas repassa a fatura de renovação sem buscar alternativas ativas no mercado.',
    },
  ];

  return (
    <section id="dores" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-red-50 text-trygg-accent-red border border-red-100 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            O Desafio da Saúde Corporativa
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-trygg-navy-900 tracking-tight">
            Os reajustes do seu plano estão sufocando sua empresa?
          </h2>
          <p className="text-base sm:text-lg text-slate-500">
            A maioria das PMEs brasileiras está pagando caro ou desperdiçando recursos por falta de uma análise financeira especializada e contínua do benefício.
          </p>
        </div>

        {/* Pain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {painPoints.map((pain, idx) => (
            <div
              key={idx}
              className="group p-6 sm:p-8 bg-[#F8FAFC] border border-slate-100 rounded-2xl transition-all duration-300 hover:bg-white hover:border-red-100 hover:shadow-xl hover:shadow-red-500/[0.02] text-left relative overflow-hidden"
            >
              {/* Top Accent Strip */}
              <span className="absolute top-0 left-0 w-full h-[3px] bg-transparent group-hover:bg-trygg-accent-red/20 transition-all duration-300"></span>
              
              {/* Icon */}
              <div className="mb-5 p-3 bg-white rounded-xl shadow-sm inline-block group-hover:scale-110 transition-transform duration-300">
                {pain.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-trygg-navy-900 mb-2.5 font-sans">
                {pain.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed">
                {pain.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Callout */}
        <div className="mt-16 bg-[#0B192C]/5 border border-[#0B192C]/10 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1 max-w-2xl">
            <h4 className="text-base sm:text-lg font-bold text-trygg-navy-900">
              Você sabia? A inflação médica cresce até 3x mais rápido que o IPCA.
            </h4>
            <p className="text-sm text-slate-500">
              Aceitar a primeira proposta de renovação da operadora significa deixar dinheiro na mesa. Uma análise ativa de parcerias com outras operadoras é a melhor defesa contra reajustes abusivos.
            </p>
          </div>
          <a
            href="#calculadora"
            className="flex-shrink-0 bg-trygg-navy-900 hover:bg-trygg-navy-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow transition-colors"
          >
            Simular Economia
          </a>
        </div>

      </div>
    </section>
  );
};
