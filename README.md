# CivicGuide AI

A Kenyan Government Services Guide that provides clear, source-grounded answers about government requirements from official documents. Built for a hackathon, this application helps citizens understand public services like national IDs, passports, birth certificates, and more.

## Overview

CivicGuide AI is a web application that:
- Answers questions about Kenyan government services using official documents
- Provides source citations with direct links to government publications
- Focuses on IDs, passports, birth certificates, and other essential services
- Uses a document search system with AI-powered response generation (when configured)

## Tech Stack

- **Framework**: Next.js 16.4.3 with React 19.3.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with Turbopack
- **Runtime**: Node.js

## Project Structure

```
fiji/
├── src/
│   ├── app/
│   │   ├── api/ask/
│   │   │   └── route.ts          # API endpoint for processing questions
│   │   ├── global.css            # Global styles
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Home page with chat interface
│   ├── components/
│   │   ├── AnswerCard.tsx        # Component for displaying answers
│   │   ├── ChatInterface.tsx     # Main chat input and suggestion UI
│   │   └── SourceCitation.tsx    # Component for displaying document sources
│   └── lib/
│       ├── ai.ts                 # AI response generation logic
│       ├── documents.ts          # Government document database
│       └── search.ts             # Document search and validation
├── .env                          # Environment variables (GEMMA_API_KEY, GEMMA_API_ENDPOINT)
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies and scripts
└── tsconfig.json                 # TypeScript configuration
```

## Key Features

### Document Search System
- Keyword-based search across official Kenyan government documents
- Weighted scoring for title, section, and content matches
- Extraction of relevant passages from documents
- Returns top 5 most relevant results

### Knowledge Base
The application includes information from official sources including:
- National Registration Bureau (ID registration, duplicate IDs, change of particulars)
- Department of Civil Registration Services (birth certificates)
- Directorate of Immigration Services (passports)
- Ministry of Health (service delivery charter)
- Office of the President (citizens' service charter)
- eCitizen onboarding processes

### Response Generation
- **Fallback Mode**: When AI is not configured, returns relevant document passages directly
- **AI Mode**: (Planned) Integration with Gemma 4 API for generating comprehensive answers from search results
- All responses include source citations with links to original documents

### User Interface
- Clean, modern chat interface
- Suggested questions for quick access
- Loading states and error handling
- Responsive design with Tailwind CSS
- Blue gradient theme with professional appearance

## Getting Started

### Prerequisites
- Node.js (v20 or higher recommended)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository and navigate to the project directory
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (optional for basic functionality):
```bash
# Create a .env file in the root directory
GEMMA_API_KEY=your_api_key_here
GEMMA_API_ENDPOINT=your_api_endpoint_here
```

Note: The application works without AI configuration using the fallback document search mode.

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Building for Production

```bash
npm run build
npm start
```

## API Reference

### POST /api/ask

Processes a user question and returns an answer with sources.

**Request Body:**
```json
{
  "question": "What do I need to apply for a national ID?"
}
```

**Response:**
```json
{
  "answer": "Based on the available government documents...",
  "sources": [
    {
      "document": {
        "id": "nrb-first-time-id",
        "title": "Requirements for First Time ID Registration",
        "organization": "National Registration Bureau...",
        "sourceUrl": "https://...",
        "date": "December 2024",
        "section": "First Time ID Registration",
        "content": "..."
      },
      "score": 5,
      "relevantPassage": "..."
    }
  ],
  "hasAIGenerated": false,
  "disclaimer": "AI generation is not currently enabled..."
}
```

## Configuration

### Environment Variables

- `GEMMA_API_KEY`: API key for Gemma 4 AI model (optional)
- `GEMMA_API_ENDPOINT`: API endpoint for Gemma 4 (optional)

When these are not configured, the application operates in fallback mode using document search only.

### Next.js Configuration

The application uses Turbopack for faster development builds and includes experimental agent feedback for Next.js development.

## Adding New Documents

To add new government documents to the knowledge base, edit `src/lib/documents.ts`:

```typescript
{
  id: "unique-id",
  title: "Document Title",
  organization: "Government Agency Name",
  sourceUrl: "https://official-source.gov.ke",
  date: "2024",
  section: "Section Name",
  content: "Full document content..."
}
```

## Development

### Code Style
- TypeScript with strict mode enabled
- Tailwind CSS for styling
- React functional components with hooks
- Path aliases: `@/*` maps to `./src/*`

### Scripts
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Future Enhancements

- Full AI integration with Gemma 4 for comprehensive answer generation
- Expanded document database covering more government services
- Multi-language support (Swahili)
- User feedback system for improving answers
- Real-time document updates from government sources

## Disclaimer

This application provides general information based on official government documents and is not a substitute for legal advice or confirmation from the responsible government agency. Always verify requirements directly with the relevant government office before taking action.

## License

This project was built for a hackathon and is provided as-is for educational purposes.

## Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Information sourced from official Kenyan government websites and publications
- Inspired by the need for accessible government service information
