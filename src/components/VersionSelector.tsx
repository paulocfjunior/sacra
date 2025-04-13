import React, { useState } from 'react';
import { useBible } from '../hooks/useBible';

interface Props {
  activeVersions: string[];
  onVersionsChange: (versions: string[]) => void;
}

export default function VersionSelector({ activeVersions, onVersionsChange }: Props) {
  const { availableVersions } = useBible();
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

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <select
          className="flex-1 border rounded p-2"
          value={selectedVersion}
          onChange={(e) => setSelectedVersion(e.target.value)}
        >
          <option value="">Selecione uma versão...</option>
          {availableToAdd.map(version => (
            <option key={version} value={version}>{version}</option>
          ))}
        </select>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
          onClick={handleAddVersion}
          disabled={!selectedVersion}
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