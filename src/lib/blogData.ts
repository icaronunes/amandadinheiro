import type { BlogPost } from './types';

// In-memory store for blog posts
let posts: BlogPost[] = [
  {
    slug: 'planejamento-financeiro-101',
    title: 'Planejamento Financeiro 101: Guia para Iniciantes',
    content: 'Aprenda o básico do planejamento financeiro para garantir seu futuro. Este guia cobre orçamento, poupança e investimento para iniciantes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imageUrl: 'https://placehold.co/600x400.png',
    date: new Date('2024-05-10').toISOString(),
    author: 'Equipe Amanda Dinheiro',
    excerpt: 'Aprenda o básico do planejamento financeiro para garantir seu futuro.',
  },
  {
    slug: 'entendendo-termos-de-emprestimo',
    title: 'Entendendo os Termos do Empréstimo Antes de Contratar',
    content: 'Desmistificando termos comuns de empréstimos como CET, taxas de juros e períodos de carência. Saiba o que você está assinando! Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl: 'https://placehold.co/600x400.png',
    date: new Date('2024-04-22').toISOString(),
    author: 'Equipe Amanda Dinheiro',
    excerpt: 'Desmistificando termos comuns de empréstimos como CET, taxas de juros e períodos de carência.',
  },
  {
    slug: 'dicas-para-economizar-dinheiro',
    title: '5 Dicas Práticas para Economizar Dinheiro no Dia a Dia',
    content: 'Pequenas mudanças de hábitos que podem fazer uma grande diferença no seu orçamento mensal. Comece a economizar hoje mesmo! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
    imageUrl: 'https://placehold.co/600x400.png',
    date: new Date('2024-03-15').toISOString(),
    author: 'Equipe Amanda Dinheiro',
    excerpt: 'Pequenas mudanças de hábitos que podem fazer uma grande diferença no seu orçamento mensal.',
  },
];

export async function getBlogPosts(): Promise<BlogPost[]> {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return posts.find(post => post.slug === slug);
}

export async function addBlogPost(postData: { title: string; content: string; imageUrl?: string; author?: string }): Promise<BlogPost> {
  const slug = postData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
  
  // Check if slug already exists, append number if it does
  let finalSlug = slug;
  let counter = 1;
  while (posts.some(p => p.slug === finalSlug)) {
    finalSlug = `${slug}-${counter}`;
    counter++;
  }

  const newPost: BlogPost = {
    slug: finalSlug,
    title: postData.title,
    content: postData.content,
    imageUrl: postData.imageUrl || 'https://placehold.co/600x400.png',
    date: new Date().toISOString(),
    author: postData.author || 'Equipe Amanda Dinheiro',
    excerpt: postData.content.substring(0, 150) + (postData.content.length > 150 ? '...' : ''),
  };
  posts = [newPost, ...posts]; // Add to the beginning of the array
  return newPost;
}
