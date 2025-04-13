// Types and interfaces for Bible references
export type Language = 'en' | 'pt' | string;

export interface BibleReference {
  book: string;
  chapter: string;
  verses: string[];
  raw: string;
  isValid: boolean;
  language?: Language;
}

export interface BookInfo {
  name: string;
  chapters: number;
  versesPerChapter: number[];
}

export type BibleBooks = {
  [key: string]: BookInfo;
};

export type BookMappings = {
  [key: string]: string;
};

export interface LanguageConfig {
  mappings: BookMappings;
  books: BibleBooks;
}

// Bible book information with chapter and verse counts
export const BIBLE_BOOKS: BibleBooks = {
  'Genesis': {
    name: 'Genesis',
    chapters: 50,
    versesPerChapter: [31,25,24,26,32,22,24,22,29,32,32,20,18,24,21,16,27,33,38,18,34,24,20,67,34,35,46,22,35,43,55,32,20,31,29,43,36,30,23,23,57,38,34,34,28,34,31,22,33,26]
  },
  // ... Add other books with their chapter and verse counts
  'Revelation': {
    name: 'Revelation',
    chapters: 22,
    versesPerChapter: [20,29,22,11,14,17,17,13,21,11,19,17,18,20,8,21,18,24,21,15,27,21]
  }
};

