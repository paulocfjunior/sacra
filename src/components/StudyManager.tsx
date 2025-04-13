import React, { useState, useEffect } from 'react';
import { db, Study, StudyNote } from '../lib/db';

export default function StudyManager() {
  const [studies, setStudies] = useState<Study[]>([]);
  const [activeStudy, setActiveStudy] = useState<Study | null>(null);
  const [newStudyTitle, setNewStudyTitle] = useState('');
  const [showNewNoteForm, setShowNewNoteForm] = useState(false);
  const [newNote, setNewNote] = useState<Partial<StudyNote>>({
    book: '',
    chapter: '',
    verse: '',
    content: ''
  });

  // Load studies on mount
  useEffect(() => {
    loadStudies();
  }, []);

  async function loadStudies() {
    const allStudies = await db.studies.toArray();
    setStudies(allStudies);
  }

  async function createStudy(e: React.FormEvent) {
    e.preventDefault();
    if (!newStudyTitle.trim()) return;

    await db.studies.add({
      title: newStudyTitle,
      notes: [],
      createdAt: new Date()
    });

    setNewStudyTitle('');
    loadStudies();
  }

  async function deleteStudy(id: number) {
    await db.studies.delete(id);
    if (activeStudy?.id === id) {
      setActiveStudy(null);
    }
    loadStudies();
  }

  async function addNote(e: React.FormEvent) {
    e.preventDefault();
    if (!activeStudy?.id) return;

    const updatedNotes = [...(activeStudy.notes || []), newNote as StudyNote];
    
    await db.studies.update(activeStudy.id, {
      notes: updatedNotes
    });

    setNewNote({
      book: '',
      chapter: '',
      verse: '',
      content: ''
    });
    setShowNewNoteForm(false);
    
    // Refresh active study
    const updated = await db.studies.get(activeStudy.id);
    setActiveStudy(updated || null);
  }

  async function deleteNote(index: number) {
    if (!activeStudy?.id) return;

    const updatedNotes = activeStudy.notes.filter((_, i) => i !== index);
    
    await db.studies.update(activeStudy.id, {
      notes: updatedNotes
    });

    // Refresh active study
    const updated = await db.studies.get(activeStudy.id);
    setActiveStudy(updated || null);
  }

  return (
    <div className="space-y-6">
      {/* Create new study form */}
      <form onSubmit={createStudy} className="space-y-2">
        <input
          type="text"
          placeholder="Título do novo estudo..."
          className="border rounded p-2 w-full"
          value={newStudyTitle}
          onChange={(e) => setNewStudyTitle(e.target.value)}
        />
        <button 
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Criar novo estudo
        </button>
      </form>

      {/* Studies list */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Estudos salvos</h2>
        {studies.length === 0 ? (
          <p className="text-gray-500 italic">Nenhum estudo criado ainda</p>
        ) : (
          <div className="space-y-2">
            {studies.map(study => (
              <div key={study.id} className="border rounded p-4 space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{study.title}</h3>
                    <p className="text-sm text-gray-500">
                      Criado em: {study.createdAt.toLocaleDateString()}
                    </p>
                  </div>
                  <div className="space-x-2">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      onClick={() => setActiveStudy(study)}
                    >
                      Abrir
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={() => deleteStudy(study.id!)}
                    >
                      Deletar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Active study view */}
      {activeStudy && (
        <div className="border-t pt-6 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">{activeStudy.title}</h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setShowNewNoteForm(true)}
            >
              Adicionar anotação
            </button>
          </div>

          {/* New note form */}
          {showNewNoteForm && (
            <form onSubmit={addNote} className="border rounded p-4 space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Livro"
                  className="border rounded p-2"
                  value={newNote.book}
                  onChange={(e) => setNewNote(prev => ({ ...prev, book: e.target.value }))}
                />
                <input
                  type="text"
                  placeholder="Capítulo"
                  className="border rounded p-2"
                  value={newNote.chapter}
                  onChange={(e) => setNewNote(prev => ({ ...prev, chapter: e.target.value }))}
                />
                <input
                  type="text"
                  placeholder="Versículo"
                  className="border rounded p-2"
                  value={newNote.verse}
                  onChange={(e) => setNewNote(prev => ({ ...prev, verse: e.target.value }))}
                />
              </div>
              <textarea
                placeholder="Conteúdo da anotação..."
                className="border rounded p-2 w-full"
                rows={4}
                value={newNote.content}
                onChange={(e) => setNewNote(prev => ({ ...prev, content: e.target.value }))}
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setShowNewNoteForm(false)}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Salvar anotação
                </button>
              </div>
            </form>
          )}

          {/* Notes list */}
          <div className="space-y-2">
            <h3 className="font-medium">Anotações</h3>
            {activeStudy.notes.length === 0 ? (
              <p className="text-gray-500 italic">Nenhuma anotação ainda</p>
            ) : (
              <div className="space-y-4">
                {activeStudy.notes.map((note, index) => (
                  <div key={index} className="border rounded p-4 space-y-2">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">
                        {note.book} {note.chapter}:{note.verse}
                      </h4>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => deleteNote(index)}
                      >
                        Deletar
                      </button>
                    </div>
                    <p className="text-gray-700">{note.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 