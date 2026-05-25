import React, { useState, useEffect } from 'react';
import { Shield, Sparkles } from 'lucide-react';

interface HeaderProps {
  onCtaClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-slate-100 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Info */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2">
              <span className="font-extrabold text-2xl tracking-wider text-trygg-navy-900 font-sans flex items-center">
                TRYGG
                <span className="text-trygg-teal font-light">.</span>
              </span>
            </a>
            <div className="hidden md:flex items-center gap-1.5 border-l border-slate-200 pl-3">
              <Shield className="w-3.5 h-3.5 text-trygg-teal" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Gestão de Planos de Saúde
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#dores" className="text-sm font-medium text-slate-500 hover:text-trygg-navy-900 transition-colors">
              Desafios
            </a>
            <a href="#solucao" className="text-sm font-medium text-slate-500 hover:text-trygg-navy-900 transition-colors">
              Solução
            </a>
            <a href="#beneficios" className="text-sm font-medium text-slate-500 hover:text-trygg-navy-900 transition-colors">
              Diferenciais
            </a>
            <a href="#calculadora" className="text-sm font-medium text-slate-500 hover:text-trygg-navy-900 transition-colors">
              Simulador de Economia
            </a>
            <a href="#comparativo" className="text-sm font-medium text-slate-500 hover:text-trygg-navy-900 transition-colors">
              Comparação
            </a>
          </nav>

          {/* Header Action CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={onCtaClick}
              id="header-cta-analysis"
              className="inline-flex items-center gap-1.5 bg-trygg-navy-900 hover:bg-trygg-navy-800 text-white text-xs sm:text-sm font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg transition-all duration-200 transform active:scale-95 shadow-sm hover:shadow-trygg-navy-900/10 hover:shadow"
            >
              <Sparkles className="w-3.5 h-3.5 text-trygg-teal" />
              <span>Estudo de Planos</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
