import { getLoanProducts } from '@/lib/loanProductsData';
import LoanProductCard from '@/components/LoanProductCard';
import AnimatedSection from '@/components/AnimatedSection';

export default async function LoanInfoSection() {
  const products = await getLoanProducts();

  return (
    <section id="loan-info" className="bg-background">
      <div className="container">
        <AnimatedSection>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-primary mb-4">
            Nossas Soluções de Crédito
          </h2>
          <p className="text-lg text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
            Encontre o empréstimo ideal para suas necessidades com condições que cabem no seu bolso.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <AnimatedSection key={product.id} delay={`delay-${index * 100}`}>
              <LoanProductCard product={product} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
