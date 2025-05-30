
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
import { COUNTRIES, CURRENCIES, GOALS } from "@/lib/constants.tsx";
import type { GrantSearchInput } from "@/ai/flows/grant-search";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, DollarSign } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import type { State } from "@/types";

const formSchema = z.object({
  country: z.string().min(1, "Country is required"),
  state: z.string().optional(),
  age: z.union([z.coerce.number().min(0, "Age must be positive").optional(), z.literal("")]).optional(),
  profession: z.string().optional(),
  income: z.union([z.coerce.number().min(0, "Income must be positive").optional(), z.literal("")]).optional(),
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
      state: "",
      age: "",
      profession: "",
      income: "",
      currency: CURRENCIES[0]?.code || "USD", 
      goal: "",
      query: "",
    },
  });

  const selectedCountryName = form.watch("country");
  const [availableStates, setAvailableStates] = useState<State[]>([]);

  useEffect(() => {
    if (selectedCountryName) {
      const countryData = COUNTRIES.find(c => c.name === selectedCountryName);
      setAvailableStates(countryData?.states || []);
      form.setValue("state", ""); 
    } else {
      setAvailableStates([]);
      form.setValue("state", "");
    }
  }, [selectedCountryName, form]);

  function handleFormSubmit(values: SearchFormValues) {
    const inputForAI: GrantSearchInput = {
      country: values.country,
      state: values.state || undefined,
      age: typeof values.age === 'number' ? values.age : 0,
      profession: values.profession || "Not specified",
      income: typeof values.income === 'number' ? values.income : 0,
      currency: values.currency || "USD",
      goal: values.goal,
      query: values.query,
    };
    onSubmit(inputForAI);
  }

  return (
    <Card className="w-full shadow-xl rounded-xl border border-primary bg-card"> {/* Indigo border */}
      <CardHeader className="bg-primary text-primary-foreground rounded-t-xl p-6"> {/* Deep Indigo BG, White text */}
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
                    <FormLabel className="font-bold text-primary">Country</FormLabel> {/* Bold, Indigo text */}
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-gray-300 focus:ring-primary focus:border-primary"> {/* Indigo focus ring */}
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
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-primary">State/Province (Optional)</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      disabled={availableStates.length === 0 && !!selectedCountryName}
                    >
                      <FormControl>
                        <SelectTrigger className="border-gray-300 focus:ring-primary focus:border-primary" disabled={availableStates.length === 0 && !!selectedCountryName}>
                          <SelectValue placeholder={availableStates.length > 0 ? "Select state/province" : (selectedCountryName ? "N/A for selected country" : "Select country first")} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {availableStates.map((state) => (
                          <SelectItem key={state.code} value={state.name}>
                            {state.name}
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
                    <FormLabel className="font-bold text-primary">Age (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter your age"
                        {...field}
                        value={field.value ?? ""}
                        onChange={e => field.onChange(e.target.value === "" ? "" : parseInt(e.target.value, 10))}
                        className="border-gray-300 focus:ring-primary focus:border-primary"
                      />
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
                    <FormLabel className="font-bold text-primary">Profession (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Student, Farmer, Entrepreneur" {...field} className="border-gray-300 focus:ring-primary focus:border-primary" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormItem className="md:col-span-2">
                <FormLabel className="font-bold text-primary">Income (Optional)</FormLabel>
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
                <div className="flex gap-2"> {/* Income and currency on same line */}
                  <FormField
                    control={form.control}
                    name="income"
                    render={({ field }) => (
                      <FormItem className="flex-grow">
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Amount"
                            {...field}
                            value={field.value ?? ""}
                            onChange={e => field.onChange(e.target.value === "" ? "" : parseInt(e.target.value, 10))}
                            className="border-gray-300 focus:ring-primary focus:border-primary"
                          />
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
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-gray-300 focus:ring-primary focus:border-primary">
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
                  <FormLabel className="font-bold text-primary">Primary Goal</FormLabel>
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
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      {/* Full width and centered text for trigger */}
                      <SelectTrigger className="w-full text-center border-gray-300 focus:ring-primary focus:border-primary">
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
                  <FormLabel className="font-bold text-primary">Your Question</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., 'Are there any health grants in Kenya for new mothers?' or 'Scholarships for engineering students in Germany'"
                      className="resize-none border-gray-300 focus:ring-primary focus:border-primary"
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
              className="w-full bg-teal hover:bg-darker-teal text-white font-bold transition-colors text-lg py-6 rounded-md" // Teal button
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
