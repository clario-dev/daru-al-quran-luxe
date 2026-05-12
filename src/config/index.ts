import { z } from 'zod';

// Schéma de validation pour le formulaire de contact
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  subject: z.string().min(5, 'Le sujet doit contenir au moins 5 caractères'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// URLs externes centralisées
export const EXTERNAL_URLS = {
  whatsapp: 'https://wa.me/221777636888',
  facebook: 'https://facebook.com/daaru.alqurane',
  instagram: 'https://instagram.com/daaru.alqurane',
  youtube: 'https://youtube.com/@daaru.alqurane',
  tiktok: 'https://tiktok.com/@daaru.alqurane',
} as const;

// Configuration des cours
export const COURSE_LEVELS = ['Débutant', 'Intermédiaire', 'Avancé'] as const;
export type CourseLevel = typeof COURSE_LEVELS[number];

// Pays francophones cibles
export const TARGET_COUNTRIES = [
  { code: 'SN', name: 'Sénégal', locale: 'fr-SN' },
  { code: 'FR', name: 'France', locale: 'fr-FR' },
  { code: 'BE', name: 'Belgique', locale: 'fr-BE' },
  { code: 'CH', name: 'Suisse', locale: 'fr-CH' },
  { code: 'CA', name: 'Canada', locale: 'fr-CA' },
  { code: 'MA', name: 'Maroc', locale: 'fr-MA' },
] as const;
