import React, { useState } from 'react';
import ParallelViewer from './ParallelViewer';
import VersionSelector from './VersionSelector';
import { parseReference, BibleReference } from '../lib/bibleRefs';

export default function VerseSelector() {
  const [reference, setReference] = useState('');
  const [parsedRef, setParsedRef] = useState<BibleReference | null>(null);
  const [error, setError] = useState('');
  const [activeVersions, setActiveVersions] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const handleReferenceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = parseReference(reference);
    
    if (!parsed) {
      setError('Referência inválida. Exemplo: "gen 1:1" ou "john 3:16-18"');
      setParsedRef(null);
      setShowComparison(false);
      return;
    }

    setError('');
    setParsedRef(parsed);
    setShowComparison(true);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-medium">1. Selecione as versões para comparar</h3>
        <VersionSelector
          activeVersions={activeVersions}
          onVersionsChange={setActiveVersions}
        />
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">2. Digite a referência bíblica</h3>
        <form onSubmit={handleReferenceSubmit} className="space-y-2">
          <input
            type="text"
            className="w-full border rounded p-2"
            placeholder='Ex: "gen 1:1" ou "john 3:16-18"'
            value={reference}
            onChange={(e) => setReference(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
            disabled={!reference.trim() || activeVersions.length === 0}
          >
            Buscar versículos
          </button>
        </form>
      </div>

      {showComparison && parsedRef && (
        <div className="mt-8">
          <ParallelViewer
            book={parsedRef.book}
            chapter={parsedRef.chapter}
            verses={parsedRef.verses || []}
            versions={activeVersions}
          />
        </div>
      )}
    </div>
  );
} 