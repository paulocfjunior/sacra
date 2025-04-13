export type Language = 'en' | 'pt' | string;

export interface RawBibleReference {
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
  abbrev?: string[];
}

export type BibleBooks = Record<string, BookInfo>;

export type BookMappings = Record<string, string>;

export interface LanguageConfig {
  books: BibleBooks;
  mappings: BookMappings;
}

export type BibleBook = string;

export type BibleReference = {
  book: string;
  chapter: number;
  verses?: number[];
  raw: string;
  isValid: boolean;
  language?: Language;
};

export interface ParsedReference {
  book: string;
  chapter: number;
  verses?: number[];
  raw: string;
  isValid: boolean;
} 