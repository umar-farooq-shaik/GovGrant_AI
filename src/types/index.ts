
import type React from 'react';
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
  geminiAnswer?: string;
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

export interface State {
  code: string;
  name: string;
}

export interface Country {
  code: string;
  name: string;
  states?: State[];
}

export interface Currency {
  code: string;
  name: string;
}

export interface Goal {
  id: string;
  name: string;
  icon: LucideIcon;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface CompanyValue {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}
