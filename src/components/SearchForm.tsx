
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { COUNTRIES, CURRENCIES, GOALS } from "@/lib/constants";
import type { GrantSearchInput } from "@/ai/flows/grant-search";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, DollarSign } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const formSchema = z.object({
  country: z.string().min(1, "Country is required"),
  age: z.coerce.number().min(0, "Age must be positive").optional(),
  profession: z.string().optional(),
  income: z.coerce.number().min(0, "Income must be positive").optional(),
  currency: z.string().optional(),
  goal: z.string().min(1, "Goal is required"),
  query: z.string().min(5, "Please provide a specific question.").max(300),
});

export type SearchFormValues = z.infer<typeof formSchema>;

interface SearchFormProps {
  onSubmit: (values: GrantSearchInput) => void;
  isLoading: boolean;
}

export function SearchForm({ onSubmit, isLoading }: SearchFormProps) {
  const form = useForm<SearchFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      country: "",
      age: undefined,
      profession: "",
      income: undefined,
      currency: CURRENCIES[0]?.code || "USD", // Default to first currency or USD
      goal: "",
      query: "",
    },
  });

  function handleFormSubmit(values: SearchFormValues) {
    const inputForAI: GrantSearchInput = {
      country: values.country,
      age: values.age || 0, // AI model expects number
      profession: values.profession || "Not specified",
      income: values.income || 0, // AI model expects number
      currency: values.currency || "USD",
      goal: values.goal,
      query: values.query,
    };
    onSubmit(inputForAI);
  }

  return (
    <Card className="w-full shadow-xl rounded-xl border border-indigo-500">
      <CardHeader className="bg-indigo-600 text-white rounded-t-xl p-6">
        <CardTitle className="text-2xl flex items-center">
          <Search size={28} className="mr-3" /> Find Your Grant
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-indigo-700">Country</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-gray-300 focus:ring-indigo-500">
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {COUNTRIES.map((country) => (
                          <SelectItem key={country.code} value={country.name}>
                            {country.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-indigo-700">Age (Optional)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Enter your age" {...field} onChange={e => field.onChange(e.target.value === '' ? undefined : +e.target.value)} className="border-gray-300 focus:ring-indigo-500" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="profession"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-indigo-700">Profession (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Student, Farmer, Entrepreneur" {...field} className="border-gray-300 focus:ring-indigo-500" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormItem>
                <FormLabel className="font-bold text-indigo-700">Income (Optional)</FormLabel>
                 <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <DollarSign className="inline h-4 w-4 ml-1 text-muted-foreground cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Provide your approximate annual income.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                <div className="flex gap-2">
                  <FormField
                    control={form.control}
                    name="income"
                    render={({ field }) => (
                      <FormItem className="flex-grow">
                        <FormControl>
                          <Input type="number" placeholder="Amount" {...field} onChange={e => field.onChange(e.target.value === '' ? undefined : +e.target.value)} className="border-gray-300 focus:ring-indigo-500" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="currency"
                    render={({ field }) => (
                      <FormItem className="w-1/3">
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-gray-300 focus:ring-indigo-500">
                              <SelectValue placeholder="Currency" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {CURRENCIES.map((currency) => (
                              <SelectItem key={currency.code} value={currency.code}>
                                {currency.code}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </FormItem>
            </div>
            
            <FormField
              control={form.control}
              name="goal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-indigo-700">Primary Goal</FormLabel>
                   <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Search className="inline h-4 w-4 ml-1 text-muted-foreground cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>What are you primarily seeking assistance for?</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-gray-300 focus:ring-indigo-500 text-center">
                        <SelectValue placeholder="Select your primary goal" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {GOALS.map((goal) => (
                        <SelectItem key={goal.id} value={goal.name}>
                          <div className="flex items-center">
                            {goal.icon && <goal.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
                            {goal.name}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="query"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-indigo-700">Your Question</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., 'Are there any health grants in Kenya for new mothers?' or 'Scholarships for engineering students in Germany'"
                      className="resize-none border-gray-300 focus:ring-indigo-500"
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Ask a specific question about the grants you are looking for.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              disabled={isLoading} 
              className="w-full bg-[#26A69A] text-white font-bold hover:bg-[#00796B] transition-colors text-lg py-6"
              // Teal button
            >
              {isLoading ? (
                <>
                  <Search className="mr-2 h-4 w-4 animate-spin" />
                  Finding Grants...
                </>
              ) : (
                 <>
                  <Search className="mr-2 h-4 w-4" />
                  Search for Grants
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
