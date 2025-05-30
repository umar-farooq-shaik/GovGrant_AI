
"use client";

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea'; // For notes on saved grants
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Save, Share2, Trash2, Info } from 'lucide-react';
import type { Grant, SavedGrant } from '@/types';
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

interface GrantCardProps {
  grant: Grant | SavedGrant;
  isSavedView?: boolean; // To differentiate display/actions on /saved page
  onSave?: (grant: Grant) => void;
  onUnsave?: (grantId: string) => void;
  onUpdateNotes?: (grantId: string, notes: string) => void;
}

export function GrantCard({ grant, isSavedView = false, onSave, onUnsave, onUpdateNotes }: GrantCardProps) {
  const [notes, setNotes] = useState((grant as SavedGrant).notes || '');
  const { toast } = useToast();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: grant.title,
          text: `Check out this grant: ${grant.title}\n${grant.summary}`,
          url: grant.sourceLink,
        });
        toast({ title: "Shared successfully!" });
      } catch (error) {
        console.error('Error sharing:', error);
        toast({ title: "Could not share", description: "Please try copying the link.", variant: "destructive" });
      }
    } else {
      navigator.clipboard.writeText(grant.sourceLink);
      toast({ title: "Link Copied!", description: "Grant source link copied to clipboard." });
    }
  };
  
  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value);
  };

  const handleSaveNotes = () => {
    if (onUpdateNotes) {
      onUpdateNotes(grant.id, notes);
      toast({ title: "Notes Saved", description: "Your notes for this grant have been updated."});
    }
  };

  return (
    <Card className="flex flex-col h-full shadow-lg rounded-xl overflow-hidden border border-indigo-200 hover:shadow-xl transition-shadow">
      <CardHeader className="bg-indigo-50 p-4">
        <CardTitle className="text-lg font-semibold text-indigo-700">{grant.title}</CardTitle>
        {(grant as SavedGrant).savedDate && isSavedView && (
          <CardDescription className="text-xs text-indigo-500">
            Saved on: {new Date((grant as SavedGrant).savedDate).toLocaleDateString()}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="p-4 flex-grow space-y-3">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-1">Summary</h4>
          <p className="text-sm text-gray-600 leading-relaxed">{grant.summary}</p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-1">Eligibility</h4>
          <p className="text-sm text-gray-600 leading-relaxed">{grant.eligibility}</p>
        </div>
        {grant.geminiAnswer && (
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-1 flex items-center">
              <Info size={14} className="mr-1 text-purple-600" />
              AI Insights
            </h4>
            <p className="text-sm text-gray-600 italic bg-purple-50 p-2 rounded-md border border-purple-200">
              {grant.geminiAnswer}
            </p>
          </div>
        )}
        {isSavedView && (
          <div className="pt-2">
            <Label htmlFor={`notes-${grant.id}`} className="text-sm font-medium text-gray-700 mb-1">My Notes</Label>
            <Textarea
              id={`notes-${grant.id}`}
              value={notes}
              onChange={handleNotesChange}
              placeholder="Add your personal notes here..."
              className="mt-1 text-sm"
              rows={3}
            />
            <Button onClick={handleSaveNotes} size="sm" variant="outline" className="mt-2">Save Notes</Button>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 sm:space-x-2">
        <Button
          variant="link"
          asChild
          className="text-blue-600 hover:text-blue-800 p-0 h-auto text-sm"
        >
          <Link href={grant.sourceLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} className="mr-1" />
            View Source
          </Link>
        </Button>
        <div className="flex space-x-2">
          {!isSavedView && onSave && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => onSave(grant as Grant)}
              className="text-sky-600 border-sky-600 hover:bg-sky-50 hover:text-sky-700" // Sky blue as per request
            >
              <Save size={16} className="mr-1" /> Save
            </Button>
          )}
          {isSavedView && onUnsave && (
             <Button
              variant="outline"
              size="sm"
              onClick={() => onUnsave(grant.id)}
              className="text-red-600 border-red-600 hover:bg-red-50 hover:text-red-700"
            >
              <Trash2 size={16} className="mr-1" /> Delete
            </Button>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={handleShare}
            className="text-slate-600 border-slate-600 hover:bg-slate-100 hover:text-slate-700" // Slate gray
          >
            <Share2 size={16} className="mr-1" /> Share
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

// Minimal Label component if not imported from ui/label to avoid circular dependency or if needed standalone
const Label = ({ htmlFor, className, children }: { htmlFor?: string; className?: string; children: React.ReactNode }) => (
  <label htmlFor={htmlFor} className={`block text-sm font-medium text-gray-700 ${className}`}>
    {children}
  </label>
);
