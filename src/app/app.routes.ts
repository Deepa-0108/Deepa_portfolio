import { Routes } from '@angular/router';
import { HomePageComponent } from './components/homePage/homePage.component';
import { notesLoginAuthGuard } from './backend/notes-loginauth.guard';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'project1',
    loadComponent: () =>
      import('./components/project1/project1.component').then(
        (m) => m.Project1Component
      ),
  },
  {
    path: 'project2',
    loadChildren: () =>
      import('./components/project2/project2.routes').then(m => m.project2Routes)
  },
  {
    path: 'project3',
    loadComponent: () =>
      import('./components/project3/project3.component').then(m => m.Project3Component),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./components/project3/auth/login.component').then(m => m.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./components/project3/auth/register.component').then(m => m.RegisterComponent)
      },
      {
        path: 'notes',
        loadComponent: () =>
          import('./components/project3/notes/notes-list.component').then(m => m.NotesListComponent),
        canActivate: [notesLoginAuthGuard],
        data: { renderMode: 'client' }
      },
      {
        path: 'notes/edit',
        loadComponent: () =>
          import('./components/project3/notes/note-edit.component').then(m => m.NoteEditComponent),
        canActivate: [notesLoginAuthGuard],
        data: { renderMode: 'client' }
      },
      {
        path: 'notes/edit/:id',
        loadComponent: () =>
          import('./components/project3/notes/note-edit.component').then(m => m.NoteEditComponent),
        canActivate: [notesLoginAuthGuard],
        data: { renderMode: 'client' }
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ]
  }
];
