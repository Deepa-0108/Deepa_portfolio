import { Injectable, signal } from '@angular/core';

export interface Note {
  id: number;
  title: string;
  content: string;
}

@Injectable({ providedIn: 'root' })
export class NotesService {
  private _notes = signal<Note[]>([]);
  notes = this._notes.asReadonly();

  addNote(note: Note) {
    this._notes.update(notes => [...notes, note]);
  }

  updateNote(updatedNote: Note) {
    this._notes.update(notes =>
      notes.map(note => (note.id === updatedNote.id ? updatedNote : note))
    );
  }

  deleteNote(id: number) {
    this._notes.update(notes => notes.filter(note => note.id !== id));
  }
}
