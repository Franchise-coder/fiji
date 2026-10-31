import { Document } from '@/lib/documents';

interface SourceCitationProps {
  document: Document;
}

export default function SourceCitation({ document }: SourceCitationProps) {
  return (
    <div className="border-l-2 border-blue-500 pl-3 py-1">
      <p className="text-sm font-semibold text-gray-900">
        {document.title}
      </p>
      {document.section && (
        <p className="text-xs text-gray-600 mt-1">
          Section: {document.section}
        </p>
      )}
      <p className="text-xs text-gray-600 mt-1">
        {document.organization}
      </p>
      {document.date && (
        <p className="text-xs text-gray-500 mt-1">
          Date: {document.date}
        </p>
      )}
      <a
        href={document.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-blue-600 hover:text-blue-800 mt-1 inline-block underline"
      >
        View Source →
      </a>
    </div>
  );
}
