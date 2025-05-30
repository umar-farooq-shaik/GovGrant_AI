
import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  icon?: LucideIcon;
}

export interface Grant {
  id: string;
  title: string;
  summary: string;
  eligibility: string;
  sourceLink: string;
  geminiAnswer?: string; // Optional, as per Grant Finder page description
  // Fields for saved grants
  notes?: string;
}

export interface SavedGrant extends Grant {
  savedDate: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  dataAiHint?: string;
  quote: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// For SearchForm
export interface Country {
  code: string;
  name: string;
}

export interface Currency {
  code: string;
  name: string;
}

export interface Goal {
  id: string;
  name: string;
}
