import React from 'react';
import { X, Check } from 'lucide-react';

export const Comparison: React.FC = () => {
  const comparisonData = [
    {
      feature: 'Gestão de Reajustes Anuais',
      standard: 'Apenas repassa o índice cobrado pela operadora sem auditar.',
      trygg: 'Análise técnica de mercado ativa para contestar e mitigar aumentos baseada no perfil da sua empresa.',
      highlight: true,
    },
    {
      feature: 'Modelo de Atendimento',
      standard: 'Redireciona para o SAC/0800 impessoal das próprias operadoras.',
      trygg: 'Gerente de contas exclusivo e dedicado para apoiar o RH e colaboradores.',
      highlight: false,
    },
    {
      feature: 'Paridade de Rede Credenciada',
      standard: 'Oferece pacotes genéricos sem analisar os hospitais vitais dos sócios.',
      trygg: 'Estudo sob medida para garantir que hospitais e médicos de confiança permaneçam.',
      highlight: false,
    },
    {
      feature: 'Estudo de Redução de Custos',
      standard: 'Feito apenas na contratação inicial, ignorando o pós-venda.',
      trygg: 'Análise financeira contínua e modelagem de coparticipação otimizada.',
      highlight: true,
    },
    {
      feature: 'Suporte a Reembolsos e Sinistros',
      standard: 'Burocrático, lento e repassado inteiramente para o próprio RH resolver.',
      trygg: 'Intermediação jurídica e técnica para destravar reembolsos e cirurgias complexas.',
      highlight: false,
    },
  ];

  return (
    <section id="comparativo" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-trygg-navy-900/5 text-trygg-navy-800 border border-trygg-navy-950/10 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Visão Comparativa
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-trygg-navy-900 tracking-tight">
            A diferença entre corretagem comum e a parceria com a TRYGG
          </h2>
          <p className="text-base sm:text-lg text-slate-500">
            A TRYGG não é uma corretora que apenas vende planos. Somos seus parceiros estratégicos em gestão de riscos e otimização financeira contínua.
          </p>
        </div>

        {/* Comparison Grid Table */}
        <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-xl">
          <table className="w-full min-w-[768px] text-left border-collapse bg-white">
            <thead>
              <tr className="bg-trygg-navy-900 text-white">
                <th className="py-5 px-6 sm:px-8 font-sans font-bold text-sm uppercase tracking-wider w-[28%]">
                  Critério de Gestão
                </th>
                <th className="py-5 px-6 sm:px-8 font-sans font-bold text-sm uppercase tracking-wider bg-slate-800 w-[36%]">
                  Corretagem Tradicional
                </th>
                <th className="py-5 px-6 sm:px-8 font-sans font-bold text-sm uppercase tracking-wider bg-trygg-navy-900 border-l border-trygg-navy-800 w-[36%] relative">
                  <div className="flex items-center gap-2">
                    <span>Modelo de Parceria TRYGG</span>
                    <span className="text-[9px] bg-trygg-teal text-white font-extrabold px-2 py-0.5 rounded-full uppercase tracking-widest leading-none">
                      Recomendado
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisonData.map((row, idx) => (
                <tr
                  key={idx}
                  className={`transition-colors duration-200 ${
                    row.highlight ? 'bg-trygg-teal-bg/30' : 'hover:bg-slate-50'
                  }`}
                >
                  {/* Feature Title */}
                  <td className="py-5 px-6 sm:px-8 font-bold text-trygg-navy-900 text-sm sm:text-base">
                    {row.feature}
                  </td>
                  
                  {/* Standard Broker */}
                  <td className="py-5 px-6 sm:px-8 text-slate-400 text-xs sm:text-sm bg-slate-50/50">
                    <div className="flex items-start gap-2.5">
                      <X className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                      <span>{row.standard}</span>
                    </div>
                  </td>
                  
                  {/* TRYGG model */}
                  <td className="py-5 px-6 sm:px-8 text-trygg-navy-900 font-medium text-xs sm:text-sm border-l border-slate-100 bg-white relative">
                    {/* Visual left colored border if highlighted */}
                    {row.highlight && (
                      <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-trygg-teal"></span>
                    )}
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-trygg-teal mt-0.5 flex-shrink-0" />
                      <span className="font-semibold text-slate-700">{row.trygg}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Perfect Equilibrium Callout */}
        <div className="mt-12 text-center max-w-2xl mx-auto space-y-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Equilíbrio Estratégico
          </p>
          <p className="text-sm text-slate-500 leading-relaxed">
            Nossa missão é encontrar o ponto ideal entre <span className="font-bold text-trygg-navy-900">Preço Otimizado</span>, <span className="font-bold text-trygg-navy-900">Qualidade de Cobertura</span> e <span className="font-bold text-trygg-navy-900">Rede Credenciada Essencial</span>, operando sob pilares financeiros de alto impacto corporativo.
          </p>
        </div>

      </div>
    </section>
  );
};
