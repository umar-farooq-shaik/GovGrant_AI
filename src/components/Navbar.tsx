
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/Logo';
import { NAV_LINKS, APP_NAME } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      "bg-[#1E1F4B] text-[#FFFFFF]", // Navbar BG: Deep Indigo, Text: White
      isScrolled ? "shadow-lg" : ""
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Logo 
          href="/" 
          iconClassName="text-[#F9A826]" // Amber icon
          textClassName="text-white"
        />

        <nav className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#F9A826]", // Hover color: Amber
                pathname === item.href ? "font-bold border-b-2 border-[#F9A826]" : "text-gray-300 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-[#1E1F4B] text-white p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-white/20">
                   <Logo 
                    href="/" 
                    iconClassName="text-[#F9A826]"
                    textClassName="text-white"
                  />
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={closeSheet} className="text-white hover:bg-white/10">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                </div>
                <nav className="flex flex-col space-y-4 p-4">
                  {NAV_LINKS.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeSheet}
                      className={cn(
                        "block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-white/10 hover:text-[#F9A826]",
                        pathname === item.href ? "bg-white/20 text-[#F9A826]" : "text-gray-300"
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
