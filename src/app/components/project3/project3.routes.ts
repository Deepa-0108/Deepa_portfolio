// components/project3/project3.routes.ts

import { Routes } from '@angular/router';
import { Project3Component } from './project3.component';
import { notesLoginAuthGuard } from '../../backend/notes-loginauth.guard'; // <== Proper import

export const project3Routes: Routes = [
  {
    path: '',
    component: Project3Component,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./auth/login.component').then(m => m.LoginComponent),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./auth/register.component').then(m => m.RegisterComponent),
      },
      {
        path: 'notes',
        loadComponent: () =>
          import('./notes/notes-list.component').then(m => m.NotesListComponent),
        canActivate: [notesLoginAuthGuard],
        data: { renderMode: 'client' }
      },
      {
        path: 'notes/edit',
        loadComponent: () =>
          import('./notes/note-edit.component').then(m => m.NoteEditComponent),
        canActivate: [notesLoginAuthGuard],
        data: { renderMode: 'client' }
      },
    //   {
    //     path: 'notes/edit/:id',
    //     loadComponent: () =>
    //       import('./notes/note-edit.component').then(m => m.NoteEditComponent),
    //     canActivate: [notesLoginAuthGuard],
    //     data: { renderMode: 'client' }
    //   },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ]
  }
];
