
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { APP_NAME, SOCIAL_LINKS, FOOTER_LINKS } from '@/lib/constants.tsx';
// import { cn } from '@/lib/utils'; // Not needed if not using cn here

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--footer-background))] text-[hsl(var(--footer-foreground))] border-t border-border/70"> 
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
          <div>
            <Logo 
              href="/" 
              iconClassName="text-primary" // Use primary color from theme
              textClassName="text-foreground font-semibold" // Use foreground color
            />
            <p className="mt-4 text-sm text-muted-foreground">
              {APP_NAME} helps you discover government grants, subsidies, and welfare schemes you are eligible for.
            </p>
          </div>
          
          <div className="md:justify-self-center">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h3>
            <ul role="list" className="mt-4 space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
               <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
            </ul>
          </div>

          <div className="md:justify-self-end">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Connect With Us</h3>
            <div className="mt-4 flex space-x-4">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" /> {/* Slightly smaller icons */}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border/70 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
