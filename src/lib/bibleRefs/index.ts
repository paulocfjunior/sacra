import { BibleReference, Language, LanguageConfig } from './types';
import { EN_MAPPINGS } from './i18n/en';
import { PT_MAPPINGS } from './i18n/pt';
import { BIBLE_BOOKS } from './data/books';

// Language configurations
export const LANGUAGE_CONFIGS: Record<Language, LanguageConfig> = {
  'en': {
    mappings: EN_MAPPINGS,
    books: BIBLE_BOOKS
  },
  'pt': {
    mappings: PT_MAPPINGS,
    books: BIBLE_BOOKS
  }
};

/**
 * Validates if a chapter and verse exist in a given book
 */
export function validateReference(book: string, chapter: number, verse?: number): boolean {
  const bookInfo = BIBLE_BOOKS[book];
  if (!bookInfo) return false;
  
  if (chapter < 1 || chapter > bookInfo.chapters) return false;
  
  if (verse !== undefined) {
    const maxVerses = bookInfo.versesPerChapter[chapter - 1];
    if (verse < 1 || verse > maxVerses) return false;
  }
  
  return true;
}

/**
 * Parses a Bible reference string into a structured format.
 * Supports formats:
 * - "Book Chapter:Verse" (e.g., "John 3:16")
 * - "Book Chapter:Verse-Verse" (e.g., "Genesis 1:1-3")
 * - "Book Chapter:Verse,Verse" (e.g., "Psalms 23:1,6")
 * - "Book Chapter" (e.g., "Luke 2")
 */
export function parseReference(ref: string, language: Language = 'en'): BibleReference {
  // Default return value for invalid references
  const invalidResult: BibleReference = {
    book: '',
    chapter: 0,
    verses: [],
    raw: ref,
    isValid: false,
    language
  };

  if (!ref) return invalidResult;

  const config = LANGUAGE_CONFIGS[language];
  if (!config) return invalidResult;

  // Normalize the reference
  const normalized = ref.toLowerCase().trim();
  
  // Enhanced regex to capture more formats
  const regexPatterns = [
    // Format: Book Chapter:Verse
    /^((?:\d\s+)?[a-zà-ú]+(?:\s+[a-zà-ú]+)?)\s*(\d+):(\d+(?:-\d+)?(?:,\d+)*)$/,
    // Format: Book Chapter
    /^((?:\d\s+)?[a-zà-ú]+(?:\s+[a-zà-ú]+)?)\s*(\d+)$/
  ];

  for (const regex of regexPatterns) {
    const match = normalized.match(regex);
    if (!match) continue;

    const [, bookPart, chapter, versePart = ''] = match;
    
    // Find the standard book name
    const standardBook = config.mappings[bookPart];
    if (!standardBook) continue;

    // Validate chapter
    const chapterNum = parseInt(chapter);
    if (!validateReference(standardBook, chapterNum)) continue;

    // Process verses
    const verses: number[] = [];
    if (versePart) {
      // Handle comma-separated verses
      const verseSegments = versePart.split(',');
      let hasInvalidVerse = false;
      
      for (const segment of verseSegments) {
        if (segment.includes('-')) {
          // Handle verse ranges (e.g., 1-3)
          const [start, end] = segment.split('-').map(Number);
          if (!isNaN(start) && !isNaN(end) && start <= end) {
            // Validate each verse in range
            if (!validateReference(standardBook, chapterNum, start) || 
                !validateReference(standardBook, chapterNum, end)) {
              hasInvalidVerse = true;
              break;
            }
            verses.push(...Array.from(
              { length: end - start + 1 },
              (_, i) => start + i
            ));
          }
        } else {
          // Single verse
          const verseNum = parseInt(segment);
          if (!isNaN(verseNum) && validateReference(standardBook, chapterNum, verseNum)) {
            verses.push(verseNum);
          } else {
            hasInvalidVerse = true;
            break;
          }
        }
      }

      if (hasInvalidVerse) continue;
    }

    return {
      book: standardBook,
      chapter: chapterNum,
      verses,
      raw: ref,
      isValid: true,
      language
    };
  }

  return invalidResult;
}

// Export a function to get available languages
export function getAvailableLanguages(): Language[] {
  return Object.keys(LANGUAGE_CONFIGS);
}

// Export a function to add a new language configuration
export function addLanguageConfig(language: Language, config: LanguageConfig): void {
  LANGUAGE_CONFIGS[language] = config;
}

// Re-export types and data
export * from './types';
export { BIBLE_BOOKS } from './data/books';
export { EN_MAPPINGS } from './i18n/en';
export { PT_MAPPINGS } from './i18n/pt'; 