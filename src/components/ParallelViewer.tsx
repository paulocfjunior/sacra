import { useBible } from '../contexts/BibleContext';

interface Props {
  book: string;
  chapter: number;
  verses: number[];
  versions: string[]; // ex: ["KJV", "ARC", "ASV"]
}

export default function ParallelViewer({ book, chapter, verses, versions }: Props) {
  const { getVerse } = useBible();

  return (
    <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${versions.length}, 1fr)` }}>
      {versions.map(version => (
        <div key={version}>
          <h2 className="font-bold text-lg mb-2">{version}</h2>
          {verses.map(v => (
            <p key={v}>
              <strong>{v}</strong> {getVerse(version, book, chapter, v)}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
} 