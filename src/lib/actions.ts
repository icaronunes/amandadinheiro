"use server";

import { z } from 'zod';
import { addBlogPost } from './blogData';
import { revalidatePath } from 'next/cache';

const CreatePostSchema = z.object({
  title: z.string().min(3, { message: "Título deve ter pelo menos 3 caracteres." }).max(100, { message: "Título muito longo."}),
  content: z.string().min(10, { message: "Conteúdo deve ter pelo menos 10 caracteres." }),
  imageUrl: z.string().url({ message: "Por favor, insira uma URL de imagem válida." }).optional().or(z.literal('')),
  author: z.string().optional(),
});

export async function createBlogPostAction(prevState: any, formData: FormData) {
  const validatedFields = CreatePostSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
    imageUrl: formData.get('imageUrl') || undefined, // Ensure empty string becomes undefined if optional
    author: formData.get('author') || undefined,
  });

  if (!validatedFields.success) {
    return {
      message: "Erro de validação.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  try {
    const newPost = await addBlogPost(validatedFields.data);
    revalidatePath('/blog'); // Revalidate blog listing page
    revalidatePath('/'); // Revalidate home page if it shows blog posts
    if (newPost.slug) {
      revalidatePath(`/blog/${newPost.slug}`); // Revalidate specific post page
    }
    return { message: `Post "${newPost.title}" criado com sucesso!`, success: true, errors: null, slug: newPost.slug };
  } catch (error) {
    console.error("Erro ao criar post:", error);
    return { message: "Falha ao criar post. Tente novamente.", success: false, errors: null };
  }
}


const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um email válido." }),
  subject: z.string().min(5, { message: "Assunto deve ter pelo menos 5 caracteres." }).optional().or(z.literal('')),
  message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres." }),
});

export async function submitContactFormAction(prevState: any, formData: FormData) {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject') || undefined,
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: "Erro de validação.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  try {
    // Simulate sending email or saving to database
    console.log("Nova mensagem de contato:", validatedFields.data);
    // await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

    return { message: "Mensagem enviada com sucesso! Entraremos em contato em breve.", success: true, errors: null };
  } catch (error) {
    console.error("Erro ao enviar mensagem de contato:", error);
    return { message: "Falha ao enviar mensagem. Tente novamente.", success: false, errors: null };
  }
}