// English mappings
export const EN_MAPPINGS: BookMappings = {
  // Old Testament
  // Genesis
  'gen': 'Genesis',
  'genesis': 'Genesis',
  'gn': 'Genesis',
  'ge': 'Genesis',

  // Exodus
  'ex': 'Exodus',
  'exo': 'Exodus',
  'exodus': 'Exodus',
  'exod': 'Exodus',

  // Leviticus
  'lev': 'Leviticus',
  'leviticus': 'Leviticus',
  'lv': 'Leviticus',

  // Numbers
  'num': 'Numbers',
  'numbers': 'Numbers',
  'nm': 'Numbers',
  'nu': 'Numbers',

  // Deuteronomy
  'deut': 'Deuteronomy',
  'deuteronomy': 'Deuteronomy',
  'dt': 'Deuteronomy',
  'deu': 'Deuteronomy',

  // Joshua
  'josh': 'Joshua',
  'joshua': 'Joshua',
  'jos': 'Joshua',
  'jsh': 'Joshua',

  // Judges
  'judg': 'Judges',
  'judges': 'Judges',
  'jdg': 'Judges',
  'jg': 'Judges',

  // Ruth
  'ruth': 'Ruth',
  'rth': 'Ruth',
  'ru': 'Ruth',
  'rt': 'Ruth',

  // 1 Samuel
  '1 sam': '1 Samuel',
  '1 samuel': '1 Samuel',
  '1 sm': '1 Samuel',
  '1st samuel': '1 Samuel',
  'first samuel': '1 Samuel',
  'i samuel': '1 Samuel',
  '1sam': '1 Samuel',
  '1s': '1 Samuel',

  // 2 Samuel
  '2 sam': '2 Samuel',
  '2 samuel': '2 Samuel',
  '2 sm': '2 Samuel',
  '2nd samuel': '2 Samuel',
  'second samuel': '2 Samuel',
  'ii samuel': '2 Samuel',
  '2sam': '2 Samuel',
  '2s': '2 Samuel',

  // 1 Kings
  '1 kings': '1 Kings',
  '1 kgs': '1 Kings',
  '1 ki': '1 Kings',
  '1st kings': '1 Kings',
  'first kings': '1 Kings',
  'i kings': '1 Kings',
  '1kings': '1 Kings',
  '1k': '1 Kings',

  // 2 Kings
  '2 kings': '2 Kings',
  '2 kgs': '2 Kings',
  '2 ki': '2 Kings',
  '2nd kings': '2 Kings',
  'second kings': '2 Kings',
  'ii kings': '2 Kings',
  '2kings': '2 Kings',
  '2k': '2 Kings',

  // 1 Chronicles
  '1 chronicles': '1 Chronicles',
  '1 chron': '1 Chronicles',
  '1 chr': '1 Chronicles',
  '1st chronicles': '1 Chronicles',
  'first chronicles': '1 Chronicles',
  'i chronicles': '1 Chronicles',
  '1chronicles': '1 Chronicles',
  '1ch': '1 Chronicles',

  // 2 Chronicles
  '2 chronicles': '2 Chronicles',
  '2 chron': '2 Chronicles',
  '2 chr': '2 Chronicles',
  '2nd chronicles': '2 Chronicles',
  'second chronicles': '2 Chronicles',
  'ii chronicles': '2 Chronicles',
  '2chronicles': '2 Chronicles',
  '2ch': '2 Chronicles',

  // Ezra
  'ezra': 'Ezra',
  'ezr': 'Ezra',
  'ez': 'Ezra',

  // Nehemiah
  'nehemiah': 'Nehemiah',
  'neh': 'Nehemiah',
  'ne': 'Nehemiah',

  // Esther
  'esther': 'Esther',
  'est': 'Esther',
  'es': 'Esther',

  // Job
  'job': 'Job',
  'jb': 'Job',

  // Psalms
  'psalms': 'Psalms',
  'psalm': 'Psalms',
  'psa': 'Psalms',
  'ps': 'Psalms',
  'pss': 'Psalms',
  'psm': 'Psalms',

  // Proverbs
  'proverbs': 'Proverbs',
  'prov': 'Proverbs',
  'pro': 'Proverbs',
  'prv': 'Proverbs',

  // Ecclesiastes
  'ecclesiastes': 'Ecclesiastes',
  'eccl': 'Ecclesiastes',
  'eccles': 'Ecclesiastes',
  'ecc': 'Ecclesiastes',
  'ec': 'Ecclesiastes',

  // Song of Solomon
  'song of solomon': 'Song of Solomon',
  'song of songs': 'Song of Solomon',
  'song': 'Song of Solomon',
  'sos': 'Song of Solomon',
  'so': 'Song of Solomon',
  'ss': 'Song of Solomon',
  'canticles': 'Song of Solomon',
  'cant': 'Song of Solomon',

  // Isaiah
  'isaiah': 'Isaiah',
  'isa': 'Isaiah',
  'is': 'Isaiah',

  // Jeremiah
  'jeremiah': 'Jeremiah',
  'jer': 'Jeremiah',
  'je': 'Jeremiah',

  // Lamentations
  'lamentations': 'Lamentations',
  'lam': 'Lamentations',
  'la': 'Lamentations',

  // Ezekiel
  'ezekiel': 'Ezekiel',
  'ezek': 'Ezekiel',
  'eze': 'Ezekiel',
  'ezk': 'Ezekiel',

  // Daniel
  'daniel': 'Daniel',
  'dan': 'Daniel',
  'da': 'Daniel',
  'dn': 'Daniel',

  // Hosea
  'hosea': 'Hosea',
  'hos': 'Hosea',
  'ho': 'Hosea',

  // Joel
  'joel': 'Joel',
  'jol': 'Joel',
  'jl': 'Joel',

  // Amos
  'amos': 'Amos',
  'am': 'Amos',

  // Obadiah
  'obadiah': 'Obadiah',
  'obad': 'Obadiah',
  'oba': 'Obadiah',
  'ob': 'Obadiah',

  // Jonah
  'jonah': 'Jonah',
  'jon': 'Jonah',
  'jnh': 'Jonah',

  // Micah
  'micah': 'Micah',
  'mic': 'Micah',
  'mi': 'Micah',

  // Nahum
  'nahum': 'Nahum',
  'nah': 'Nahum',
  'na': 'Nahum',

  // Habakkuk
  'habakkuk': 'Habakkuk',
  'hab': 'Habakkuk',
  'hb': 'Habakkuk',

  // Zephaniah
  'zephaniah': 'Zephaniah',
  'zeph': 'Zephaniah',
  'zep': 'Zephaniah',
  'zp': 'Zephaniah',

  // Haggai
  'haggai': 'Haggai',
  'hag': 'Haggai',
  'hg': 'Haggai',

  // Zechariah
  'zechariah': 'Zechariah',
  'zech': 'Zechariah',
  'zec': 'Zechariah',
  'zc': 'Zechariah',

  // Malachi
  'malachi': 'Malachi',
  'mal': 'Malachi',
  'ml': 'Malachi',

  // New Testament
  // Matthew
  'matthew': 'Matthew',
  'matt': 'Matthew',
  'mat': 'Matthew',
  'mt': 'Matthew',

  // Mark
  'mark': 'Mark',
  'mrk': 'Mark',
  'mk': 'Mark',
  'mr': 'Mark',

  // Luke
  'luke': 'Luke',
  'luk': 'Luke',
  'lk': 'Luke',

  // John
  'john': 'John',
  'joh': 'John',
  'jhn': 'John',
  'jn': 'John',

  // Acts
  'acts': 'Acts',
  'act': 'Acts',
  'ac': 'Acts',

  // Romans
  'romans': 'Romans',
  'rom': 'Romans',
  'ro': 'Romans',
  'rm': 'Romans',

  // 1 Corinthians
  '1 corinthians': '1 Corinthians',
  '1 cor': '1 Corinthians',
  '1st corinthians': '1 Corinthians',
  'first corinthians': '1 Corinthians',
  'i corinthians': '1 Corinthians',
  '1corinthians': '1 Corinthians',
  '1co': '1 Corinthians',

  // 2 Corinthians
  '2 corinthians': '2 Corinthians',
  '2 cor': '2 Corinthians',
  '2nd corinthians': '2 Corinthians',
  'second corinthians': '2 Corinthians',
  'ii corinthians': '2 Corinthians',
  '2corinthians': '2 Corinthians',
  '2co': '2 Corinthians',

  // Galatians
  'galatians': 'Galatians',
  'gal': 'Galatians',
  'ga': 'Galatians',

  // Ephesians
  'ephesians': 'Ephesians',
  'eph': 'Ephesians',
  'ep': 'Ephesians',

  // Philippians
  'philippians': 'Philippians',
  'phil': 'Philippians',
  'php': 'Philippians',
  'pp': 'Philippians',

  // Colossians
  'colossians': 'Colossians',
  'col': 'Colossians',
  'co': 'Colossians',

  // 1 Thessalonians
  '1 thessalonians': '1 Thessalonians',
  '1 thess': '1 Thessalonians',
  '1 thes': '1 Thessalonians',
  '1st thessalonians': '1 Thessalonians',
  'first thessalonians': '1 Thessalonians',
  'i thessalonians': '1 Thessalonians',
  '1thessalonians': '1 Thessalonians',
  '1th': '1 Thessalonians',

  // 2 Thessalonians
  '2 thessalonians': '2 Thessalonians',
  '2 thess': '2 Thessalonians',
  '2 thes': '2 Thessalonians',
  '2nd thessalonians': '2 Thessalonians',
  'second thessalonians': '2 Thessalonians',
  'ii thessalonians': '2 Thessalonians',
  '2thessalonians': '2 Thessalonians',
  '2th': '2 Thessalonians',

  // 1 Timothy
  '1 timothy': '1 Timothy',
  '1 tim': '1 Timothy',
  '1st timothy': '1 Timothy',
  'first timothy': '1 Timothy',
  'i timothy': '1 Timothy',
  '1timothy': '1 Timothy',
  '1ti': '1 Timothy',

  // 2 Timothy
  '2 timothy': '2 Timothy',
  '2 tim': '2 Timothy',
  '2nd timothy': '2 Timothy',
  'second timothy': '2 Timothy',
  'ii timothy': '2 Timothy',
  '2timothy': '2 Timothy',
  '2ti': '2 Timothy',

  // Titus
  'titus': 'Titus',
  'tit': 'Titus',
  'ti': 'Titus',

  // Philemon
  'philemon': 'Philemon',
  'phm': 'Philemon',
  'phile': 'Philemon',
  'pm': 'Philemon',

  // Hebrews
  'hebrews': 'Hebrews',
  'heb': 'Hebrews',
  'he': 'Hebrews',

  // James
  'james': 'James',
  'jas': 'James',
  'jms': 'James',
  'ja': 'James',

  // 1 Peter
  '1 peter': '1 Peter',
  '1 pet': '1 Peter',
  '1st peter': '1 Peter',
  'first peter': '1 Peter',
  'i peter': '1 Peter',
  '1peter': '1 Peter',
  '1pe': '1 Peter',

  // 2 Peter
  '2 peter': '2 Peter',
  '2 pet': '2 Peter',
  '2nd peter': '2 Peter',
  'second peter': '2 Peter',
  'ii peter': '2 Peter',
  '2peter': '2 Peter',
  '2pe': '2 Peter',

  // 1 John
  '1 john': '1 John',
  '1 jn': '1 John',
  '1st john': '1 John',
  'first john': '1 John',
  'i john': '1 John',
  '1john': '1 John',
  '1jo': '1 John',

  // 2 John
  '2 john': '2 John',
  '2 jn': '2 John',
  '2nd john': '2 John',
  'second john': '2 John',
  'ii john': '2 John',
  '2john': '2 John',
  '2jo': '2 John',

  // 3 John
  '3 john': '3 John',
  '3 jn': '3 John',
  '3rd john': '3 John',
  'third john': '3 John',
  'iii john': '3 John',
  '3john': '3 John',
  '3jo': '3 John',

  // Jude
  'jude': 'Jude',
  'jud': 'Jude',
  'jd': 'Jude',

  // Revelation
  'revelation': 'Revelation',
  'revelations': 'Revelation',
  'rev': 'Revelation',
  're': 'Revelation',
  'rv': 'Revelation',
  'apocalypse': 'Revelation'
};

// Portuguese mappings
export const PT_MAPPINGS: BookMappings = {
  'gen': 'Genesis',
  'gn': 'Genesis',
  'gênesis': 'Genesis',
  'genese': 'Genesis',
  'gênese': 'Genesis',
  // ... Keep existing Portuguese mappings
};

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
    chapter: '',
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
    const verses: string[] = [];
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
              (_, i) => String(start + i)
            ));
          }
        } else {
          // Single verse
          const verse = parseInt(segment);
          if (!isNaN(verse) && validateReference(standardBook, chapterNum, verse)) {
            verses.push(segment);
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
      chapter,
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