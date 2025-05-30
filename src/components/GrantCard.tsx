
"use client";

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Save, Share2, Trash2, Info } from 'lucide-react';
import type { Grant, SavedGrant } from '@/types';
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label"; // Ensure Label is imported

interface GrantCardProps {
  grant: Grant | SavedGrant;
  isSavedView?: boolean;
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
    <Card className="flex flex-col h-full shadow-sm rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow bg-card"> {/* White BG, border-gray-200 */}
      <CardHeader className="bg-muted/30 p-4"> {/* Light gray header, or white if preferred */}
        <CardTitle className="text-lg font-semibold text-primary">{grant.title}</CardTitle> {/* Indigo, bold */}
        {(grant as SavedGrant).savedDate && isSavedView && (
          <CardDescription className="text-xs text-muted-foreground">
            Saved on: {new Date((grant as SavedGrant).savedDate).toLocaleDateString()}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="p-4 flex-grow space-y-3">
        <div>
          <h4 className="text-sm font-medium text-foreground mb-1">Summary</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{grant.summary}</p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-foreground mb-1">Eligibility</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{grant.eligibility}</p>
        </div>
        {grant.geminiAnswer && (
          <div>
            <h4 className="text-sm font-medium text-foreground mb-1 flex items-center">
              <Info size={14} className="mr-1 text-primary" /> {/* Icon color can be primary or accent */}
              AI Insights
            </h4>
            <p className="text-sm text-slate-gray italic bg-primary/5 p-2 rounded-md border border-primary/20"> {/* Italic, gray #616161 */}
              {grant.geminiAnswer}
            </p>
          </div>
        )}
        {isSavedView && (
          <div className="pt-2">
            <Label htmlFor={`notes-${grant.id}`} className="text-sm font-medium text-foreground mb-1">My Notes</Label>
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
      <CardFooter className="p-4 bg-muted/50 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 sm:space-x-2">
        <Button
          variant="link"
          asChild
          className="text-blue-600 hover:text-blue-700 hover:underline p-0 h-auto text-sm" /* Blue, underline on hover */
        >
          <Link href={grant.sourceLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} className="mr-1" />
            View Source
          </Link>
        </Button>
        <div className="flex space-x-2">
          {!isSavedView && onSave && (
            <Button
              variant="default" // Use default variant for solid color
              size="sm"
              onClick={() => onSave(grant as Grant)}
              className="bg-sky-blue text-white hover:bg-sky-blue/90" // Sky blue #42A5F5
            >
              <Save size={16} className="mr-1" /> Save
            </Button>
          )}
          {isSavedView && onUnsave && (
             <Button
              variant="destructive" // Use destructive for delete
              size="sm"
              onClick={() => onUnsave(grant.id)}
              // Destructive variant handles its own styling
            >
              <Trash2 size={16} className="mr-1" /> Delete
            </Button>
          )}
          <Button
            variant="secondary" // Use secondary for slate gray button
            size="sm"
            onClick={handleShare}
            className="bg-slate-500 text-white hover:bg-slate-600" // Slate gray
          >
            <Share2 size={16} className="mr-1" /> Share
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
