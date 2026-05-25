import React from 'react';
import { PiggyBank, BarChart, Headset, Landmark } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <PiggyBank className="w-8 h-8 text-trygg-teal" />,
      title: 'Economia Inteligente',
      tagline: 'Gestão de Custos Ativa',
      desc: 'Reduza de forma expressiva o custo fixo mensal da folha de benefícios sem comprometer a qualidade ou abrangência dos hospitais parceiros.',
    },
    {
      icon: <BarChart className="w-8 h-8 text-trygg-teal" />,
      title: 'Comparação Estratégica',
      tagline: 'Independência Consultiva',
      desc: 'Analisamos todas as principais operadoras de forma isenta, mostrando prós, contras, histórico de reajustes e redes credenciadas reais.',
    },
    {
      icon: <Headset className="w-8 h-8 text-trygg-teal" />,
      title: 'Atendimento Especializado',
      tagline: 'Suporte VIP Descomplicado',
      desc: 'Sua empresa terá um gerente de contas dedicado. Chega de lidar com robôs do 0800 para resolver reembolsos, inclusões ou sinistros.',
    },
    {
      icon: <Landmark className="w-8 h-8 text-trygg-teal" />,
      title: 'Foco Total em PMEs',
      tagline: 'Expertise no Seu Segmento',
      desc: 'Conhecemos as regras e tabelas especiais de contratação para empresas de 2 a 99 vidas, garantindo condições antes exclusivas a multinacionais.',
    },
  ];

  return (
    <section id="beneficios" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 bg-trygg-navy-900/5 text-trygg-navy-800 border border-trygg-navy-950/10 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Nossos Diferenciais
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-trygg-navy-900 tracking-tight">
            A inteligência financeira aplicada à saúde corporativa
          </h2>
          <p className="text-base sm:text-lg text-slate-500">
            Oferecemos parcerias diretas com operadoras que alinham redução real de caixa com a máxima segurança jurídica e técnica para o RH da sua PME.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="group p-6 sm:p-8 bg-[#F8FAFC] border border-slate-100 rounded-2xl transition-all duration-300 hover:bg-white hover:border-trygg-teal/20 hover:shadow-xl hover:shadow-trygg-teal/[0.02] text-left relative"
            >
              {/* Left Accent Bar on Hover */}
              <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-transparent group-hover:bg-trygg-teal rounded-l-2xl transition-all duration-300"></span>

              {/* Icon */}
              <div className="mb-6 p-3 bg-white rounded-xl shadow-sm inline-block group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>

              {/* Tagline */}
              <p className="text-[10px] font-bold text-trygg-teal tracking-wider uppercase mb-1">
                {benefit.tagline}
              </p>

              {/* Title */}
              <h3 className="text-lg font-bold text-trygg-navy-900 mb-3 font-sans">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
