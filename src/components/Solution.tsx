import React from 'react';
import { Search, Scale, BarChart3, ShieldCheck, HeartHandshake, UserCheck } from 'lucide-react';

export const Solution: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: <Search className="w-5 h-5 text-trygg-teal" />,
      title: 'Mapeamento de Necessidades',
      desc: 'Mapeamento das necessidades da sua empresa, perfil de idade dos colaboradores e rede de hospitais essenciais para alinhar com as melhores operadoras.',
    },
    {
      number: '02',
      icon: <Scale className="w-5 h-5 text-trygg-teal" />,
      title: 'Comparação Multiórgão',
      desc: 'Cruzamos dados com as maiores operadoras do país para encontrar paridade técnica de rede, carências e coberturas com custos significativamente menores.',
    },
    {
      number: '03',
      icon: <BarChart3 className="w-5 h-5 text-trygg-teal" />,
      title: 'Estudo de Redução de Custos',
      desc: 'Apresentamos cenários inteligentes (com ou sem coparticipação otimizada) detalhando a economia exata e o ROI da migração contratual.',
    },
    {
      number: '04',
      icon: <ShieldCheck className="w-5 h-5 text-trygg-teal" />,
      title: 'Migração Sem Atrito',
      desc: 'Cuidamos de toda a burocracia de cancelamento, portabilidade de carências e implantação do novo plano de forma segura, sem deixar ninguém descoberto.',
    },
    {
      number: '05',
      icon: <HeartHandshake className="w-5 h-5 text-trygg-teal" />,
      title: 'Suporte Pós-Venda Ativo',
      desc: 'Não desaparecemos após a assinatura. Nossa equipe especializada cuida do suporte operacional, reembolsos complexos e movimentação cadastral.',
    },
    {
      number: '06',
      icon: <UserCheck className="w-5 h-5 text-trygg-teal" />,
      title: 'Gestão de Reajustes no Futuro',
      desc: 'Monitoramos preventivamente o uso do plano ao longo do ano para negociar e mitigar aumentos futuros de forma estritamente técnica com a operadora.',
    },
  ];

  return (
    <section id="solucao" className="py-20 sm:py-28 bg-[#F8FAFC] relative">
      {/* Background visual detail */}
      <div className="absolute inset-0 bg-grid-dots-dark opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-trygg-teal/10 text-trygg-teal border border-trygg-teal/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Inteligência em Ação
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-trygg-navy-900 tracking-tight">
            Como a TRYGG ajuda sua empresa a economizar
          </h2>
          <p className="text-base sm:text-lg text-slate-500">
            Muito além de uma simples cotação. Nosso método combina análise técnica das operadoras, poder de negociação de mercado e parcerias estratégicas para o melhor custo-benefício.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 text-left relative group"
            >
              {/* Corner Number Badge */}
              <span className="absolute top-4 right-6 text-2xl font-black text-slate-100 group-hover:text-trygg-teal/15 transition-colors duration-300">
                {step.number}
              </span>

              {/* Icon Container */}
              <div className="mb-6 w-10 h-10 bg-trygg-teal/10 rounded-xl flex items-center justify-center group-hover:bg-trygg-teal group-hover:text-white transition-all duration-300">
                {React.cloneElement(step.icon, {
                  className: `w-5 h-5 text-trygg-teal group-hover:text-white transition-all duration-300`,
                })}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-trygg-navy-900 mb-2.5 font-sans">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
