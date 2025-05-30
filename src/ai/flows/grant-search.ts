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
  sourceLink: z.string().url().describe('The URL of the grant source.'),
});

const GrantSearchOutputSchema = z.array(GrantSchema).describe('An array of matching government grants.');

export type GrantSearchOutput = z.infer<typeof GrantSearchOutputSchema>;

export async function grantSearch(input: GrantSearchInput): Promise<GrantSearchOutput> {
  return grantSearchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'grantSearchPrompt',
  input: {schema: GrantSearchInputSchema},
  output: {schema: GrantSearchOutputSchema},
  prompt: `You are an AI assistant helping users find relevant government grants based on their criteria and question.\n\nUser Criteria:\nCountry: {{{country}}}\nAge: {{{age}}}\nProfession: {{{profession}}}\nIncome: {{{income}}} {{{currency}}}\nGoal: {{{goal}}}\n\nQuestion: {{{query}}}\n\nFind government grants that match the user's criteria and question. Provide a summary, eligibility criteria, and the source link for each grant.\n\n{{#if grants}}
  Here are some grants that match your criteria:
  {{#each grants}}
  - Title: {{this.title}}
    Summary: {{this.summary}}
    Eligibility: {{this.eligibility}}
    Source Link: {{this.sourceLink}}
  {{/each}}
{{else}}
  There are no grants that match your criteria.
{{/if}}`,
});

const grantSearchFlow = ai.defineFlow(
  {
    name: 'grantSearchFlow',
    inputSchema: GrantSearchInputSchema,
    outputSchema: GrantSearchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
