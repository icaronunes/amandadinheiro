import type { LoanProduct } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface LoanProductCardProps {
  product: LoanProduct;
}

export default function LoanProductCard({ product }: LoanProductCardProps) {
  const IconComponent = product.icon && typeof product.icon !== 'string' ? product.icon : CheckCircle2;
  
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-2">
          <IconComponent className="w-8 h-8 text-primary" />
          <CardTitle className="font-headline text-2xl text-primary">{product.name}</CardTitle>
        </div>
        <CardDescription className="text-foreground/70">{product.eligibility}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-foreground/80">Taxa de Juros:</span>
          <span className="font-semibold text-primary">{product.interestRate}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-foreground/80">Prazo:</span>
          <span className="font-semibold text-primary">{product.term}</span>
        </div>
      </CardContent>
      <CardFooter>
        {product.ctaLink && (
          <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href={product.ctaLink}>
              {product.ctaText || 'Mais Detalhes'} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
