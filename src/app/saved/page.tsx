
"use client";

import { useState, useEffect } from 'react';
import { GrantCard } from '@/components/GrantCard';
import type { SavedGrant } from '@/types';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useToast } from "@/hooks/use-toast";
import { Button } from '@/components/ui/button';
import { BookmarkX, Trash2 } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { APP_NAME } from '@/lib/constants';

// Note: Metadata for client components should be defined in a parent server component or layout.
// This page relies on layout.tsx for general metadata.

export default function SavedGrantsPage() {
  const [savedGrants, setSavedGrants] = useLocalStorage<SavedGrant[]>('savedGrants', []);
  const [isClient, setIsClient] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsClient(true); // Component has mounted, localStorage is available
  }, []);

  const handleUnsaveGrant = (grantId: string) => {
    setSavedGrants(savedGrants.filter(g => g.id !== grantId));
    toast({ title: "Grant Removed", description: "The grant has been removed from your saved list." });
  };

  const handleUpdateNotes = (grantId: string, notes: string) => {
    setSavedGrants(
      savedGrants.map(g => (g.id === grantId ? { ...g, notes } : g))
    );
    // Toast for notes saved is handled in GrantCard itself
  };

  const handleClearAllSavedGrants = () => {
    setSavedGrants([]);
    toast({ title: "All Saved Grants Cleared", description: "Your list of saved grants is now empty."});
  }

  if (!isClient) {
    // Render nothing or a loading indicator SSR/Client mismatch
    return <div className="container mx-auto px-4 py-8 md:py-12 text-center">Loading saved grants...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="mb-12 flex flex-col sm:flex-row justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-primary">Saved Grants</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Review and manage grants you've saved for later.
          </p>
        </div>
        {savedGrants.length > 0 && (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" className="mt-4 sm:mt-0">
                <Trash2 size={16} className="mr-2" /> Clear All Saved Grants
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete all your saved grants.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleClearAllSavedGrants} className="bg-destructive hover:bg-destructive/90">
                  Yes, delete all
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </header>

      {savedGrants.length === 0 ? (
        <div className="text-center py-10">
          <BookmarkX className="mx-auto h-16 w-16 text-muted-foreground mb-6" />
          <h2 className="text-2xl font-semibold text-foreground mb-2">No Saved Grants Yet</h2>
          <p className="text-muted-foreground mb-6">
            Start by finding grants on the Grant Finder page and save them to review here.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <a href="/grant-finder">Find Grants</a>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedGrants.map((grant) => (
            <GrantCard
              key={grant.id}
              grant={grant}
              isSavedView={true}
              onUnsave={handleUnsaveGrant}
              onUpdateNotes={handleUpdateNotes}
            />
          ))}
        </div>
      )}
    </div>
  );
}

