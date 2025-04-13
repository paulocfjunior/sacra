import Dexie, { Table } from 'dexie';

export interface Study {
  id?: number;
  title: string;
  notes: StudyNote[];
  createdAt: Date;
}

export interface StudyNote {
  book: string;
  chapter: string;
  verse: string;
  content: string;
}

class BibleDB extends Dexie {
  studies!: Table<Study, number>;

  constructor() {
    super('BibleDB');
    this.version(1).stores({
      studies: '++id, title, createdAt',
    });
  }
}

export const db = new BibleDB(); 