import React from 'react';
import { ShieldCheck, Mail, Phone, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-trygg-navy-950 text-slate-400 py-12 sm:py-16 border-t border-trygg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top brand & contacts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-trygg-navy-900/60 text-left">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <span className="font-extrabold text-xl tracking-wider text-white font-sans flex items-center">
              TRYGG
              <span className="text-trygg-teal font-light">.</span>
            </span>
            <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
              Consultoria de planos de saúde focada em parcerias estratégicas com as melhores operadoras. Desenvolvendo soluções sob medida para PMEs.
            </p>
            <div className="flex items-center gap-1.5 text-trygg-teal bg-trygg-teal/5 border border-trygg-teal/10 px-2.5 py-1 rounded-md inline-block text-[11px] font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Conformidade ANS Garantida</span>
            </div>
          </div>

          {/* Column 2: Legal Links */}
          <div className="space-y-3.5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Políticas e Navegação</h4>
            <div className="flex flex-col gap-2.5 text-xs text-slate-500 font-medium">
              <a href="#dores" className="hover:text-white transition-colors">Desafios PMEs</a>
              <a href="#solucao" className="hover:text-white transition-colors">Nosso Método</a>
              <a href="#calculadora" className="hover:text-white transition-colors">Simulador de Custos</a>
              <a href="#comparativo" className="hover:text-white transition-colors">Matriz Comparativa</a>
            </div>
          </div>

          {/* Column 3: Contacts */}
          <div className="space-y-3.5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Contato Corporativo</h4>
            <div className="flex flex-col gap-3 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-trygg-teal" />
                <span>+55 (11) 96624-6634</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-trygg-teal" />
                <span>contato@trygg.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-trygg-teal" />
                <span>CNPJ: 00.000.000/0001-00</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & official disclaimer */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 text-left">
          
          {/* Institutional Compliance Notice */}
          <div className="space-y-1 max-w-3xl">
            <p className="text-[10px] text-slate-600 leading-relaxed font-sans">
              * A TRYGG Corretora de Seguros Ltda. é uma empresa devidamente cadastrada na Superintendência de Seguros Privados (SUSEP) sob o nº 26226765 e parceira autorizada das operadoras registradas na Agência Nacional de Saúde Suplementar (ANS). A simulação de economia de até 35% baseia-se na média histórica de nossos estudos analíticos e pode variar conforme a faixa etária, localização demográfica e regras contratuais ativas de sinistralidade de cada PME.
            </p>
            <p className="text-[10px] text-slate-600 leading-none">
              &copy; {currentYear} TRYGG. Todos os direitos reservados.
            </p>
          </div>

          {/* Small regulatory link */}
          <div className="flex-shrink-0 text-[10px] text-slate-500 font-semibold flex items-center gap-1 hover:text-white transition-colors">
            <span>Portal ANS</span>
            <ExternalLink className="w-3 h-3" />
          </div>

        </div>

      </div>
    </footer>
  );
};
