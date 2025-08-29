import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Note, NotesService } from '../../../backend/notes.service';
@Component({
  selector: 'app-note-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <h2>{{ isEditMode ? 'Edit Note' : 'Add Note' }}</h2>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <input formControlName="title" placeholder="Title" />
      <textarea formControlName="content" placeholder="Content"></textarea>
      <button type="submit">{{ isEditMode ? 'Update' : 'Add' }}</button>
      <button type="button" (click)="onCancel()">Cancel</button>
    </form>
  `
})
export class NoteEditComponent {
    form!: FormGroup;

  isEditMode = false;
  noteId?: number;

  constructor(
    private fb: FormBuilder,
    private notesService: NotesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: [''],
      content: [''],
    });
    
    this.noteId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.noteId) {
      const note = this.notesService.notes().find(n => n.id === this.noteId);
      if (note) {
        this.form.setValue({
          title: note.title,
          content: note.content,
        });
        this.isEditMode = true;
      }
    }
  }

  onSubmit() {
    const noteData: Note = {
      id: this.isEditMode ? this.noteId! : Date.now(),
      title: this.form.value.title!,
      content: this.form.value.content!,
    };

    if (this.isEditMode) {
      this.notesService.updateNote(noteData);
    } else {
      this.notesService.addNote(noteData);
    }
    this.router.navigate(['/project3/notes']);
  }

  onCancel() {
    this.router.navigate(['/project3/notes']);
  }
}
