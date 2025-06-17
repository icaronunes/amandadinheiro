import { getBlogPostBySlug, getBlogPosts } from '@/lib/blogData';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CalendarDays, UserCircle, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { NOMESITE } from '@/lib/utils';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) {
    return {
      title: 'Post Não Encontrado',
    };
  }
  return {
    title: `${post.title} - Blog ${NOMESITE}`,
    description: post.excerpt || post.content.substring(0, 160),
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = format(new Date(post.date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR });

  return (
    <div className="bg-background py-12 md:py-16">
      <div className="container max-w-3xl mx-auto">
        <AnimatedSection>
          <Button variant="outline" asChild className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para o Blog
            </Link>
          </Button>
        </AnimatedSection>

        <AnimatedSection delay="delay-100">
          <article className="bg-card p-6 sm:p-8 md:p-10 rounded-xl shadow-xl">
            <header className="mb-8">
              <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserCircle className="h-4 w-4" />
                  <span>Por: {post.author}</span>
                </div>
              </div>
            </header>

            {post.imageUrl && (
              <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-8 shadow-md">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 700px"
                  priority
                  data-ai-hint="article detail"
                />
              </div>
            )}

            <div
              className="prose prose-lg max-w-none text-foreground/90 
                         prose-headings:font-headline prose-headings:text-primary 
                         prose-a:text-accent hover:prose-a:text-accent/80
                         prose-strong:text-primary/90"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} // Basic rendering of newlines
            />
          </article>
        </AnimatedSection>
      </div>
    </div>
  );
}
