
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { APP_NAME, TEAM_MEMBERS, COMPANY_VALUES } from '@/lib/constants';
import type { Metadata } from 'next';
import { Target, Users, Handshake } from 'lucide-react'; // Removed Eye, ShieldCheck as they come from COMPANY_VALUES

export const metadata: Metadata = {
  title: `About Us | ${APP_NAME}`,
  description: `Learn about the mission, team, and values of ${APP_NAME}. We are dedicated to democratizing access to public welfare schemes.`,
};

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <Target className="mx-auto h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Our Mission
          </h1>
          <p className="mt-6 text-xl leading-8 text-foreground max-w-3xl mx-auto">
            At {APP_NAME}, our mission is to democratize access to public welfare schemes. We believe that information about government grants and subsidies should be easily accessible and understandable for everyone, everywhere.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-lg text-foreground mb-4">
                {APP_NAME} was born from a simple idea: what if finding and applying for government support wasn't a complex, overwhelming process? We saw countless individuals and organizations missing out on valuable opportunities simply because the information was fragmented, hard to navigate, or hidden behind bureaucratic language.
              </p>
              <p className="text-lg text-foreground">
                Leveraging the power of Artificial Intelligence, specifically Google Gemini, we set out to build a platform that is not only intelligent but also intuitive, user-friendly, and trustworthy. We are passionate about empowering people by connecting them with the resources they need to achieve their goals, whether it's furthering education, launching a business, securing housing, or improving community well-being.
              </p>
            </div>
            <div>
              <Image
                src="https://placehold.co/600x400.png"
                alt="Team working collaboratively"
                width={600}
                height={400}
                className="rounded-xl shadow-xl"
                data-ai-hint="team collaboration"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <Users className="mx-auto h-12 w-12 text-primary mb-4" />
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Meet the Team</h2>
          <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            We are a passionate group of developers, designers, and researchers committed to making a positive impact.
            (This is placeholder content.)
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TEAM_MEMBERS.map((member) => (
              <Card key={member.id} className="text-center shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 w-full">
                    <Image
                    src={member.imageUrl}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={member.dataAiHint}
                    />
                </div>
                <CardHeader className="pt-6">
                  <CardTitle className="text-xl font-semibold text-primary">{member.name}</CardTitle>
                  <p className="text-sm text-accent">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Handshake className="mx-auto h-12 w-12 text-primary mb-4" />
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {COMPANY_VALUES.map((value) => (
              <Card key={value.id} className="text-center p-6 shadow-lg rounded-xl border-t-4 border-primary">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
