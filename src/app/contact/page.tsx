
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { APP_NAME, FAQ_ITEMS } from '@/lib/constants';
// import type { Metadata } from 'next'; // Metadata for client components needs different handling
import { Mail, HelpCircle, MessageSquare, Phone } from 'lucide-react'; // Added more icons

// export const metadata: Metadata = { // This won't work directly in client component like this
//   title: `Contact Us | ${APP_NAME}`,
//   description: `Get in touch with the ${APP_NAME} team or find answers to frequently asked questions.`,
// };

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500, "Message cannot exceed 500 characters."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // TODO: Implement actual form submission logic (e.g., API call)
  function onSubmit(data: ContactFormValues) {
    console.log("Contact form submitted:", data);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    form.reset(); // Reset form after submission
  }

  return (
    <div className="bg-background">
      {/* Header Section */}
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <Mail className="mx-auto h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-6 text-xl leading-8 text-foreground max-w-2xl mx-auto">
            Have questions or feedback? We&apos;d love to hear from you. Reach out through the form below or check our FAQs.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl shadow-xl border border-border">
            <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center">
              <MessageSquare size={28} className="mr-3 text-accent" /> Send us a Message
            </h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Regarding grant information..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your detailed message..."
                          className="resize-none"
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-lg py-6" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>

          {/* FAQ Section */}
          <div className="mt-12 md:mt-0">
            <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center">
              <HelpCircle size={28} className="mr-3 text-accent" /> Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {FAQ_ITEMS.map((faq) => (
                <AccordionItem key={faq.id} value={`item-${faq.id}`} className="border-b border-border">
                  <AccordionTrigger className="py-4 text-left hover:no-underline text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-0 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-12 p-6 bg-secondary/50 rounded-xl border border-border">
                 <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                    <Phone size={24} className="mr-3 text-accent" /> Other Ways to Reach Us
                </h3>
                <p className="text-muted-foreground mb-2">
                    <strong>Email Support:</strong> <a href="mailto:support@govgrant.ai" className="text-accent hover:underline">support@govgrant.ai</a>
                </p>
                <p className="text-muted-foreground">
                    <strong>Press Inquiries:</strong> <a href="mailto:press@govgrant.ai" className="text-accent hover:underline">press@govgrant.ai</a>
                </p>
                <p className="text-muted-foreground mt-4">
                    Our team typically responds within 24-48 business hours.
                </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
