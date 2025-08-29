import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NotesService } from '../../../backend/notes.service';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Your Notes</h2>
    <button (click)="onAdd()">Add New Note</button>
    <ul>
      <li *ngFor="let note of notesService.notes()">
        <h3>{{ note.title }}</h3>
        <p>{{ note.content }}</p>
        <button (click)="onEdit(note.id)">Edit</button>
        <button (click)="onDelete(note.id)">Delete</button>
      </li>
    </ul>
  `
})
export class NotesListComponent {
  constructor(public notesService: NotesService, private router: Router) {}

  onAdd() {
    this.router.navigate(['/project3/notes/edit']);
  }

  onEdit(id: number) {
    this.router.navigate(['/project3/notes/edit', id]);
  }

  onDelete(id: number) {
    this.notesService.deleteNote(id);
  }
}
