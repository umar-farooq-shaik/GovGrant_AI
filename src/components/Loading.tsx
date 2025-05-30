
import { Loader2 } from 'lucide-react';

interface LoadingProps {
  text?: string;
  size?: number;
  className?: string;
}

export function Loading({ text = "Loading...", size = 24, className }: LoadingProps) {
  return (
    <div className={`flex flex-col items-center justify-center space-y-2 p-4 ${className}`}>
      <Loader2 className="animate-spin text-primary" style={{ width: size, height: size }} />
      {text && <p className="text-sm text-muted-foreground">{text}</p>}
    </div>
  );
}
