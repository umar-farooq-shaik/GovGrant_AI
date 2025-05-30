
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import type { Testimonial } from '@/types';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col shadow-lg rounded-xl overflow-hidden">
      <CardHeader className="p-6 bg-muted/30">
        <div className="flex items-center space-x-4">
          <Image
            src={testimonial.avatarUrl}
            alt={testimonial.name}
            width={64}
            height={64}
            className="rounded-full"
            data-ai-hint={testimonial.dataAiHint || "person"}
          />
          <div>
            <p className="text-lg font-semibold text-primary">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <p className="text-foreground italic">&ldquo;{testimonial.quote}&rdquo;</p>
      </CardContent>
      <CardFooter className="p-6 bg-muted/30">
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
