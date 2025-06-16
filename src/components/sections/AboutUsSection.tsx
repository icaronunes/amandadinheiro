import TeamMemberCard from '@/components/TeamMemberCard';
import { getTeamMembers } from '@/lib/teamData';
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';

export default async function AboutUsSection() {
  const members = await getTeamMembers();

  return (
    <section id="about-us" className="bg-primary/5">
      <div className="container">
        <AnimatedSection>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-primary mb-4">
            Conheça a Amanda Dinheiro
          </h2>
          <p className="text-lg text-center text-foreground/80 mb-12 max-w-3xl mx-auto">
            Somos uma equipe dedicada a oferecer as melhores soluções financeiras com transparência, agilidade e foco total nas suas necessidades. Nossa missão é empoderar você a tomar decisões financeiras inteligentes e alcançar a estabilidade e prosperidade que merece.
          </p>
        </AnimatedSection>
        
        <AnimatedSection className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-headline text-2xl text-primary mb-4">Nossa Visão</h3>
              <p className="text-foreground/80 mb-2">
                Ser referência em consultoria e soluções de crédito, reconhecida pela excelência no atendimento e pela capacidade de transformar positivamente a vida financeira de nossos clientes.
              </p>
              <h3 className="font-headline text-2xl text-primary mt-6 mb-4">Nossos Valores</h3>
              <ul className="list-disc list-inside text-foreground/80 space-y-1">
                <li>Confiança e Transparência</li>
                <li>Foco no Cliente</li>
                <li>Inovação Contínua</li>
                <li>Ética e Responsabilidade</li>
              </ul>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
               <Image
                src="https://placehold.co/500x350.png"
                alt="Equipe Amanda Dinheiro em reunião"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                data-ai-hint="team meeting"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <h3 className="font-headline text-2xl md:text-3xl font-bold text-center text-primary mb-10">
            Nossa Equipe
          </h3>
        </AnimatedSection>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <AnimatedSection key={member.id} delay={`delay-${index * 100}`}>
              <TeamMemberCard member={member} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
