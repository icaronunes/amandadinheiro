import ContactForm from '@/components/forms/ContactForm';
import AnimatedSection from '@/components/AnimatedSection';
import { Mail, MessageCircle, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-background">
      <div className="container">
        <AnimatedSection>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-primary mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
            Tem alguma dúvida ou precisa de uma solução de crédito? Nossa equipe está pronta para ajudar!
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection delay="delay-100">
            <ContactForm />
          </AnimatedSection>
          <AnimatedSection delay="delay-200" className="space-y-8 mt-8 lg:mt-0">
            <div>
              <h3 className="font-headline text-xl text-primary mb-3">Nossas Informações de Contato</h3>
              <p className="text-foreground/80 mb-6">
                Estamos disponíveis para responder suas perguntas e discutir suas necessidades financeiras.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-primary">Email</h4>
                <a href="mailto:contato@amandinheiro.com.br" className="text-foreground/80 hover:text-accent">
                  contato@amandinheiro.com.br
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-primary">WhatApp</h4>
                <a href="https://wa.me/+5511987886560" className="text-foreground/80 hover:text-accent">
                  Clique aqui para iniciar uma conversa
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-primary">Telefone</h4>
                <a href="tel:+5511987886560" className="text-foreground/80 hover:text-accent">
                  (11) 98788-6560
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
