"use client";
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Feather } from 'lucide-react'; // Using Feather as a generic logo
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Início' },
  { href: '/#loan-info', label: 'Empréstimos' },
  { href: '/blog', label: 'Blog' },
  { href: '/blog/create', label: 'Criar Post' },
  { href: '/#about-us', label: 'Sobre Nós' },
  { href: '/#contact', label: 'Contato' },
];

export default function Header() {
  const pathname = usePathname();

  const Logo = () => (
    <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
      <Feather className="h-8 w-8" />
      <span className="font-headline text-2xl font-bold">Amanda Dinheiro</span>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                (pathname === item.href || (item.href.includes('#') && pathname === '/')) ? "text-primary" : "text-foreground/70"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 p-6">
              <Logo />
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-base font-medium transition-colors hover:text-primary",
                       (pathname === item.href || (item.href.includes('#') && pathname === '/')) ? "text-primary" : "text-foreground/70"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
