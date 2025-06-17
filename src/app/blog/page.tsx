import { getBlogPosts } from '@/lib/blogData';
import BlogPostCard from '@/components/BlogPostCard';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlusCircle } from 'lucide-react';
import { NOMESITE } from '@/lib/utils';

export const metadata = {
  title: `Blog - ${NOMESITE}`,
  description: 'Empréstimos com facilidade para você concretizar seus sonhos.',
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="bg-background py-16">
      <div className="container">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
            <div>
              <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-2">
                Nosso Blog
              </h1>
              <p className="text-lg text-foreground/80 max-w-xl">
                Informações valiosas para sua jornada financeira.
              </p>
            </div>
            <Button asChild size="lg" className="mt-4 sm:mt-0 bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/blog/create">
                <PlusCircle className="mr-2 h-5 w-5" /> Criar Novo Post
              </Link>
            </Button>
          </div>
        </AnimatedSection>
        
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <AnimatedSection key={post.slug} delay={`delay-${index * 50}`}>
                <BlogPostCard post={post} />
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <AnimatedSection>
            <p className="text-center text-2xl text-foreground/70 py-10">
              Ainda não há posts no blog. Volte em breve!
            </p>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
}
