import { Component } from '@angular/core';
import { RouterModule, Routes, RouterOutlet, Router } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { NotesListComponent } from './notes/notes-list.component';
import { NoteEditComponent } from './notes/note-edit.component';
import { DarkModeToggleComponent } from './shared/dark-mode-toggle.component';
import { notesLoginAuthGuard } from '../../backend/notes-loginauth.guard';
import { UserdetailsService } from '../../backend/userdetails.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project3',
  standalone: true,
  imports: [DarkModeToggleComponent, RouterOutlet,FormsModule, CommonModule],
  templateUrl: './project3.component.html',
  styleUrls: ['./project3.component.css'],
})
export class Project3Component {
     username: string = '';
  password: string = '';
  loginError: string = '';
    constructor(private userdetailsService: UserdetailsService,private router: Router){}
 
}
