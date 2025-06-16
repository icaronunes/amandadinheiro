import Image from 'next/image';
import type { TeamMember } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
      <CardHeader className="items-center">
        <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-primary/20">
          <Image
            src={member.imageUrl}
            alt={member.name}
            fill
            className="object-cover"
            sizes="128px"
            data-ai-hint="professional team"
          />
        </div>
        <CardTitle className="font-headline text-xl text-primary">{member.name}</CardTitle>
        <CardDescription className="text-accent font-semibold">{member.role}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground/80">{member.bio}</p>
      </CardContent>
    </Card>
  );
}
