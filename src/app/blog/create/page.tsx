import CreatePostForm from '@/components/forms/CreatePostForm';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: 'Criar Novo Post - Amanda Dinheiro',
  description: 'Adicione uma nova postagem ao blog da Amanda Dinheiro.',
};

export default function CreatePostPage() {
  return (
    <div className="bg-background py-16">
      <div className="container">
        <AnimatedSection>
          <CreatePostForm />
        </AnimatedSection>
      </div>
    </div>
  );
}
