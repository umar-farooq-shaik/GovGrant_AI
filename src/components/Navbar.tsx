
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/Logo';
import { NAV_LINKS } from '@/lib/constants.tsx'; // APP_NAME removed as Logo handles it
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Trigger shadow sooner
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-shadow duration-200",
      "bg-[hsl(var(--nav-background))] text-[hsl(var(--nav-foreground))]", // Use CSS variables for navbar colors
      isScrolled ? "shadow-md border-b border-border/70" : "border-b border-transparent"
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Logo 
          href="/" 
          iconClassName="text-primary" // Use primary color from theme
          textClassName="text-foreground font-semibold" // Use foreground color
        />

        <nav className="hidden md:flex items-center space-x-1"> {/* Reduced space for a tighter look */}
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-primary/5",
                pathname === item.href ? "text-primary font-semibold bg-primary/10" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-accent/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-[hsl(var(--nav-background))] text-[hsl(var(--nav-foreground))] p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-border/70">
                   <Logo 
                    href="/" 
                    iconClassName="text-primary"
                    textClassName="text-foreground font-semibold"
                  />
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={closeSheet} className="text-foreground hover:bg-accent/10">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                </div>
                <nav className="flex flex-col space-y-2 p-4">
                  {NAV_LINKS.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeSheet}
                      className={cn(
                        "block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-primary/10 hover:text-primary",
                        pathname === item.href ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
