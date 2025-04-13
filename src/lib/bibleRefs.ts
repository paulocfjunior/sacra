// Mapeamento de abreviações e variações para nomes padrão de livros
const BOOK_MAPPINGS: Record<string, string> = {
  // Gênesis
  'gen': 'Genesis',
  'genesis': 'Genesis',
  'gn': 'Genesis',
  'gênesis': 'Genesis',
  'genese': 'Genesis',
  'gênese': 'Genesis',

  // Êxodo
  'ex': 'Exodus',
  'exo': 'Exodus',
  'exodus': 'Exodus',
  'êxodo': 'Exodus',
  'exodo': 'Exodus',

  // Levítico
  'lev': 'Leviticus',
  'leviticus': 'Leviticus',
  'levitico': 'Leviticus',
  'levítico': 'Leviticus',

  // Números
  'num': 'Numbers',
  'numbers': 'Numbers',
  'números': 'Numbers',
  'numeros': 'Numbers',

  // Deuteronômio
  'dt': 'Deuteronomy',
  'deut': 'Deuteronomy',
  'deuteronomy': 'Deuteronomy',
  'deuteronomio': 'Deuteronomy',
  'deuteronômio': 'Deuteronomy',

  // Josué
  'josh': 'Joshua',
  'joshua': 'Joshua',
  'josue': 'Joshua',
  'josué': 'Joshua',
  'js': 'Joshua',

  // Juízes
  'jdg': 'Judges',
  'judges': 'Judges',
  'juizes': 'Judges',
  'juízes': 'Judges',
  'jz': 'Judges',

  // Rute
  'ruth': 'Ruth',
  'rt': 'Ruth',
  'rute': 'Ruth',

  // Samuel
  '1 sm': '1 Samuel',
  '1 sam': '1 Samuel',
  '1 samuel': '1 Samuel',
  '1sm': '1 Samuel',
  'i samuel': '1 Samuel',
  'primeiro samuel': '1 Samuel',
  '1º samuel': '1 Samuel',

  '2 sm': '2 Samuel',
  '2 sam': '2 Samuel',
  '2 samuel': '2 Samuel',
  '2sm': '2 Samuel',
  'ii samuel': '2 Samuel',
  'segundo samuel': '2 Samuel',
  '2º samuel': '2 Samuel',

  // Reis
  '1 reis': '1 Kings',
  '1 rs': '1 Kings',
  '1º reis': '1 Kings',
  'i reis': '1 Kings',
  'primeiro reis': '1 Kings',
  '1 kings': '1 Kings',

  '2 reis': '2 Kings',
  '2 rs': '2 Kings',
  '2º reis': '2 Kings',
  'ii reis': '2 Kings',
  'segundo reis': '2 Kings',
  '2 kings': '2 Kings',

  // Crônicas
  '1 cr': '1 Chronicles',
  '1 cron': '1 Chronicles',
  '1 crônicas': '1 Chronicles',
  '1 cronicas': '1 Chronicles',
  '1 chronicles': '1 Chronicles',
  'i crônicas': '1 Chronicles',

  '2 cr': '2 Chronicles',
  '2 cron': '2 Chronicles',
  '2 crônicas': '2 Chronicles',
  '2 cronicas': '2 Chronicles',
  '2 chronicles': '2 Chronicles',
  'ii crônicas': '2 Chronicles',

  // Esdras
  'esd': 'Ezra',
  'ezra': 'Ezra',
  'esdras': 'Ezra',

  // Neemias
  'ne': 'Nehemiah',
  'neh': 'Nehemiah',
  'nehemiah': 'Nehemiah',
  'neemias': 'Nehemiah',

  // Ester
  'est': 'Esther',
  'esther': 'Esther',
  'ester': 'Esther',

  // Jó
  'job': 'Job',
  'jó': 'Job',
  'jo': 'Job',

  // Salmos
  'ps': 'Psalms',
  'psa': 'Psalms',
  'psalms': 'Psalms',
  'sl': 'Psalms',
  'salmos': 'Psalms',
  'salmo': 'Psalms',

  // Provérbios
  'pv': 'Proverbs',
  'pro': 'Proverbs',
  'proverbs': 'Proverbs',
  'prov': 'Proverbs',
  'proverbios': 'Proverbs',
  'provérbios': 'Proverbs',

  // Eclesiastes
  'ec': 'Ecclesiastes',
  'ecc': 'Ecclesiastes',
  'ecclesiastes': 'Ecclesiastes',
  'eclesiastes': 'Ecclesiastes',

  // Cantares
  'ss': 'Song of Solomon',
  'song': 'Song of Solomon',
  'song of solomon': 'Song of Solomon',
  'ct': 'Song of Solomon',
  'cantares': 'Song of Solomon',
  'cânticos': 'Song of Solomon',
  'canticos': 'Song of Solomon',

  // Profetas Maiores
  'is': 'Isaiah',
  'isa': 'Isaiah',
  'isaiah': 'Isaiah',
  'isaias': 'Isaiah',
  'isaías': 'Isaiah',

  'jr': 'Jeremiah',
  'jer': 'Jeremiah',
  'jeremiah': 'Jeremiah',
  'jeremias': 'Jeremiah',

  'lm': 'Lamentations',
  'lam': 'Lamentations',
  'lamentations': 'Lamentations',
  'lamentações': 'Lamentations',
  'lamentacoes': 'Lamentations',

  'ez': 'Ezekiel',
  'ezk': 'Ezekiel',
  'ezekiel': 'Ezekiel',
  'ezequiel': 'Ezekiel',

  'dn': 'Daniel',
  'dan': 'Daniel',
  'daniel': 'Daniel',

  // Profetas Menores
  'os': 'Hosea',
  'hos': 'Hosea',
  'hosea': 'Hosea',
  'oseias': 'Hosea',

  'jl': 'Joel',
  'joel': 'Joel',

  'am': 'Amos',
  'amos': 'Amos',
  'amós': 'Amos',

  'ob': 'Obadiah',
  'oba': 'Obadiah',
  'obadiah': 'Obadiah',
  'obadias': 'Obadiah',

  'mq': 'Micah',
  'mic': 'Micah',
  'micah': 'Micah',
  'miqueias': 'Micah',
  'miquéias': 'Micah',

  'na': 'Nahum',
  'nah': 'Nahum',
  'nahum': 'Nahum',
  'naum': 'Nahum',

  'hc': 'Habakkuk',
  'hab': 'Habakkuk',
  'habakkuk': 'Habakkuk',
  'habacuc': 'Habakkuk',
  'habacuque': 'Habakkuk',

  'sf': 'Zephaniah',
  'zep': 'Zephaniah',
  'zephaniah': 'Zephaniah',
  'sofonias': 'Zephaniah',

  'ag': 'Haggai',
  'hag': 'Haggai',
  'haggai': 'Haggai',
  'ageu': 'Haggai',

  'zc': 'Zechariah',
  'zec': 'Zechariah',
  'zechariah': 'Zechariah',
  'zacarias': 'Zechariah',

  'ml': 'Malachi',
  'mal': 'Malachi',
  'malachi': 'Malachi',
  'malaquias': 'Malachi',

  // Novo Testamento
  'mt': 'Matthew',
  'matt': 'Matthew',
  'matthew': 'Matthew',
  'mateus': 'Matthew',

  'mc': 'Mark',
  'mk': 'Mark',
  'mark': 'Mark',
  'marcos': 'Mark',

  'lc': 'Luke',
  'lk': 'Luke',
  'luke': 'Luke',
  'lucas': 'Luke',

  // João/John (combinando as entradas duplicadas)
  'jo': 'John',
  'jn': 'John',
  'john': 'John',
  'joão': 'John',
  'joao': 'John',

  'at': 'Acts',
  'acts': 'Acts',
  'atos': 'Acts',

  'rm': 'Romans',
  'rom': 'Romans',
  'romans': 'Romans',
  'romanos': 'Romans',

  '1 co': '1 Corinthians',
  '1 cor': '1 Corinthians',
  '1 corinthians': '1 Corinthians',
  '1 coríntios': '1 Corinthians',
  '1 corintios': '1 Corinthians',
  'i coríntios': '1 Corinthians',

  '2 co': '2 Corinthians',
  '2 cor': '2 Corinthians',
  '2 corinthians': '2 Corinthians',
  '2 coríntios': '2 Corinthians',
  '2 corintios': '2 Corinthians',
  'ii coríntios': '2 Corinthians',

  'gl': 'Galatians',
  'gal': 'Galatians',
  'galatians': 'Galatians',
  'gálatas': 'Galatians',
  'galatas': 'Galatians',

  'ef': 'Ephesians',
  'eph': 'Ephesians',
  'ephesians': 'Ephesians',
  'efésios': 'Ephesians',
  'efesios': 'Ephesians',

  'fp': 'Philippians',
  'phil': 'Philippians',
  'philippians': 'Philippians',
  'filipenses': 'Philippians',

  'cl': 'Colossians',
  'col': 'Colossians',
  'colossians': 'Colossians',
  'colossenses': 'Colossians',

  '1 ts': '1 Thessalonians',
  '1 thess': '1 Thessalonians',
  '1 thessalonians': '1 Thessalonians',
  '1 tessalonicenses': '1 Thessalonians',
  'i tessalonicenses': '1 Thessalonians',

  '2 ts': '2 Thessalonians',
  '2 thess': '2 Thessalonians',
  '2 thessalonians': '2 Thessalonians',
  '2 tessalonicenses': '2 Thessalonians',
  'ii tessalonicenses': '2 Thessalonians',

  '1 tm': '1 Timothy',
  '1 tim': '1 Timothy',
  '1 timothy': '1 Timothy',
  '1 timóteo': '1 Timothy',
  '1 timoteo': '1 Timothy',
  'i timóteo': '1 Timothy',

  '2 tm': '2 Timothy',
  '2 tim': '2 Timothy',
  '2 timothy': '2 Timothy',
  '2 timóteo': '2 Timothy',
  '2 timoteo': '2 Timothy',
  'ii timóteo': '2 Timothy',

  'tt': 'Titus',
  'tit': 'Titus',
  'titus': 'Titus',
  'tito': 'Titus',

  'fm': 'Philemon',
  'phm': 'Philemon',
  'philemon': 'Philemon',
  'filemom': 'Philemon',

  'hb': 'Hebrews',
  'heb': 'Hebrews',
  'hebrews': 'Hebrews',
  'hebreus': 'Hebrews',

  'tg': 'James',
  'jas': 'James',
  'james': 'James',
  'tiago': 'James',

  '1 pe': '1 Peter',
  '1 pt': '1 Peter',
  '1 peter': '1 Peter',
  '1 pedro': '1 Peter',
  'i pedro': '1 Peter',

  '2 pe': '2 Peter',
  '2 pt': '2 Peter',
  '2 peter': '2 Peter',
  '2 pedro': '2 Peter',
  'ii pedro': '2 Peter',

  '1 jo': '1 John',
  '1 jn': '1 John',
  '1 john': '1 John',
  '1 joão': '1 John',
  '1 joao': '1 John',
  'i joão': '1 John',

  '2 jo': '2 John',
  '2 jn': '2 John',
  '2 john': '2 John',
  '2 joão': '2 John',
  '2 joao': '2 John',
  'ii joão': '2 John',

  '3 jo': '3 John',
  '3 jn': '3 John',
  '3 john': '3 John',
  '3 joão': '3 John',
  '3 joao': '3 John',
  'iii joão': '3 John',

  'jd': 'Jude',
  'jude': 'Jude',
  'judas': 'Jude',

  'ap': 'Revelation',
  'rev': 'Revelation',
  'revelation': 'Revelation',
  'apocalipse': 'Revelation'
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