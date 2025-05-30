
import type React from 'react';
import type { NavItem, Testimonial, FAQItem, Country, Currency, Goal, SocialLink, CompanyValue, State, TeamMember } from '@/types';
import {
  Home, Search, Bookmark, Info, Mail, Briefcase, BookOpen, BarChart3,
  DollarSign, Building, Leaf, HeartPulse, Lightbulb, Eye, ShieldCheck, Users as UsersIcon, Users2
} from 'lucide-react';

export const APP_NAME = "GovAI Grants";
export const APP_DESCRIPTION = "Find Government Grants You Deserve";

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Grant Finder', href: '/grant-finder', icon: Search },
  { label: 'Saved Grants', href: '/saved', icon: Bookmark },
  { label: 'About Us', href: '/about', icon: Info },
  { label: 'Contact', href: '/contact', icon: Mail },
];

export const WHY_GOVGRANT_AI_ITEMS = [
  { id: 'trust', icon: Briefcase, title: 'Trusted Sources', description: 'Access verified grant information directly from official government publications.' },
  { id: 'global', icon: BarChart3, title: 'Global Support', description: 'Find grants applicable to your country and specific situation, worldwide.' },
  { id: 'ai', icon: Lightbulb, title: 'AI-Powered Answers', description: 'Get clear, concise answers and summaries powered by advanced AI.' },
  { id: 'save', icon: Bookmark, title: 'Save & Track', description: 'Easily save grants you\'re interested in and add personal notes.' },
];

export const HOW_IT_WORKS_STEPS = [
  { id: '1', title: 'Input Your Details', description: 'Provide your country, age, profession, income, and goals.', icon: DollarSign },
  { id: '2', title: 'Ask Your Question', description: 'Use natural language to search for specific grants or assistance programs.', icon: Search },
  { id: '3', title: 'Get Matched Results', description: 'Receive a list of relevant grants with summaries, eligibility, and source links.', icon: Building },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Aisha Khan', role: 'Student', avatarUrl: 'https://placehold.co/100x100.png', dataAiHint: 'woman smiling', quote: 'GovGrant AI helped me find scholarships I never knew existed! The process was so simple.' },
  { id: '2', name: 'John Doe', role: 'Small Business Owner', avatarUrl: 'https://media.istockphoto.com/id/1087531642/vector/male-face-silhouette-or-icon-man-avatar-profile-unknown-or-anonymous-person-vector.jpg?s=612x612&w=0&k=20&c=FEppaMMfyIYV2HJ6Ty8tLmPL1GX6Tz9u9Y8SCRrkD-o=', dataAiHint: 'profile silhouette', quote: 'Finally, a tool that demystifies government grants for entrepreneurs. Highly recommended!' },
  { id: '3', name: 'Maria Garcia', role: 'Farmer', avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5bH_tuxpPsI7P023AzdLw3tExS6KdVpLqbg&s', dataAiHint: 'person happy', quote: 'I found vital subsidies for my farm through this platform. It\'s a game-changer for agricultural communities.' },
];

export const FAQ_ITEMS: FAQItem[] = [
  { id: '1', question: 'How accurate is the grant information?', answer: 'GovGrant AI strives to provide the most accurate and up-to-date information by sourcing data from official government publications. However, always verify details on the official grant website.' },
  { id: '2', question: 'Is GovGrant AI free to use?', answer: 'Yes, GovGrant AI is currently free to use. We aim to make grant information accessible to everyone.' },
  { id: '3', question: 'Which countries are supported?', answer: 'GovGrant AI is designed to support users globally. Our AI tries to find grants based on the country you specify.' },
  { id: '4', question: 'How is my data used?', answer: 'We take your privacy seriously. Please refer to our Privacy Policy for detailed information on how we handle user data. Your search criteria are used to find relevant grants and are not stored long-term for profiling.' },
];

export const COUNTRIES: Country[] = [
  // Add a comprehensive list or use a library later
  { code: 'US', name: 'United States', states: [ {code: 'AL', name: 'Alabama'}, {code: 'AK', name: 'Alaska'} ] },
  { code: 'CA', name: 'Canada', states: [ {code: 'AB', name: 'Alberta'}, {code: 'BC', name: 'British Columbia'} ] },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'AU', name: 'Australia', states: [ {code: 'NSW', name: 'New South Wales'}, {code: 'VIC', name: 'Victoria'} ] },
  { code: 'IN', name: 'India', states: [ {code: 'MH', name: 'Maharashtra'}, {code: 'DL', name: 'Delhi'} ] },
  { code: 'DE', name: 'Germany' },
  { code: 'KE', name: 'Kenya' },
  // ... more countries
];

export const CURRENCIES: Currency[] = [
  { code: 'USD', name: 'USD - US Dollar' },
  { code: 'CAD', name: 'CAD - Canadian Dollar' },
  { code: 'GBP', name: 'GBP - British Pound' },
  { code: 'EUR', name: 'EUR - Euro' },
  { code: 'INR', name: 'INR - Indian Rupee' },
  { code: 'AUD', name: 'AUD - Australian Dollar' },
  { code: 'KES', name: 'KES - Kenyan Shilling' },
  // ... more currencies
];

export const GOALS: Goal[] = [
  { id: 'education', name: 'Education', icon: BookOpen },
  { id: 'farming', name: 'Farming & Agriculture', icon: Leaf },
  { id: 'housing', name: 'Housing', icon: Building },
  { id: 'health', name: 'Health & Welfare', icon: HeartPulse },
  { id: 'startup', name: 'Startup & Business', icon: Lightbulb },
  { id: 'other', name: 'Other', icon: BarChart3 },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { id: '1', name: 'Umar Farooq', role: 'Founder & CEO', bio: 'Dedicated to democratizing access to public welfare through technology.' },
  { id: '2', name: 'Code Master', role: 'Lead Developer', bio: 'Expert in building scalable and user-friendly AI-driven applications.' },
  { id: '3', name: 'Grant Guru', role: 'Policy & Research Lead', bio: 'Passionate about connecting people with the resources they need to thrive.' },
];


export const COMPANY_VALUES: CompanyValue[] = [
  { id: 'accessibility', title: 'Accessibility', description: 'Ensuring everyone, regardless of ability or background, can easily access grant information.', icon: Eye },
  { id: 'privacy', title: 'Privacy', description: 'Protecting user data and maintaining confidentiality is paramount to our operations.', icon: ShieldCheck },
  { id: 'transparency', title: 'Transparency', description: 'Providing clear, unbiased information about government schemes and our processes.', icon: UsersIcon },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Twitter', href: '#', icon: (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>) },
  { name: 'Facebook', href: '#', icon: (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>) },
  { name: 'LinkedIn', href: '#', icon: (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM6.67 8.04H9.33V17H6.67V8.04ZM8 5.6A1.6 1.6 0 1 0 8 8.8A1.6 1.6 0 0 0 8 5.6ZM10.67 8.04H13.33V11.2C13.33 11.2 13.33 11.2 13.33 11.2C13.33 11.2 13.33 11.2 13.33 11.2V17H10.67V8.04ZM14.67 8.04H17.33V11.47C17.33 13.07 16.07 14.33 14.47 14.33C12.87 14.33 11.61 13.07 11.61 11.47V8.04H14.67Z" clipRule="evenodd" /></svg>) },
];

export const FOOTER_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];
