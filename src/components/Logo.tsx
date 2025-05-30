
import Link from 'next/link';
import type { SVGProps } from 'react';

// Simple placeholder logo icon
function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    </svg>
  );
}


interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  href?: string;
}

export function Logo({ className, iconClassName, textClassName, href = '/' }: LogoProps) {
  const content = (
    <>
      <LogoIcon className={cn('h-8 w-8', iconClassName)} />
      <span className={cn('text-xl font-bold', textClassName)}>GovGrant AI</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn('flex items-center gap-2', className)}>
        {content}
      </Link>
    );
  }

  return <div className={cn('flex items-center gap-2', className)}>{content}</div>;
}

// Helper cn function if not globally available in this context (it is via lib/utils)
const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');
