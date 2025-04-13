import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type BibleData = Record<string, Record<string, Record<string, string>>>;

interface BibleContextType {
  versions: Record<string, BibleData>;
  loading: Record<string, boolean>;
  errors: Record<string, string>;
  loadVersion: (alias: string, path: string) => Promise<void>;
  getVerse: (version: string, book: string, chapter: number, verse: number) => string;
  availableVersions: string[];
}

const BibleContext = createContext<BibleContextType | null>(null);

export function BibleProvider({ children }: { children: ReactNode }) {
  const [versions, setVersions] = useState<Record<string, BibleData>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const loadVersion = useCallback(async (alias: string, path: string) => {
    try {
      setLoading(prev => ({ ...prev, [alias]: true }));
      console.log(`Loading Bible version: ${alias} from ${path}`);
      
      const res = await fetch(path);
      if (!res.ok) {
        throw new Error(`Failed to load Bible version: ${res.status} ${res.statusText}`);
      }
      
      const json = await res.json();
      console.log(`Successfully loaded Bible version: ${alias}`);
      
      setVersions(prev => {
        const newVersions = { ...prev, [alias]: json };
        console.log('Available versions:', Object.keys(newVersions));
        return newVersions;
      });
      
      setErrors(prev => ({ ...prev, [alias]: '' }));
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error loading Bible version';
      console.error(`Error loading Bible version ${alias}:`, error);
      setErrors(prev => ({ ...prev, [alias]: errorMessage }));
    } finally {
      setLoading(prev => ({ ...prev, [alias]: false }));
    }
  }, []);

  const getVerse = useCallback((version: string, book: string, chapter: number, verse: number) => {
    return versions?.[version]?.[book]?.[chapter]?.[verse] || '';
  }, [versions]);

  return (
    <BibleContext.Provider value={{
      versions,
      loading,
      errors,
      loadVersion,
      getVerse,
      availableVersions: Object.keys(versions),
    }}>
      {children}
    </BibleContext.Provider>
  );
}

export function useBible() {
  const context = useContext(BibleContext);
  if (!context) {
    throw new Error('useBible must be used within a BibleProvider');
  }
  return context;
} 