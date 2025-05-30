
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/Logo';
import { NAV_LINKS } from '@/lib/constants.tsx';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  // Removed isScrolled state as the new design implies a fixed background color for the navbar

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full",
      "bg-[hsl(var(--nav-background))] text-[hsl(var(--nav-foreground))]"
      // Removed shadow logic, assuming solid navbar background
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Logo 
          href="/" 
          iconClassName="text-white" // Icon color against Deep Indigo
          textClassName="text-white font-semibold" // Text color against Deep Indigo
        />

        <nav className="hidden md:flex items-center space-x-1">
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  "hover:text-[hsl(var(--nav-hover))]", // Amber hover text
                  isActive ? "font-semibold border-b-2 border-[hsl(var(--nav-active-border))]" : "text-[hsl(var(--nav-foreground))]" // Active: bold, bottom border Amber. Inactive: White
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-[hsl(var(--nav-foreground))] hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-[hsl(var(--nav-background))] text-[hsl(var(--nav-foreground))] p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-white/20">
                   <Logo 
                    href="/" 
                    iconClassName="text-white"
                    textClassName="text-white font-semibold"
                  />
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={closeSheet} className="text-[hsl(var(--nav-foreground))] hover:bg-white/10">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                </div>
                <nav className="flex flex-col space-y-2 p-4">
                  {NAV_LINKS.map((item) => {
                     const isActive = pathname === item.href;
                     return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={closeSheet}
                        className={cn(
                          "block rounded-md px-3 py-2 text-base font-medium transition-colors",
                          "hover:text-[hsl(var(--nav-hover))]",
                          isActive ? "font-semibold text-[hsl(var(--nav-hover))]" : "text-[hsl(var(--nav-foreground))]"
                        )}
                      >
                        {item.label}
                      </Link>
                     );
                  })}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
