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
  loadChildren: () =>
    import('./components/project3/project3.routes').then(m => m.project3Routes)
}

];
