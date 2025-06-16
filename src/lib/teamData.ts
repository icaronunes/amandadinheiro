import type { TeamMember } from './types';

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Amanda Silva',
    role: 'CEO & Fundadora',
    imageUrl: 'https://placehold.co/300x300.png',
    bio: 'Apaixonada por finanças e ajudar pessoas a alcançarem seus sonhos. Com mais de 10 anos de experiência no mercado financeiro.',
  },
  {
    id: '2',
    name: 'Carlos Pereira',
    role: 'Consultor Financeiro Sênior',
    imageUrl: 'https://placehold.co/300x300.png',
    bio: 'Especialista em crédito e investimentos, Carlos auxilia nossos clientes a tomar as melhores decisões financeiras.',
  },
  {
    id: '3',
    name: 'Beatriz Costa',
    role: 'Gerente de Atendimento',
    imageUrl: 'https://placehold.co/300x300.png',
    bio: 'Beatriz garante que cada cliente receba um atendimento personalizado e de alta qualidade.',
  },
];

export async function getTeamMembers(): Promise<TeamMember[]> {
  return teamMembers;
}
