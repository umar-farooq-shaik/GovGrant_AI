
import type React from 'react';
import type { NavItem, Testimonial, FAQItem, Country, Currency, Goal, SocialLink, CompanyValue, State } from '@/types';
import {
  Home, Search, Bookmark, Info, Mail, Briefcase, BookOpen, BarChart3,
  DollarSign, Building, Leaf, HeartPulse, Lightbulb, Eye, ShieldCheck, Users as UsersIcon
} from 'lucide-react';

export const APP_NAME = "GovGrant AI";
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
  { id: '1', name: 'Aisha Khan', role: 'Student', avatarUrl: 'data:image/jpeg;base64,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', dataAiHint: 'woman smiling', quote: 'GovGrant AI helped me find scholarships I never knew existed! The process was so simple.' },
  { id: '2', name: 'John Doe', role: 'Small Business Owner', avatarUrl: 'https://media.istockphoto.com/id/1087531642/vector/male-face-silhouette-or-icon-man-avatar-profile-unknown-or-anonymous-person-vector.jpg?s=612x612&w=0&k=20&c=FEppaMMfyIYV2HJ6Ty8tLmPL1GX6Tz9u9Y8SCRrkD-o=', dataAiHint: 'profile silhouette', quote: 'Finally, a tool that demystifies government grants for entrepreneurs. Highly recommended!' },
  { id: '3', name: 'Maria Garcia', role: 'Farmer', avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5bH_tuxpPsI7P023AzdLw3tExS6KdVpLqbg&s', dataAiHint: 'person happy', quote: 'I found vital subsidies for my farm through this platform. It\'s a game-changer for agricultural communities.' },
];

export const FAQ_ITEMS: FAQItem[] = [
  { id: '1', question: 'How accurate is the grant information?', answer: 'GovGrant AI strives to provide the most accurate and up-to-date information by sourcing data from official government publications. However, always verify details on the official grant website.' },
  { id: '2', question: 'Is GovGrant AI free to use?', answer: 'Yes, GovGrant AI is currently free to use. We aim to make grant information accessible to everyone.' },
  { id: '3', question: 'Which countries are supported?', answer: 'GovGrant AI is designed to support users globally. Our AI tries to find grants based on the country you specify.' },
  { id: '4', question: 'How is my data used?', answer: 'We take your privacy seriously. Please refer to our Privacy Policy for detailed information on how we handle user data. Your search criteria are used to find relevant grants and are not stored long-term for profiling.' },
];

export const STATES_BY_COUNTRY: { [countryCode: string]: State[] } = {
  US: [
    { code: 'AL', name: 'Alabama' },
    { code: 'AK', name: 'Alaska' },
    { code: 'AZ', name: 'Arizona' },
    { code: 'AR', name: 'Arkansas' },
    { code: 'CA', name: 'California' },
    { code: 'CO', name: 'Colorado' },
    { code: 'CT', name: 'Connecticut' },
    { code: 'DE', name: 'Delaware' },
    { code: 'FL', name: 'Florida' },
    { code: 'GA', name: 'Georgia' },
    // Add more US states as needed
  ],
  CA: [
    { code: 'AB', name: 'Alberta' },
    { code: 'BC', name: 'British Columbia' },
    { code: 'MB', name: 'Manitoba' },
    { code: 'NB', name: 'New Brunswick' },
    { code: 'NL', name: 'Newfoundland and Labrador' },
    { code: 'NS', name: 'Nova Scotia' },
    { code: 'ON', name: 'Ontario' },
    { code: 'PE', name: 'Prince Edward Island' },
    { code: 'QC', name: 'Quebec' },
    { code: 'SK', name: 'Saskatchewan' },
  ],
  IN: [
    { code: 'AP', name: 'Andhra Pradesh' },
    { code: 'AR', name: 'Arunachal Pradesh' },
    { code: 'AS', name: 'Assam' },
    { code: 'BR', name: 'Bihar' },
    { code: 'CT', name: 'Chhattisgarh' },
    { code: 'GA', name: 'Goa' },
    { code: 'GJ', name: 'Gujarat' },
    { code: 'HR', name: 'Haryana' },
    { code: 'HP', name: 'Himachal Pradesh' },
    { code: 'JH', name: 'Jharkhand' },
    { code: 'KA', name: 'Karnataka' },
    { code: 'KL', name: 'Kerala' },
    { code: 'MP', name: 'Madhya Pradesh' },
    { code: 'MH', name: 'Maharashtra' },
    { code: 'MN', name: 'Manipur' },
    { code: 'ML', name: 'Meghalaya' },
    { code: 'MZ', name: 'Mizoram' },
    { code: 'NL', name: 'Nagaland' },
    { code: 'OR', name: 'Odisha' },
    { code: 'PB', name: 'Punjab' },
    { code: 'RJ', name: 'Rajasthan' },
    { code: 'SK', name: 'Sikkim' },
    { code: 'TN', name: 'Tamil Nadu' },
    { code: 'TG', name: 'Telangana' },
    { code: 'TR', name: 'Tripura' },
    { code: 'UP', name: 'Uttar Pradesh' },
    { code: 'UT', name: 'Uttarakhand' },
    { code: 'WB', name: 'West Bengal' },
    { code: 'AN', name: 'Andaman and Nicobar Islands' },
    { code: 'CH', name: 'Chandigarh' },
    { code: 'DN', name: 'Dadra and Nagar Haveli and Daman and Diu' },
    { code: 'DL', name: 'Delhi' },
    { code: 'JK', name: 'Jammu and Kashmir' },
    { code: 'LA', name: 'Ladakh' },
    { code: 'LD', name: 'Lakshadweep' },
    { code: 'PY', name: 'Puducherry' },
  ],
};

