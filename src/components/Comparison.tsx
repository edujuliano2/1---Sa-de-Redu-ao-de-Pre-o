import React from 'react';
import { ChevronDown, Users } from 'lucide-react';
import type { AgeBandKey, QuoteFormState } from '../types';

interface ComparisonProps {
  quoteForm: Pick<QuoteFormState, 'ages'>;
  totalAgeLives: number;
  onAgeChange: (key: AgeBandKey, value: string) => void;
}

const AGE_BANDS: Array<{ key: AgeBandKey; label: string; hint: string }> = [
  { key: 'age_00_18', label: '00 a 18 anos', hint: 'Dependentes e jovens colaboradores' },
  { key: 'age_19_28', label: '19 a 28 anos', hint: 'Faixa adulta jovem' },
  { key: 'age_29_38', label: '29 a 38 anos', hint: 'Fase de consolidação profissional' },
  { key: 'age_39_48', label: '39 a 48 anos', hint: 'Faixa que impacta o cálculo técnico' },
  { key: 'age_49_53', label: '49 a 53 anos', hint: 'Importante para paridade de propostas' },
  { key: 'age_54_58', label: '54 a 58 anos', hint: 'Indicador sensível de precificação' },
  { key: 'age_59_plus', label: '59 anos ou mais', hint: 'Faixa estratégica para a análise' },
];

export const Comparison: React.FC<ComparisonProps> = ({
  quoteForm,
  totalAgeLives,
  onAgeChange,
}) => {
  return (
    <section id="composicao-etaria" className="py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_#FFFFFF_0%,_#F8FAFC_100%)] pointer-events-none"></div>
      <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-trygg-teal/8 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl rounded-[28px] border border-slate-200/80 bg-white/90 p-5 sm:p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
          <details className="group" open={false}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[22px] bg-[linear-gradient(135deg,_#0B192C_0%,_#132B4A_100%)] px-5 py-4 text-white shadow-lg shadow-slate-900/10">
              <div className="text-left">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-trygg-teal">CONSULTAR COMPOSIÇÃO ETÁRIA</p>
                <h2 className="mt-1 text-xl sm:text-2xl font-black tracking-tight">Distribua as vidas por faixa etária</h2>
                <p className="mt-1 text-sm text-slate-300">
                  Utilize esta tabela apenas como referência. A análise completa considera diversos fatores além da idade.
                </p>
              </div>
              <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180" />
            </summary>

            <div className="mt-5 space-y-4 rounded-[22px] border border-slate-200 bg-slate-50/80 p-4 sm:p-5">
              <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-trygg-teal/15 bg-white px-4 py-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-trygg-teal/10 text-trygg-teal">
                  <Users className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-trygg-navy-900">Total de vidas informadas: {totalAgeLives || '0'}</p>
                  <p className="text-xs text-slate-500">A soma é calculada automaticamente pela composição.</p>
                </div>
                <div className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                  Total: {totalAgeLives}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {AGE_BANDS.map((band) => {
                  const value = quoteForm.ages[band.key] || '';
                  return (
                    <div
                      key={band.key}
                      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-sm font-bold text-trygg-navy-900">{band.label}</p>
                          <p className="text-xs text-slate-500">{band.hint}</p>
                        </div>
                        <span className="rounded-full bg-trygg-teal/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-trygg-teal">
                          Vidas
                        </span>
                      </div>
                      <input
                        type="number"
                        min="0"
                        inputMode="numeric"
                        value={value}
                        onChange={(e) => onAgeChange(band.key, e.target.value)}
                        className="mt-4 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-lg font-black text-trygg-navy-900 outline-none transition focus:border-trygg-teal focus:bg-white"
                        placeholder="0"
                      />
                    </div>
                  );
                })}
              </div>

              <p className="text-xs text-slate-500">
                Se a empresa já tiver plano, a operadora atual e o perfil etário ajudam a refinar a cotação e identificar oportunidades reais de economia.
              </p>
            </div>
          </details>

          <div className="mt-4 flex items-center justify-between rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-3 text-left">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">Atalho mobile</p>
              <p className="text-sm font-semibold text-trygg-navy-900">Abra a composição etária quando precisar detalhar a cotação.</p>
            </div>
            <ChevronDown className="h-4 w-4 text-slate-400" />
          </div>
        </div>
      </div>
    </section>
  );
};
