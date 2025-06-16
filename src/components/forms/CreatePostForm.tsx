"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { createBlogPostAction } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation'; // Corrected import
import { Loader2 } from 'lucide-react';

const initialState = {
  message: null,
  errors: null,
  success: false,
  slug: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {pending ? 'Publicando...' : 'Publicar Post'}
    </Button>
  );
}

export default function CreatePostForm() {
  const [state, formAction] = useFormState(createBlogPostAction, initialState);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (state?.message) {
      if (state.success) {
        toast({
          title: "Sucesso!",
          description: state.message,
        });
        // Reset form or redirect
        if (state.slug) {
          router.push(`/blog/${state.slug}`);
        } else {
          router.push('/blog');
        }
        // To reset form fields, you might need to manage them with useState and clear them here,
        // or rely on the default form reset behavior if the form is not part of a SPA-like update.
        // For this form using server actions and full page navigation, resetting might not be straightforward without full component state management for fields.
      } else {
        toast({
          title: "Erro",
          description: state.message || "Falha ao criar post.",
          variant: "destructive",
        });
      }
    }
  }, [state, toast, router]);

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary">Criar Nova Postagem</CardTitle>
        <CardDescription>Compartilhe suas ideias e conhecimentos com nossos leitores.</CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Título</Label>
            <Input id="title" name="title" placeholder="Título do seu post" required />
            {state?.errors?.title && <p className="text-sm text-destructive">{state.errors.title[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Conteúdo</Label>
            <Textarea id="content" name="content" placeholder="Escreva seu post aqui..." rows={10} required />
            {state?.errors?.content && <p className="text-sm text-destructive">{state.errors.content[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="imageUrl">URL da Imagem de Destaque (Opcional)</Label>
            <Input id="imageUrl" name="imageUrl" type="url" placeholder="https://exemplo.com/imagem.jpg" />
            {state?.errors?.imageUrl && <p className="text-sm text-destructive">{state.errors.imageUrl[0]}</p>}
          </div>
           <div className="space-y-2">
            <Label htmlFor="author">Autor (Opcional)</Label>
            <Input id="author" name="author" placeholder="Seu nome ou da equipe" />
            {state?.errors?.author && <p className="text-sm text-destructive">{state.errors.author[0]}</p>}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <SubmitButton />
        </CardFooter>
      </form>
    </Card>
  );
}
