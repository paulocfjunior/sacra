import React, { useState } from 'react';
import ParallelViewer from './ParallelViewer';

const SAMPLE_BOOKS = ['Genesis', 'John'];
const SAMPLE_CHAPTERS = ['1', '2', '3'];
const SAMPLE_VERSES = ['1', '2', '3', '16'];
const AVAILABLE_VERSIONS = ['KJV', 'ARC'];

interface Selection {
  book: string;
  chapter: string;
  verses: string[];
  versions: string[];
}

export default function VerseSelector() {
  const [selection, setSelection] = useState<Selection>({
    book: SAMPLE_BOOKS[0],
    chapter: SAMPLE_CHAPTERS[0],
    verses: [SAMPLE_VERSES[0]],
    versions: [AVAILABLE_VERSIONS[0], AVAILABLE_VERSIONS[1]],
  });

  const [showComparison, setShowComparison] = useState(false);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium">Book</label>
          <select 
            className="w-full border rounded p-2"
            value={selection.book}
            onChange={(e) => setSelection(prev => ({ ...prev, book: e.target.value }))}
          >
            {SAMPLE_BOOKS.map(book => (
              <option key={book} value={book}>{book}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Chapter</label>
          <select 
            className="w-full border rounded p-2"
            value={selection.chapter}
            onChange={(e) => setSelection(prev => ({ ...prev, chapter: e.target.value }))}
          >
            {SAMPLE_CHAPTERS.map(chapter => (
              <option key={chapter} value={chapter}>{chapter}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Versions (select multiple)</label>
          <select 
            className="w-full border rounded p-2"
            multiple
            value={selection.versions}
            onChange={(e) => setSelection(prev => ({ 
              ...prev, 
              versions: Array.from(e.target.selectedOptions).map(opt => opt.value)
            }))}
          >
            {AVAILABLE_VERSIONS.map(version => (
              <option key={version} value={version}>{version}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Verses (select multiple)</label>
        <select 
          className="w-full border rounded p-2"
          multiple
          value={selection.verses}
          onChange={(e) => setSelection(prev => ({ 
            ...prev, 
            verses: Array.from(e.target.selectedOptions).map(opt => opt.value)
          }))}
        >
          {SAMPLE_VERSES.map(verse => (
            <option key={verse} value={verse}>{verse}</option>
          ))}
        </select>
      </div>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => setShowComparison(true)}
      >
        Ver comparativo
      </button>

      {showComparison && (
        <div className="mt-8">
          <ParallelViewer {...selection} />
        </div>
      )}
    </div>
  );
} 