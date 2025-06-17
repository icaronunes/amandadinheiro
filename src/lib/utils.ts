import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const NOMESITE = "A  manda Dinheiro"; // Aqui, o caractere U+2009 (thin space) real