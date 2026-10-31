import { SearchResult } from '@/lib/search';
import SourceCitation from './SourceCitation';

interface AnswerCardProps {
  answer: string;
  sources: SearchResult[];
  hasAIGenerated: boolean;
  disclaimer?: string;
}

export default function AnswerCard({
  answer,
  sources,
  hasAIGenerated,
  disclaimer
}: AnswerCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Answer
          </h3>
          <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-line">
            {answer}
          </div>

          {disclaimer && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
              <p className="text-sm text-yellow-800">
                <span className="font-semibold">Note:</span> {disclaimer}
              </p>
            </div>
          )}

          {sources.length > 0 && (
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                Sources
              </h4>
              <div className="space-y-3">
                {sources.map((result, index) => (
                  <SourceCitation key={index} document={result.document} />
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md">
            <p className="text-xs text-gray-600 leading-relaxed">
              <span className="font-semibold">Disclaimer:</span> This application provides general information based on official government documents and is not a substitute for legal advice or confirmation from the responsible government agency. Always verify requirements directly with the relevant government office before taking action.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
