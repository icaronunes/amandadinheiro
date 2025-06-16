import type { LucideIcon } from 'lucide-react';

export interface LoanProduct {
  id: string;
  name: string;
  interestRate: string;
  term: string;
  eligibility: string;
  icon?: LucideIcon | string; // Allow string for flexibility if actual icon component is passed
  ctaLink?: string;
  ctaText?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  content: string; // Markdown or plain text
  imageUrl: string;
  date: string; // ISO string
  author: string;
  excerpt?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio?: string;
}
