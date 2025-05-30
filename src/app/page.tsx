
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TestimonialCard } from '@/components/TestimonialCard';
import { APP_NAME, APP_DESCRIPTION, WHY_GOVGRANT_AI_ITEMS, HOW_IT_WORKS_STEPS, TESTIMONIALS } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Home | ${APP_NAME}`,
  description: `Welcome to ${APP_NAME} - ${APP_DESCRIPTION}. Discover government grants, subsidies, and welfare schemes with AI.`,
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#1E1F4B] sm:text-5xl md:text-6xl"> 
            {/* Dark Indigo Heading as per specific request */}
            Find Government Grants <span className="text-primary">You Deserve</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#616161] max-w-2xl mx-auto">
            {/* Slate Subtext */}
            {APP_NAME} helps you discover government grants, subsidies, and welfare schemes you are eligible for — using conversational natural language search powered by Google Gemini AI.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-[#F9A826] text-white font-bold rounded-xl px-8 py-6 text-lg hover:bg-[#C77C02] transition-all shadow-md hover:shadow-lg"
              // Amber button, Darker Amber hover
            >
              <Link href="/grant-finder">Start Finding Grants</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why GovGrant AI? Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Why {APP_NAME}?</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {WHY_GOVGRANT_AI_ITEMS.map((item) => (
              <Card key={item.id} className="text-center shadow-lg rounded-xl hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-primary">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">How It Works</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <div key={step.id} className="flex flex-col items-center text-center p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-6 shadow-md">
                  <span className="text-2xl font-bold">{step.id}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Placeholder for a visual element if desired */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Accessible. Transparent. Empowering.</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Our mission is to simplify access to public welfare. We believe that everyone deserves to know about the support available to them.
            {APP_NAME} uses cutting-edge AI to bridge the information gap, making grant discovery intuitive and efficient.
          </p>
          <Image 
            src="https://placehold.co/1200x400.png" 
            alt="Diverse group of people benefiting from grants"
            width={1200}
            height={400}
            className="rounded-xl shadow-lg mx-auto"
            data-ai-hint="community diversity"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Loved by Users Worldwide</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
