import type { LoanProduct } from './types';
import { Users, Landmark, Car, TrendingUp, ShieldCheck, Percent } from 'lucide-react';

export const loanProducts: LoanProduct[] = [
  {
    id: '1',
    name: 'Empréstimo Pessoal Rápido',
    interestRate: 'A partir de 1.5% a.m.',
    term: '6-36 meses',
    eligibility: 'Bom histórico de crédito, renda comprovada.',
    icon: Users,
    ctaLink: '#contact',
    ctaText: 'Solicitar Agora',
  },
  {
    id: '2',
    name: 'Crédito Consignado Público',
    interestRate: 'A partir de 0.99% a.m.',
    term: 'Até 96 meses',
    eligibility: 'Servidores públicos, aposentados e pensionistas.',
    icon: Landmark,
    ctaLink: '#contact',
    ctaText: 'Saiba Mais',
  },
  {
    id: '3',
    name: 'Financiamento de Veículos',
    interestRate: 'Taxas competitivas',
    term: 'Até 60 meses',
    eligibility: 'Sujeito à análise de crédito.',
    icon: Car,
    ctaLink: '#contact',
    ctaText: 'Ver Opções',
  },
  {
    id: '4',
    name: 'Capital de Giro para Empresas',
    interestRate: 'Condições especiais',
    term: 'Flexível',
    eligibility: 'Para MEI e pequenas empresas.',
    icon: TrendingUp,
    ctaLink: '#contact',
    ctaText: 'Consultar',
  },
];

export async function getLoanProducts(): Promise<LoanProduct[]> {
  // Simulate API delay if needed
  // await new Promise(resolve => setTimeout(resolve, 100));
  return loanProducts;
}
