
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { APP_NAME, SOCIAL_LINKS, FOOTER_LINKS } from '@/lib/constants.tsx';
import { cn } from '@/lib/utils';

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--footer-background))] text-[hsl(var(--footer-foreground))] border-t border-white/20"> 
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
          <div>
            <Logo 
              href="/" 
              iconClassName="text-white" // Icon color against Deep Indigo
              textClassName="text-white font-semibold" // Text color against Deep Indigo
            />
            <p className="mt-4 text-sm text-[hsl(var(--footer-foreground))]">
              {APP_NAME} helps you discover government grants, subsidies, and welfare schemes you are eligible for.
            </p>
          </div>
          
          <div className="md:justify-self-center">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3> {/* White heading */}
            <ul role="list" className="mt-4 space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[hsl(var(--footer-foreground))] hover:text-[hsl(var(--footer-link-hover))] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
               <li>
                  <Link href="/contact" className="text-sm text-[hsl(var(--footer-foreground))] hover:text-[hsl(var(--footer-link-hover))] transition-colors">
                    Contact Us
                  </Link>
                </li>
            </ul>
          </div>

          <div className="md:justify-self-end">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Connect With Us</h3> {/* White heading */}
            <div className="mt-4 flex space-x-4">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[hsl(var(--footer-foreground))] hover:text-[hsl(var(--footer-link-hover))] transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-[hsl(var(--footer-foreground))]">
            &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
