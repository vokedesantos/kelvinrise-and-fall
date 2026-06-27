import { Inter } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const FONT_CLASS_MAP: Record<string, string> = {
  Inter: inter.className,
};
