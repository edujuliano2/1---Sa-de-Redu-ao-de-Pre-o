import React from 'react';
import { X, Shield, Lock, CheckCircle2 } from 'lucide-react';

interface PrivacyModalProps {
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-trygg-navy-950/60 backdrop-blur-sm animate-fade-in">
      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col max-h-[85vh] animate-fade-in-up overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 sm:p-8 border-b border-slate-100 bg-[#F8FAFC]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-trygg-teal/10 rounded-xl text-trygg-teal">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-trygg-navy-900 text-lg sm:text-xl font-sans">
                Política de Privacidade e Proteção de Dados
              </h3>
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                Conformidade com a LGPD (Lei 13.709/2018)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-200/50 rounded-full text-slate-400 hover:text-trygg-navy-900 transition-colors focus:outline-none"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scrollable Area */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-left text-sm text-slate-500 leading-relaxed font-sans scrollbar-thin">
          
          <div className="bg-trygg-teal-bg border border-trygg-teal/10 p-4 rounded-2xl flex items-start gap-3">
            <Lock className="w-5 h-5 text-trygg-teal flex-shrink-0 mt-0.5" />
            <p className="text-xs text-trygg-teal-dark font-medium">
              Na <strong>TRYGG</strong>, privacidade e transparência são pilares fundamentais. Este documento explica detalhadamente como coletamos, protegemos e utilizamos as informações da sua empresa para fins de simulações e contratações de planos de saúde corporativos.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-trygg-navy-900 text-base flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-trygg-teal" />
              1. Informações que Coletamos
            </h4>
            <p>
              Ao utilizar nossos canais de simulação de economia e atendimento via WhatsApp, coletamos apenas os dados essenciais para formular propostas personalizadas, tais como:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs">
              <li><strong>Dados de contato corporativo</strong>: Nome do responsável, e-mail e telefone corporativo (WhatsApp).</li>
              <li><strong>Dados do perfil da empresa</strong>: Nome da empresa, CNPJ, quantidade de vidas (colaboradores/dependentes) e faixa etária aproximada.</li>
              <li><strong>Dados de planos existentes</strong>: Informações sobre o plano de saúde atual contratado, rede credenciada de interesse e histórico de reajustes (para fins de cálculo de economia e paridade).</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-trygg-navy-900 text-base flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-trygg-teal" />
              2. Finalidade do Tratamento
            </h4>
            <p>
              Os dados coletados são tratados estritamente no âmbito de procedimentos preliminares para prestação de serviços de consultoria de saúde corporativa. Suas informações são usadas para:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs">
              <li>Elaborar estudos de viabilidade financeira e tabelas comparativas customizadas de prêmios e coberturas de saúde.</li>
              <li>Entrar em contato via WhatsApp e e-mail para apresentar as propostas simuladas de planos corporativos.</li>
              <li>Identificar e sugerir parcerias e migrações seguras de portabilidade de carências junto às operadoras parceiras autorizadas.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-trygg-navy-900 text-base flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-trygg-teal" />
              3. Compartilhamento de Dados com Operadoras
            </h4>
            <p>
              Para a obtenção de cotações oficiais e paridades de carência, as informações estatísticas consolidadas (quantidade de vidas e faixa etária corporativa) são compartilhadas estritamente com as principais operadoras parceiras do mercado de planos de saúde de interesse da sua empresa (ex.: Bradesco Saúde, SulAmérica, Amil, Porto Seguro, etc.).
            </p>
            <p className="text-xs">
              * Nenhum dado pessoal sensível de colaboradores é repassado a terceiros para fins comerciais não relacionados ao estudo de contratação de saúde suplementar solicitado.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-trygg-navy-900 text-base flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-trygg-teal" />
              4. Segurança e Retenção
            </h4>
            <p>
              Adotamos práticas e padrões modernos de segurança digital para resguardar a integridade das suas cotações e informações de contato de acessos não autorizados. Os dados são mantidos em nossos sistemas apenas durante o período necessário para prestar a assessoria de contratação e portabilidade ou para cumprimento de obrigações legais de regulação de seguros.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-trygg-navy-900 text-base flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-trygg-teal" />
              5. Seus Direitos (LGPD)
            </h4>
            <p>
              Nos termos da Lei Geral de Proteção de Dados (LGPD), você e seus colaboradores possuem direitos assegurados sobre suas informações pessoais, incluindo:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs">
              <li>Confirmar a existência de tratamento e acessar os dados.</li>
              <li>Solicitar a correção de dados incompletos, inexatos ou desatualizados.</li>
              <li>Requerer a eliminação de dados tratados com base em consentimento prévio.</li>
              <li>Revogar o consentimento a qualquer momento para recebimento de novas propostas.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-trygg-navy-900 text-base flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-trygg-teal" />
              6. Informações de Contato
            </h4>
            <p>
              Para esclarecer dúvidas sobre esta Política de Privacidade ou solicitar a exclusão/correção de seus dados cadastrais, entre em contato diretamente com nossa central de atendimento:
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs text-slate-500 space-y-1">
              <p><strong>Controlador de Dados</strong>: TRYGG Corretora de Seguros Ltda.</p>
              <p><strong>CNPJ</strong>: 52.393.423/0001-12</p>
              <p><strong>E-mail de Privacidade</strong>: contato@trygg.com.br</p>
              <p><strong>Canal de Encarregado (DPO)</strong>: +55 (11) 96624-6634</p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-slate-100 flex justify-end bg-[#F8FAFC]">
          <button
            onClick={onClose}
            className="bg-trygg-navy-900 hover:bg-trygg-navy-800 text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-all duration-200 transform active:scale-95 shadow-sm hover:shadow"
          >
            Entendido, fechar
          </button>
        </div>

      </div>
    </div>
  );
};
