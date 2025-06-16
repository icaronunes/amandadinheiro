import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarDays, UserCircle } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const formattedDate = format(new Date(post.date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR });

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="aspect-[16/9] relative w-full overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint="financial article"
          />
        </div>
      </Link>
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="font-headline text-xl sm:text-2xl leading-tight hover:text-primary transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </CardTitle>
        <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
          <div className="flex items-center gap-1">
            <CalendarDays className="h-3 w-3" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <UserCircle className="h-3 w-3" />
            <span>{post.author}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0 flex-grow">
        <p className="text-sm text-foreground/80 line-clamp-3">
          {post.excerpt || post.content.substring(0, 150) + (post.content.length > 150 ? '...' : '')}
        </p>
      </CardContent>
      <CardFooter className="p-4 sm:p-6 pt-0">
        <Button asChild variant="link" className="p-0 text-primary hover:text-accent">
          <Link href={`/blog/${post.slug}`}>
            Leia Mais <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
