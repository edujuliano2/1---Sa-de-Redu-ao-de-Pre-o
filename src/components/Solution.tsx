import React from 'react';
import { BarChart3, TrendingDown, Sparkles } from 'lucide-react';

export const Solution: React.FC = () => {
  const bars = [
    { label: '8%', width: 'w-[22%]', tone: 'bg-slate-300' },
    { label: '17%', width: 'w-[45%]', tone: 'bg-slate-400' },
    { label: '26%', width: 'w-[70%]', tone: 'bg-trygg-teal' },
    { label: '37%', width: 'w-[100%]', tone: 'bg-trygg-navy-900' },
  ];

  return (
    <section id="economia" className="py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_#FFFFFF_0%,_#F8FAFC_100%)] pointer-events-none"></div>
      <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-trygg-teal/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          <div className="lg:col-span-5 rounded-[28px] border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_18px_55px_rgba(15,23,42,0.08)] text-left">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-trygg-teal">Seção de economia</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-trygg-navy-900">
              QUANTO SUA EMPRESA PODE ECONOMIZAR?
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
              Empresas que revisam seus contratos frequentemente encontram oportunidades de redução entre <span className="font-bold text-trygg-navy-900">8% e 37%</span>.
            </p>

            <div className="mt-6 rounded-[24px] bg-[linear-gradient(180deg,_#0B192C_0%,_#132B4A_100%)] p-5 text-white shadow-2xl">
              <div className="flex items-center gap-2 text-trygg-teal">
                <Sparkles className="h-4 w-4" />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]">Impacto potencial</span>
              </div>
              <div className="mt-4 flex items-end gap-3">
                <p className="text-5xl font-black tracking-tight">37%</p>
                <p className="pb-1 text-sm text-slate-300">faixa de economia observada em revisões bem estruturadas</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-[28px] border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_18px_55px_rgba(15,23,42,0.08)] text-left">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400">Gráfico moderno</p>
                <h3 className="mt-1 text-2xl font-black tracking-tight text-trygg-navy-900">
                  Comparativo visual de potencial de redução
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-trygg-teal/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-trygg-teal">
                <BarChart3 className="h-4 w-4" />
                Corporativo
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {bars.map((bar) => (
                <div key={bar.label} className="space-y-2">
                  <div className="flex items-center justify-between text-sm font-semibold text-slate-500">
                    <span>Redução potencial</span>
                    <span>{bar.label}</span>
                  </div>
                  <div className="h-4 rounded-full bg-slate-100 p-1">
                    <div className={`h-full rounded-full ${bar.width} ${bar.tone} transition-all duration-700`} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                ['Reajustes sob controle', 'Leitura mais clara da renovação'],
                ['Troca com segurança', 'Cenários comparados com objetividade'],
                ['Decisão mais rápida', 'Cotação enviada no WhatsApp'],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-bold text-trygg-navy-900">{title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-trygg-teal/15 bg-trygg-teal/5 p-4">
              <div className="flex items-start gap-3">
                <TrendingDown className="mt-0.5 h-5 w-5 shrink-0 text-trygg-teal" />
                <p className="text-sm leading-relaxed text-slate-700">
                  A leitura visual ajuda o usuário a entender o valor da cotação antes mesmo de enviar os dados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
