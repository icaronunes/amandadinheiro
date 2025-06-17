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
    name: 'Faculdade',
    role: 'Na POLI',
    imageUrl: 'https://placehold.co/300x300.png',
    bio: 'Formada em 2010 na turma de Engenharia de Produção da POLI, com especialização em Finanças.',
  },
  {
    id: '3',
    name: 'Trabalhos Anteriores',
    role: '10 anos de experiência',
    imageUrl: 'https://placehold.co/300x300.png',
    bio: 'Trabalhei muitos anos para a Tia  Leila na Crefisa. Sai pos ela me explorava.',
  },
];

export async function getTeamMembers(): Promise<TeamMember[]> {
  return teamMembers;
}