export const COUNTRIES: Country[] = [
  { code: 'US', name: 'United States', states: STATES_BY_COUNTRY.US },
  { code: 'CA', name: 'Canada', states: STATES_BY_COUNTRY.CA },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'AU', name: 'Australia' }, // Can add states later
  { code: 'IN', name: 'India', states: STATES_BY_COUNTRY.IN },
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

export const TEAM_MEMBERS = [
  { id: '1', name: 'Umar Farooq', role: 'Founder & CEO', imageUrl: 'data:image/jpeg;base64,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
2.  **Code Master (Lead Developer):** Update the `imageUrl` with the second base64 string.

This will ensure both team member cards have the updated images.

Here are the changes to `src/lib/constants.tsx`:

<changes>
  <description>Update testimonial and team member images.</description>
  <change>
    <file>/src/lib/constants.tsx</file>
    <content><![CDATA[
import type React from 'react';
import type { NavItem, Testimonial, FAQItem, Country, Currency, Goal, SocialLink, CompanyValue, State } from '@/types';
import {
  Home, Search, Bookmark, Info, Mail, Briefcase, BookOpen, BarChart3,
  DollarSign, Building, Leaf, HeartPulse, Lightbulb, Eye, ShieldCheck, Users as UsersIcon
} from 'lucide-react';

export const APP_NAME = "GovGrant AI";
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
  { id: '1', name: 'Aisha Khan', role: 'Student', avatarUrl: 'data:image/jpeg;base64,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', dataAiHint: 'woman smiling', quote: 'GovGrant AI helped me find scholarships I never knew existed! The process was so simple.' },
  { id: '2', name: 'John Doe', role: 'Small Business Owner', avatarUrl: 'https://media.istockphoto.com/id/1087531642/vector/male-face-silhouette-or-icon-man-avatar-profile-unknown-or-anonymous-person-vector.jpg?s=612x612&w=0&k=20&c=FEppaMMfyIYV2HJ6Ty8tLmPL1GX6Tz9u9Y8SCRrkD-o=', dataAiHint: 'profile silhouette', quote: 'Finally, a tool that demystifies government grants for entrepreneurs. Highly recommended!' },
  { id: '3', name: 'Maria Garcia', role: 'Farmer', avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5bH_tuxpPsI7P023AzdLw3tExS6KdVpLqbg&s', dataAiHint: 'person happy', quote: 'I found vital subsidies for my farm through this platform. It\'s a game-changer for agricultural communities.' },
];

export const FAQ_ITEMS: FAQItem[] = [
  { id: '1', question: 'How accurate is the grant information?', answer: 'GovGrant AI strives to provide the most accurate and up-to-date information by sourcing data from official government publications. However, always verify details on the official grant website.' },
  { id: '2', question: 'Is GovGrant AI free to use?', answer: 'Yes, GovGrant AI is currently free to use. We aim to make grant information accessible to everyone.' },
  { id: '3', question: 'Which countries are supported?', answer: 'GovGrant AI is designed to support users globally. Our AI tries to find grants based on the country you specify.' },
  { id: '4', question: 'How is my data used?', answer: 'We take your privacy seriously. Please refer to our Privacy Policy for detailed information on how we handle user data. Your search criteria are used to find relevant grants and are not stored long-term for profiling.' },
];

export const STATES_BY_COUNTRY: { [countryCode: string]: State[] } = {
  US: [
    { code: 'AL', name: 'Alabama' },
    { code: 'AK', name: 'Alaska' },
    { code: 'AZ', name: 'Arizona' },
    { code: 'AR', name: 'Arkansas' },
    { code: 'CA', name: 'California' },
    { code: 'CO', name: 'Colorado' },
    { code: 'CT', name: 'Connecticut' },
    { code: 'DE', name: 'Delaware' },
    { code: 'FL', name: 'Florida' },
    { code: 'GA', name: 'Georgia' },
    // Add more US states as needed
  ],
  CA: [
    { code: 'AB', name: 'Alberta' },
    { code: 'BC', name: 'British Columbia' },
    { code: 'MB', name: 'Manitoba' },
    { code: 'NB', name: 'New Brunswick' },
    { code: 'NL', name: 'Newfoundland and Labrador' },
    { code: 'NS', name: 'Nova Scotia' },
    { code: 'ON', name: 'Ontario' },
    { code: 'PE', name: 'Prince Edward Island' },
    { code: 'QC', name: 'Quebec' },
    { code: 'SK', name: 'Saskatchewan' },
  ],
  IN: [
    { code: 'AP', name: 'Andhra Pradesh' },
    { code: 'AR', name: 'Arunachal Pradesh' },
    { code: 'AS', name: 'Assam' },
    { code: 'BR', name: 'Bihar' },
    { code: 'CT', name: 'Chhattisgarh' },
    { code: 'GA', name: 'Goa' },
    { code: 'GJ', name: 'Gujarat' },
    { code: 'HR', name: 'Haryana' },
    { code: 'HP', name: 'Himachal Pradesh' },
    { code: 'JH', name: 'Jharkhand' },
    { code: 'KA', name: 'Karnataka' },
    { code: 'KL', name: 'Kerala' },
    { code: 'MP', name: 'Madhya Pradesh' },
    { code: 'MH', name: 'Maharashtra' },
    { code: 'MN', name: 'Manipur' },
    { code: 'ML', name: 'Meghalaya' },
    { code: 'MZ', name: 'Mizoram' },
    { code: 'NL', name: 'Nagaland' },
    { code: 'OR', name: 'Odisha' },
    { code: 'PB', name: 'Punjab' },
    { code: 'RJ', name: 'Rajasthan' },
    { code: 'SK', name: 'Sikkim' },
    { code: 'TN', name: 'Tamil Nadu' },
    { code: 'TG', name: 'Telangana' },
    { code: 'TR', name: 'Tripura' },
    { code: 'UP', name: 'Uttar Pradesh' },
    { code: 'UT', name: 'Uttarakhand' },
    { code: 'WB', name: 'West Bengal' },
    { code: 'AN', name: 'Andaman and Nicobar Islands' },
    { code: 'CH', name: 'Chandigarh' },
    { code: 'DN', name: 'Dadra and Nagar Haveli and Daman and Diu' },
    { code: 'DL', name: 'Delhi' },
    { code: 'JK', name: 'Jammu and Kashmir' },
    { code: 'LA', name: 'Ladakh' },
    { code: 'LD', name: 'Lakshadweep' },
    { code: 'PY', name: 'Puducherry' },
  ],
};

export const COUNTRIES: Country[] = [
  { code: 'US', name: 'United States', states: STATES_BY_COUNTRY.US },
  { code: 'CA', name: 'Canada', states: STATES_BY_COUNTRY.CA },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'AU', name: 'Australia' }, // Can add states later
  { code: 'IN', name: 'India', states: STATES_BY_COUNTRY.IN },
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

export const TEAM_MEMBERS = [
  { id: '1', name: 'Umar Farooq', role: 'Founder & CEO', imageUrl: 'data:image/jpeg;base64,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', dataAiHint: 'software developer' },
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


    
