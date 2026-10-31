import { NextRequest, NextResponse } from 'next/server';
import { searchDocuments, validateQuestion } from '@/lib/search';
import { generateAnswer } from '@/lib/ai';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { question } = body;

    // Validate the question
    const validation = validateQuestion(question);
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    // Search documents
    const searchResults = searchDocuments(question);

    // Generate answer
    const response = await generateAnswer(question, searchResults);

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error processing question:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your question. Please try again.' },
      { status: 500 }
    );
  }
}
