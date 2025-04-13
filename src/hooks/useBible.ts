import { useState } from 'react';

type BibleData = Record<string, Record<string, Record<string, string>>>;

export function useBible() {
  const [versions, setVersions] = useState<Record<string, BibleData>>({});

  async function loadVersion(alias: string, path: string) {
    const res = await fetch(path);
    const json = await res.json();
    setVersions(prev => ({ ...prev, [alias]: json }));
  }

  function getVerse(version: string, book: string, chapter: string, verse: string) {
    return versions?.[version]?.[book]?.[chapter]?.[verse] || '';
  }

  return {
    loadVersion,
    getVerse,
    availableVersions: Object.keys(versions),
  };
} 