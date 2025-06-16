import { getBlogPosts } from '@/lib/blogData';
import BlogPostCard from '@/components/BlogPostCard';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default async function BlogListingSection() {
  // Show, for example, the 3 most recent posts on the homepage
  const posts = (await getBlogPosts()).slice(0, 3);

  return (
    <section id="blog" className="bg-background py-16">
      <div className="container">
        <AnimatedSection>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-primary mb-4">
            Fique por Dentro com Nosso Blog
          </h2>
          <p className="text-lg text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
            Dicas de economia, finanças pessoais, e novidades sobre o mercado de crédito.
          </p>
        </AnimatedSection>
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <AnimatedSection key={post.slug} delay={`delay-${index * 100}`}>
                <BlogPostCard post={post} />
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <AnimatedSection>
            <p className="text-center text-foreground/70">Nenhuma postagem no blog ainda. Volte em breve!</p>
          </AnimatedSection>
        )}
        <AnimatedSection className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <Link href="/blog">
              Ver Todos os Posts <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
