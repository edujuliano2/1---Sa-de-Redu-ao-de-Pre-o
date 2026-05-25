import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { Benefits } from './components/Benefits';
import { SocialProof } from './components/SocialProof';
import { Comparison } from './components/Comparison';
import { CTAFinal } from './components/CTAFinal';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

const WHATSAPP_PHONE = '5511966246634';
const DEFAULT_GREETING = 'Olá TRYGG! Gostaria de receber uma análise gratuita de custos do plano de saúde da minha empresa.';

function App() {
  const triggerWhatsApp = (customText?: string) => {
    const textToUse = customText || DEFAULT_GREETING;
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(textToUse)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleScrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculadora');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans relative antialiased selection:bg-trygg-teal selection:text-white">
      {/* Sticky Header with Glassmorphism */}
      <Header onCtaClick={handleScrollToCalculator} />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onPrimaryCtaClick={() => triggerWhatsApp()}
          onSecondaryCtaClick={handleScrollToCalculator}
        />

        {/* Pain Points Section */}
        <PainPoints />

        {/* Solution Section */}
        <Solution />

        {/* Benefits Section */}
        <Benefits />

        {/* Interactive Savings Simulator & Trust Proof */}
        <SocialProof onWhatsAppClick={(savingText) => triggerWhatsApp(savingText)} />

        {/* Strategic Comparison Matrix Table */}
        <Comparison />

        {/* Conversion CTA Final Section */}
        <CTAFinal onCtaClick={() => triggerWhatsApp()} />
      </main>

      {/* Footer block */}
      <Footer />

      {/* Persistent Floating WhatsApp Trigger */}
      <FloatingWhatsApp phoneNumber={WHATSAPP_PHONE} message={DEFAULT_GREETING} />
    </div>
  );
}

export default App;
