
"use client";

import { useState } from 'react';
import { SearchForm, type SearchFormValues } from '@/components/SearchForm';
import { GrantCard } from '@/components/GrantCard';
import { Loading } from '@/components/Loading';
import type { Grant, SavedGrant } from '@/types';
import { grantSearch, type GrantSearchInput, type GrantSearchOutput } from '@/ai/flows/grant-search';
import { useToast } from "@/hooks/use-toast";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { APP_NAME } from '@/lib/constants';

// Note: Metadata for client components should be defined in a parent server component or layout,
// or use the `generateMetadata` export if this were a server component.
// For simplicity in this client component, we'll rely on layout.tsx for general metadata.
// If specific dynamic metadata is needed, this page would need refactoring or a server component wrapper.


export default function GrantFinderPage() {
  const [searchResults, setSearchResults] = useState<Grant[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const [savedGrants, setSavedGrants] = useLocalStorage<SavedGrant[]>('savedGrants', []);

  const handleSearchSubmit = async (values: GrantSearchInput) => {
    setIsLoading(true);
    setError(null);
    setSearchResults([]); // Clear previous results

    try {
      // Simulate AI call if needed, or call actual AI function
      // const results = await new Promise<GrantSearchOutput>((resolve) => setTimeout(() => resolve(mockGrantResults(values)), 2000));
      console.log("Submitting to AI:", values);
      const results: GrantSearchOutput = await grantSearch(values);
      console.log("AI Results:", results);


      if (results && results.length > 0) {
        // The AI flow might return an object with a 'grants' array or just the array.
        // Based on GrantSearchOutputSchema, it's z.array(GrantSchema).
        const formattedResults = results.map((grant, index) => ({
          ...grant,
          id: grant.sourceLink || `grant-${Date.now()}-${index}`, // Ensure ID exists
          geminiAnswer: grant.summary, // Assuming AI provides a summary that can be used as "geminiAnswer"
        }));
        setSearchResults(formattedResults);
      } else {
        setSearchResults([]); // Ensure it's an empty array if no results
        toast({
            title: "No Grants Found",
            description: "Your search did not match any grants. Try broadening your criteria.",
            variant: "default",
        });
      }
    } catch (e) {
      console.error("Error searching grants:", e);
      setError("Failed to fetch grants. Please try again later.");
      toast({
        title: "Search Error",
        description: "An error occurred while searching for grants.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveGrant = (grantToSave: Grant) => {
    const alreadySaved = savedGrants.find(g => g.id === grantToSave.id);
    if (alreadySaved) {
      toast({ title: "Already Saved", description: "This grant is already in your saved list." });
      return;
    }
    const newSavedGrant: SavedGrant = { ...grantToSave, savedDate: new Date().toISOString(), notes: '' };
    setSavedGrants([...savedGrants, newSavedGrant]);
    toast({ 
        title: "Grant Saved!", 
        description: `${grantToSave.title} has been added to your saved grants.`,
        action: <CheckCircle2 className="text-green-500" />
    });
  };
  
  // Mock results for development if AI is not available
  // const mockGrantResults = (values: GrantSearchInput): GrantSearchOutput => {
  //   return [
  //     { title: `Grant for ${values.goal} in ${values.country}`, summary: 'This is a sample grant summary based on your query.', eligibility: `Must be ${values.age || 'any age'} and a ${values.profession || 'resident'}.`, sourceLink: '#', id: 'mock1' },
  //     { title: `Support Scheme for ${values.profession || 'citizens'}`, summary: 'Another sample scheme related to your interests.', eligibility: 'General eligibility criteria apply.', sourceLink: '#', id: 'mock2' },
  //   ];
  // };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-primary">Grant Finder</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Fill in your details and ask a question to find relevant government grants.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-1 lg:sticky lg:top-24">
          <SearchForm onSubmit={handleSearchSubmit} isLoading={isLoading} />
        </div>

        <div className="lg:col-span-2">
          {isLoading && <Loading text="Finding eligible grants..." className="mt-10" />}
          
          {error && (
             <Alert variant="destructive" className="mt-6">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {!isLoading && !error && searchResults.length === 0 && (
            <div className="mt-10 text-center">
              <Search className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground">
                No grants found yet. Use the form to start your search.
              </p>
            </div>
          )}
          
          {!isLoading && !error && searchResults.length > 0 && (
            <div className="space-y-6 mt-6 md:mt-0">
               <Alert variant="default" className="bg-green-50 border-green-500 text-green-700">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <AlertTitle className="font-semibold">Search Results</AlertTitle>
                <AlertDescription>
                  Found {searchResults.length} grant(s) matching your criteria. Review them below.
                </AlertDescription>
              </Alert>
              {searchResults.map((grant) => (
                <GrantCard key={grant.id} grant={grant} onSave={handleSaveGrant} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
