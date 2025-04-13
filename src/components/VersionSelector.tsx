import { useState } from 'react';
import { useBible } from '../contexts/BibleContext';

interface Props {
  activeVersions: string[];
  onVersionsChange: (versions: string[]) => void;
}

export default function VersionSelector({ activeVersions, onVersionsChange }: Props) {
  const { availableVersions, loading, errors } = useBible();
  const [selectedVersion, setSelectedVersion] = useState('');

  // Filter out versions that are already active
  const availableToAdd = availableVersions.filter(v => !activeVersions.includes(v));

  const handleAddVersion = () => {
    if (selectedVersion && !activeVersions.includes(selectedVersion)) {
      onVersionsChange([...activeVersions, selectedVersion]);
      setSelectedVersion('');
    }
  };

  const handleRemoveVersion = (version: string) => {
    onVersionsChange(activeVersions.filter(v => v !== version));
  };

  // Show loading state if any version is still loading
  const isLoading = Object.values(loading).some(Boolean);

  // Collect any errors
  const errorMessages = Object.entries(errors)
    .filter(([, error]) => error)
    .map(([version, error]) => `${version}: ${error}`);

  return (
    <div className="space-y-4">
      {isLoading && (
        <div className="text-blue-600">
          Carregando versões da Bíblia...
        </div>
      )}

      {errorMessages.length > 0 && (
        <div className="text-red-600">
          <p>Erro ao carregar algumas versões:</p>
          <ul className="list-disc list-inside">
            {errorMessages.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex gap-2">
        <select
          className="flex-1 border rounded p-2"
          value={selectedVersion}
          onChange={(e) => setSelectedVersion(e.target.value)}
          disabled={isLoading}
        >
          <option value="">Selecione uma versão...</option>
          {availableToAdd.map(version => (
            <option key={version} value={version}>{version}</option>
          ))}
        </select>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
          onClick={handleAddVersion}
          disabled={!selectedVersion || isLoading}
        >
          Adicionar versão
        </button>
      </div>

      <div className="space-y-2">
        <h3 className="font-medium">Versões ativas:</h3>
        {activeVersions.length === 0 ? (
          <p className="text-gray-500 italic">Nenhuma versão selecionada</p>
        ) : (
          <ul className="space-y-2">
            {activeVersions.map(version => (
              <li key={version} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                <span>{version}</span>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleRemoveVersion(version)}
                  disabled={isLoading}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
} 