import { SearchResult } from './search';

export interface AIResponse {
  answer: string;
  sources: SearchResult[];
  hasAIGenerated: boolean;
  disclaimer?: string;
}

export async function generateAnswer(
  question: string,
  searchResults: SearchResult[]
): Promise<AIResponse> {
  // Check if AI API is configured
  const hasAIConfigured = process.env.GEMMA_API_KEY && process.env.GEMMA_API_ENDPOINT;

  if (!hasAIConfigured) {
    // Fallback: Use document search only without AI generation
    return generateFallbackAnswer(question, searchResults);
  }

  try {
    // AI integration would go here when API access is available
    // For now, we'll use the fallback
    return generateFallbackAnswer(question, searchResults);
  } catch (error) {
    console.error('AI generation failed:', error);
    return generateFallbackAnswer(question, searchResults);
  }
}

function generateFallbackAnswer(question: string, searchResults: SearchResult[]): AIResponse {
  if (searchResults.length === 0) {
    return {
      answer: "I couldn't find any information in the available documents that answers your question. The document collection may not contain information about this specific topic. Please try rephrasing your question or contact the relevant government agency directly for assistance.",
      sources: [],
      hasAIGenerated: false,
      disclaimer: "AI generation is not currently enabled. This response is based on document search only."
    };
  }

  // Build a response from the search results
  const topResults = searchResults.slice(0, 3);
  let answer = "Based on the available government documents, here's what I found:\n\n";

  topResults.forEach((result, index) => {
    answer += `${index + 1}. ${result.relevantPassage}\n\n`;
  });

  answer += "Please refer to the source documents below for complete information and official requirements.";

  return {
    answer,
    sources: topResults,
    hasAIGenerated: false,
    disclaimer: "AI generation is not currently enabled. This response is based on document search only."
  };
}

// Future function for Gemma 4 integration when API access is available
/*
async function generateWithGemma4(question: string, searchResults: SearchResult[]): Promise<AIResponse> {
  const apiKey = process.env.GEMMA_API_KEY;
  const apiEndpoint = process.env.GEMMA_API_ENDPOINT;

  if (!apiKey || !apiEndpoint) {
    throw new Error('Gemma 4 API credentials not configured');
  }

  // Prepare context from search results
  const context = searchResults.map(result => 
    `Document: ${result.document.title}\n` +
    `Source: ${result.document.organization}\n` +
    `Section: ${result.document.section || 'N/A'}\n` +
    `Content: ${result.relevantPassage}\n`
  ).join('\n');

  const prompt = `You are a helpful assistant that answers questions about Kenyan government services using only the provided documents. 

Question: ${question}

Available Documents:
${context}

Instructions:
- Answer the question using ONLY the information provided in the documents above.
- Do not make up information or add details not found in the documents.
- If the documents don't contain enough information to answer the question, clearly state that.
- Explain requirements in plain, simple language.
- Reference the source documents in your answer.
- Acknowledge uncertainty and missing information.
- Never fabricate citations or claim to have checked documents you did not receive.

Answer:`;

  const response = await fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'gemma-4',
      prompt: prompt,
      max_tokens: 1000,
      temperature: 0.3
    })
  });

  if (!response.ok) {
    throw new Error(`Gemma 4 API error: ${response.statusText}`);
  }

  const data = await response.json();
  const answer = data.choices?.[0]?.message?.content || data.response || '';

  return {
    answer,
    sources: searchResults,
    hasAIGenerated: true
  };
}
*/
