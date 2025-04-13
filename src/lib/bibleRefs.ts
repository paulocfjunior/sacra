// Mapeamento de abreviações e variações para nomes padrão de livros
const BOOK_MAPPINGS: Record<string, string> = {
  'gen': 'Genesis',
  'genesis': 'Genesis',
  'gn': 'Genesis',
  'ex': 'Exodus',
  'exo': 'Exodus',
  'exodus': 'Exodus',
  'lev': 'Leviticus',
  'leviticus': 'Leviticus',
  'num': 'Numbers',
  'numbers': 'Numbers',
  'dt': 'Deuteronomy',
  'deut': 'Deuteronomy',
  'deuteronomy': 'Deuteronomy',
  'josh': 'Joshua',
  'joshua': 'Joshua',
  'jdg': 'Judges',
  'judges': 'Judges',
  'ruth': 'Ruth',
  'rt': 'Ruth',
  '1 sm': '1 Samuel',
  '1 sam': '1 Samuel',
  '1 samuel': '1 Samuel',
  '2 sm': '2 Samuel',
  '2 sam': '2 Samuel',
  '2 samuel': '2 Samuel',
  'jn': 'John',
  'john': 'John',
  'joão': 'John',
  'joao': 'John',
  'rom': 'Romans',
  'romans': 'Romans',
  'romanos': 'Romans',
  '1 jo': '1 John',
  '1 john': '1 John',
  '1 joão': '1 John',
  '1 joao': '1 John',
  // Adicione mais mapeamentos conforme necessário
};

export interface BibleReference {
  book: string;
  chapter: string;
  verses: string[];
  raw: string;
}

export function parseReference(ref: string): BibleReference | null {
  // Normaliza a referência
  const normalized = ref.toLowerCase().trim();
  
  // Regex para capturar: [livro] [capítulo]:[versículo(s)]
  const regex = /^((?:\d\s+)?[a-zà-ú]+(?:\s+[a-zà-ú]+)?)\s*(\d+):(\d+(?:-\d+)?)$/;
  const match = normalized.match(regex);
  
  if (!match) return null;
  
  const [, bookPart, chapter, versePart] = match;
  
  // Encontra o nome padrão do livro
  const standardBook = BOOK_MAPPINGS[bookPart];
  if (!standardBook) return null;
  
  // Processa intervalo de versículos (ex: 2-4)
  let verses: string[];
  if (versePart.includes('-')) {
    const [start, end] = versePart.split('-').map(Number);
    verses = Array.from(
      { length: end - start + 1 },
      (_, i) => String(start + i)
    );
  } else {
    verses = [versePart];
  }
  
  return {
    book: standardBook,
    chapter: chapter,
    verses,
    raw: ref
  };
} 