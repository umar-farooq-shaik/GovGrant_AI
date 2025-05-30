
// GrantSearch flow definition.

'use server';

/**
 * @fileOverview A grant search AI agent. It takes user's criteria and a free-form question to find relevant government grants.
 *
 * - grantSearch - A function that handles the grant search process.
 * - GrantSearchInput - The input type for the grantSearch function.
 * - GrantSearchOutput - The return type for the grantSearch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GrantSearchInputSchema = z.object({
  country: z.string().describe('The country of the user.'),
  state: z.string().optional().describe('The state or province within the country, if specified by the user.'),
  age: z.number().describe('The age of the user.'),
  profession: z.string().describe('The profession of the user.'),
  income: z.number().describe('The income of the user.'),
  currency: z.string().describe('The currency of the user income.'),
  goal: z.string().describe('The goal of the user (e.g., education, farming, housing, health, startup).'),
  query: z.string().describe('The free-form question from the user.'),
});

export type GrantSearchInput = z.infer<typeof GrantSearchInputSchema>;

const GrantSchema = z.object({
  title: z.string().describe('The title of the grant.'),
  summary: z.string().describe('A short summary of the grant.'),
  eligibility: z.string().describe('The eligibility criteria for the grant.'),
  sourceLink: z.string().describe('The URL of the grant source. This must be a valid URL string.'),
});

const GrantSearchOutputSchema = z.array(GrantSchema).describe('An array of matching government grants. If no grants are found, this MUST be an empty array.');

export type GrantSearchOutput = z.infer<typeof GrantSearchOutputSchema>;

export async function grantSearch(input: GrantSearchInput): Promise<GrantSearchOutput> {
  return grantSearchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'grantSearchPrompt',
  input: {schema: GrantSearchInputSchema},
  output: {schema: GrantSearchOutputSchema},
  prompt: `You are an AI assistant helping users find relevant government grants based on their criteria and question.
User Criteria:
Country: {{{country}}}
{{#if state}}State/Province: {{{state}}}{{/if}}
Age: {{{age}}}
Profession: {{{profession}}}
Income: {{{income}}} {{{currency}}}
Goal: {{{goal}}}

Question: {{{query}}}

Based *only* on the information you can find, identify government grants that match all the user's criteria and question.
For each matching grant, provide:
- title: The title of the grant.
- summary: A short summary of the grant.
- eligibility: The key eligibility criteria for the grant.
- sourceLink: The direct URL to the official grant information page.

If you find one or more grants, return them as an array of objects, where each object adheres to the structure described above.
If, after a thorough search, you find *NO* grants that accurately match the user's criteria and question, you MUST return an empty array ([]). Do not invent grants or provide placeholder information if no real grants are found.
`,
});

const grantSearchFlow = ai.defineFlow(
  {
    name: 'grantSearchFlow',
    inputSchema: GrantSearchInputSchema,
    outputSchema: GrantSearchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return Array.isArray(output) ? output : [];
  }
);
