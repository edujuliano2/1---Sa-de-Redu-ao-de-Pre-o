import { useEffect, useMemo, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { Benefits } from './components/Benefits';
import { SocialProof } from './components/SocialProof';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PrivacyModal } from './components/PrivacyModal';
import type { AgeBandKey, QuoteFormState } from './types';

const WHATSAPP_PHONE = '5511966246634';
const DEFAULT_GREETING = 'Olá TRYGG! Gostaria de receber uma cotação gratuita para o plano de saúde da minha empresa.';

const AGE_BANDS = [
  { key: 'age_00_18', label: '00 a 18 anos' },
  { key: 'age_19_28', label: '19 a 28 anos' },
  { key: 'age_29_38', label: '29 a 38 anos' },
  { key: 'age_39_48', label: '39 a 48 anos' },
  { key: 'age_49_53', label: '49 a 53 anos' },
  { key: 'age_54_58', label: '54 a 58 anos' },
  { key: 'age_59_plus', label: '59 anos ou mais' },
] as const;

const AGE_MESSAGE_LABELS: Record<AgeBandKey, string> = {
  age_00_18: '00-18',
  age_19_28: '19-28',
  age_29_38: '29-38',
  age_39_48: '39-48',
  age_49_53: '49-53',
  age_54_58: '54-58',
  age_59_plus: '59+',
};

const EMPTY_AGES = AGE_BANDS.reduce((acc, band) => {
  acc[band.key] = '';
  return acc;
}, {} as Record<AgeBandKey, string>);

function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [quoteForm, setQuoteForm] = useState<QuoteFormState>({
    hasPlan: '',
    operator: '',
    ages: EMPTY_AGES,
  });

  const totalAgeLives = useMemo(() => {
    return AGE_BANDS.reduce((sum, band) => sum + (Number(quoteForm.ages[band.key]) || 0), 0);
  }, [quoteForm.ages]);

  const composeWhatsappMessage = () => {
    const planStatus = quoteForm.hasPlan === 'sim' ? 'SIM' : quoteForm.hasPlan === 'nao' ? 'NÃO' : 'Não informado';
    const operator =
      quoteForm.hasPlan === 'sim'
        ? quoteForm.operator || 'Não informada'
        : quoteForm.hasPlan === 'nao'
          ? 'Não possui plano'
          : 'Não informado';

    const agesText = AGE_BANDS.map((band) => {
      const value = Number(quoteForm.ages[band.key]) || 0;
      return `${AGE_MESSAGE_LABELS[band.key]}: ${value}`;
    }).join('\n');

    return [
      'Olá TRYGG!',
      '',
      `Empresa possui plano: ${planStatus}`,
      `Operadora atual: ${operator}`,
      `Quantidade total de vidas: ${totalAgeLives}`,
      '',
      'Composição etária:',
      agesText,
      '',
      'Gostaria de receber uma cotação para minha empresa.',
    ].join('\n');
  };

  const triggerWhatsApp = (customText?: string) => {
    const textToUse = customText || DEFAULT_GREETING;
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(textToUse)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleScrollToAgeTable = () => {
    const ageTableSection = document.getElementById('hero-age-form');
    if (ageTableSection) {
      ageTableSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePrimaryCtaClick = () => {
    triggerWhatsApp(composeWhatsappMessage());
  };

  const updateQuoteForm = <K extends keyof QuoteFormState>(field: K, value: QuoteFormState[K]) => {
    setQuoteForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  // Prevent scroll when Privacy Modal is active
  useEffect(() => {
    if (isPrivacyOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isPrivacyOpen]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans relative antialiased selection:bg-trygg-teal selection:text-white">
      <Header onCtaClick={handleScrollToAgeTable} />

      <main className="flex-grow">
        <Hero
          quoteForm={quoteForm}
          onFormUpdate={updateQuoteForm}
          onAgeChange={(key, value) =>
            setQuoteForm((current) => ({
              ...current,
              ages: {
                ...current.ages,
                [key]: value,
              },
            }))
          }
          onPrimaryCtaClick={handlePrimaryCtaClick}
          totalAgeLives={totalAgeLives}
        />

        <SocialProof />

        <Benefits />

        <Solution />

        <PainPoints />
      </main>

      <Footer onPrivacyClick={() => setIsPrivacyOpen(true)} />

      <FloatingWhatsApp phoneNumber={WHATSAPP_PHONE} message={composeWhatsappMessage()} />

      {isPrivacyOpen && <PrivacyModal onClose={() => setIsPrivacyOpen(false)} />}
    </div>
  );
}

export default App;
