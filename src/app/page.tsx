
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TestimonialCard } from '@/components/TestimonialCard';
import { APP_NAME, APP_DESCRIPTION, WHY_GOVGRANT_AI_ITEMS, HOW_IT_WORKS_STEPS, TESTIMONIALS } from '@/lib/constants.tsx';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Home | ${APP_NAME}`,
  description: `Welcome to ${APP_NAME} - ${APP_DESCRIPTION}. Discover government grants, subsidies, and welfare schemes with AI.`,
};

export default function HomePage() {
  return (
    <div className="flex flex-col bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-light-lavender to-lilac py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-deep-indigo sm:text-5xl md:text-6xl">
            Find Government Grants <span className="text-primary">You Deserve</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-gray max-w-2xl mx-auto">
            {APP_NAME} helps you discover government grants, subsidies, and welfare schemes you are eligible for — using conversational natural language search powered by Google Gemini AI.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-amber hover:bg-darker-amber text-white font-bold rounded-xl px-6 py-3 text-lg transition-all shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Link href="/grant-finder">Start Finding Grants</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why GovGrant AI? Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-16">Why {APP_NAME}?</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {WHY_GOVGRANT_AI_ITEMS.map((item) => (
              <Card key={item.id} className="text-center shadow-sm rounded-xl hover:shadow-md transition-shadow bg-card border border-border">
                <CardHeader className="pt-8">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-5">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-8">
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-16">How It Works</h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <div key={step.id} className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-lg transition-shadow border border-transparent hover:border-border">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground mb-6 shadow-md">
                  <span className="text-3xl font-bold">{step.id}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Accessible. Transparent. Empowering.</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Our mission is to simplify access to public welfare. We believe that everyone deserves to know about the support available to them.
            {APP_NAME} uses cutting-edge AI to bridge the information gap, making grant discovery intuitive and efficient.
          </p>
          <Image 
            src="https://miro.medium.com/v2/resize:fit:1400/0*bpX1agbaH8NtaZ8C" 
            alt="Illustrative image showing people accessing government schemes and benefits"
            width={1200}
            height={400}
            className="rounded-xl shadow-lg mx-auto border"
            data-ai-hint="government schemes benefits"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-16">Loved by Users Worldwide</h2>
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
