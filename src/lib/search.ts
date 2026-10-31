import { documents, Document } from './documents';

export interface SearchResult {
  document: Document;
  score: number;
  relevantPassage: string;
}

export function searchDocuments(query: string): SearchResult[] {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const normalizedQuery = query.toLowerCase().trim();
  const queryWords = normalizedQuery.split(/\s+/).filter(word => word.length > 2);

  if (queryWords.length === 0) {
    return [];
  }

  const results: SearchResult[] = documents.map(doc => {
    const normalizedContent = doc.content.toLowerCase();
    const normalizedTitle = doc.title.toLowerCase();
    const normalizedSection = (doc.section || '').toLowerCase();

    let score = 0;
    let relevantPassage = '';

    // Count word matches in content
    const contentMatches = queryWords.filter(word => normalizedContent.includes(word)).length;
    const titleMatches = queryWords.filter(word => normalizedTitle.includes(word)).length;
    const sectionMatches = queryWords.filter(word => normalizedSection.includes(word)).length;

    // Score calculation: title and section matches are weighted higher
    score = (contentMatches * 1) + (titleMatches * 3) + (sectionMatches * 2);

    // Extract relevant passage (first sentence containing matched words)
    if (score > 0) {
      const sentences = doc.content.split(/[.!?]+/);
      for (const sentence of sentences) {
        const normalizedSentence = sentence.toLowerCase();
        const sentenceMatches = queryWords.filter(word => normalizedSentence.includes(word)).length;
        if (sentenceMatches >= Math.min(2, queryWords.length)) {
          relevantPassage = sentence.trim();
          break;
        }
      }

      // If no good sentence found, use first 200 characters
      if (!relevantPassage) {
        relevantPassage = doc.content.substring(0, 200) + '...';
      }
    }

    return {
      document: doc,
      score,
      relevantPassage
    };
  });

  // Filter out results with no matches and sort by score (descending)
  return results
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5); // Return top 5 results
}

export function validateQuestion(question: string): { valid: boolean; error?: string } {
  if (!question || question.trim().length === 0) {
    return { valid: false, error: 'Please enter a question' };
  }

  if (question.trim().length < 5) {
    return { valid: false, error: 'Question is too short. Please provide more details.' };
  }

  if (question.trim().length > 500) {
    return { valid: false, error: 'Question is too long. Please keep it under 500 characters.' };
  }

  return { valid: true };
}
