import { useState, useCallback } from 'react';

type BibleData = Record<string, Record<string, Record<string, string>>>;

export function useBible() {
  const [versions, setVersions] = useState<Record<string, BibleData>>({});

  const loadVersion = useCallback(async (alias: string, path: string) => {
    const res = await fetch(path);
    const json = await res.json();
    setVersions(prev => ({ ...prev, [alias]: json }));
  }, []);

  const getVerse = useCallback((version: string, book: string, chapter: string, verse: string) => {
    return versions?.[version]?.[book]?.[chapter]?.[verse] || '';
  }, [versions]);

  return {
    loadVersion,
    getVerse,
    availableVersions: Object.keys(versions),
  };
} 