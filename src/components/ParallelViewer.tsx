import React from 'react';
import { useBible } from '../hooks/useBible';

interface Props {
  book: string;
  chapter: string;
  verses: string[];
  leftVersion: string;
  rightVersion: string;
}

export default function ParallelViewer({ book, chapter, verses, leftVersion, rightVersion }: Props) {
  const { getVerse } = useBible();

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h2 className="font-bold text-lg mb-2">{leftVersion}</h2>
        {verses.map(v => (
          <p key={v}>
            <strong>{v}</strong> {getVerse(leftVersion, book, chapter, v)}
          </p>
        ))}
      </div>
      <div>
        <h2 className="font-bold text-lg mb-2">{rightVersion}</h2>
        {verses.map(v => (
          <p key={v}>
            <strong>{v}</strong> {getVerse(rightVersion, book, chapter, v)}
          </p>
        ))}
      </div>
    </div>
  );
} 