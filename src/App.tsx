import { useEffect } from 'react';
import { useBible } from './hooks/useBible';
import VerseSelector from './components/VerseSelector';
import StudyManager from './components/StudyManager';

export default function App() {
  const { loadVersion } = useBible();

  useEffect(() => {
    // Load versions only once when component mounts
    const loadVersions = async () => {
      await loadVersion('KJV', '/bibles/KJF.json');
      await loadVersion('ARC', '/bibles/ARC.json');
    };
    
    loadVersions();
  }, []); // Empty dependency array = only run on mount

  return (
    <div className="min-h-screen bg-white text-gray-900 p-4">
      <h1 className="text-3xl font-bold mb-4">Bible Study App (Open Core)</h1>
      <p className="mb-8">Welcome! This is the base layout for reading, comparing, and annotating the Bible offline.</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Comparar versões</h2>
          <VerseSelector />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Estudos e anotações</h2>
          <StudyManager />
        </div>
      </div>
    </div>
  );
}
