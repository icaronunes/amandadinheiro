import { NOMESITE } from '@/lib/utils';
import { NOMEM } from 'dns';
import { DollarSign } from 'lucide-react'; // Changed Feather to DollarSign
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-8 text-center text-sm text-muted-foreground">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <DollarSign className="h-6 w-6" /> {/* Changed Feather to DollarSign */}
            <span className="font-headline text-xl font-bold">{NOMESITE}</span>
          </Link>
          <p>&copy; {currentYear} {NOMESITE}. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link href="/#loan-info" className="hover:text-primary">Empréstimos</Link>
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <Link href="/#contact" className="hover:text-primary">Contato</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
