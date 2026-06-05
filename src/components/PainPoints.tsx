import React from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const PainPoints: React.FC = () => {
  const faqs = [
    {
      question: 'A cotação é gratuita?',
      answer: 'Sim. A solicitação e a análise inicial são gratuitas para a empresa.',
    },
    {
      question: 'Minha empresa ainda não possui plano. Posso cotar?',
      answer: 'Pode sim. O formulário foi pensado para empresas com e sem plano ativo.',
    },
    {
      question: 'Qual a quantidade mínima de vidas?',
      answer: 'A quantidade mínima pode variar conforme a operadora e a região, então a cotação ajuda a direcionar o melhor cenário.',
    },
    {
      question: 'Posso manter a mesma operadora?',
      answer: 'Em muitos casos, sim. A análise considera a viabilidade de manter ou trocar de operadora.',
    },
    {
      question: 'Quanto tempo leva para receber a análise?',
      answer: 'O retorno costuma ser rápido, com prioridade para contato via WhatsApp.',
    },
    {
      question: 'Como funciona a comparação?',
      answer: 'Com a composição etária e as informações da empresa, é possível comparar cenários de forma objetiva.',
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left space-y-3 mb-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-trygg-teal">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-trygg-navy-900">
            Perguntas frequentes sobre a cotação
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Respostas diretas para reduzir objeções e acelerar o clique no WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[22px] border border-slate-200 bg-[linear-gradient(180deg,_#FFFFFF_0%,_#F8FAFC_100%)] p-5 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <div className="flex items-start gap-3 text-left">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-trygg-teal/10 text-trygg-teal">
                    <HelpCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-trygg-navy-900">{faq.question}</h3>
                    <p className="mt-1 text-sm text-slate-500">Clique para abrir a resposta</p>
                  </div>
                </div>
                <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
