'use server';

/**
 * @fileOverview A grant summarization AI agent.
 *
 * - summarizeGrant - A function that handles the grant summarization process.
 * - SummarizeGrantInput - The input type for the summarizeGrant function.
 * - SummarizeGrantOutput - The return type for the summarizeGrant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeGrantInputSchema = z.object({
  grantDetails: z.string().describe('The detailed information about the grant.'),
});
export type SummarizeGrantInput = z.infer<typeof SummarizeGrantInputSchema>;

const SummarizeGrantOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the grant details.'),
  eligibility: z.string().describe('Key eligibility criteria for the grant.'),
  citation: z.string().describe('The source or reference for the grant information.'),
});
export type SummarizeGrantOutput = z.infer<typeof SummarizeGrantOutputSchema>;

export async function summarizeGrant(input: SummarizeGrantInput): Promise<SummarizeGrantOutput> {
  return summarizeGrantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeGrantPrompt',
  input: {schema: SummarizeGrantInputSchema},
  output: {schema: SummarizeGrantOutputSchema},
  prompt: `You are an expert grant summarizer. Your task is to provide a concise summary, key eligibility criteria, and the source citation for the grant details provided.\n\nGrant Details: {{{grantDetails}}}\n\nSummary:\nEligibility:\nCitation:`,
});

const summarizeGrantFlow = ai.defineFlow(
  {
    name: 'summarizeGrantFlow',
    inputSchema: SummarizeGrantInputSchema,
    outputSchema: SummarizeGrantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
