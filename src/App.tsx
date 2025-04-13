import { useEffect } from 'react';
import { useBible } from './hooks/useBible';
import VerseSelector from './components/VerseSelector';
import StudyManager from './components/StudyManager';

export default function App() {
  const { loadVersion } = useBible();

  useEffect(() => {
    // Load versions only once when component mounts
    const loadVersions = async () => {
      try {
        // Portuguese versions
        await loadVersion('ARC', '/bibles/ARC.json');  // Almeida Revista e Corrigida
        await loadVersion('ARA', '/bibles/ARA.json');  // Almeida Revista e Atualizada
        await loadVersion('ACF', '/bibles/ACF.json');  // Almeida Corrigida Fiel
        await loadVersion('NAA', '/bibles/NAA.json');  // Nova Almeida Atualizada
        await loadVersion('NVI', '/bibles/NVI.json');  // Nova Versão Internacional
        await loadVersion('NTLH', '/bibles/NTLH.json'); // Nova Tradução na Linguagem de Hoje
        await loadVersion('NVT', '/bibles/NVT.json');  // Nova Versão Transformadora
        await loadVersion('AS21', '/bibles/AS21.json'); // Almeida Século 21

        // English versions
        await loadVersion('KJA', '/bibles/KJA.json');  // King James Atualizada
        await loadVersion('KJF', '/bibles/KJF.json');  // King James Fiel

        // Original languages
        await loadVersion('Hebrew', '/bibles/hebrew.json');
        await loadVersion('Greek', '/bibles/el_greek.json');
      } catch (error) {
        console.error('Error loading Bible versions:', error);
      }
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
