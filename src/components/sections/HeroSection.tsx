import Image from 'next/image';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { NOMESITE } from '@/lib/utils';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-background pt-20 pb-10 md:pt-32 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
         {/* Decorative background elements can be added here */}
      </div>
      <div className="container relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <AnimatedSection delay="delay-100" className="space-y-6 text-center md:text-left">
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
              Realize Seus Sonhos com a <span className="text-accent">{NOMESITE}</span>
            </h1>
            <p className="text-lg text-foreground/80">
              Soluções financeiras personalizadas para você alcançar seus objetivos. Empréstimos com as melhores taxas e consultoria especializada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105">
                <Link href="/#loan-info">
                  Conheça Nossos Empréstimos <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105">
                <Link href="/#contact">
                  Fale Conosco
                </Link>
              </Button>
            </div>
          </AnimatedSection>
          <AnimatedSection delay="delay-300" className="relative mt-8 md:mt-0">
            <Image
              src="https://placehold.co/600x450.png"
              alt="Pessoa feliz realizando um sonho financeiro"
              width={600}
              height={450}
              className="rounded-xl shadow-2xl object-cover"
              data-ai-hint="finance success"
              priority
            />
             <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/30 rounded-full blur-2xl -z-10"></div>
             <div className="absolute -top-4 -left-4 w-40 h-40 bg-primary/20 rounded-full blur-2xl -z-10"></div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
