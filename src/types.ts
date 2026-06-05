export type AgeBandKey =
  | 'age_00_18'
  | 'age_19_28'
  | 'age_29_38'
  | 'age_39_48'
  | 'age_49_53'
  | 'age_54_58'
  | 'age_59_plus';

export type QuoteFormState = {
  hasPlan: '' | 'sim' | 'nao';
  operator: string;
  ages: Record<AgeBandKey, string>;
};
