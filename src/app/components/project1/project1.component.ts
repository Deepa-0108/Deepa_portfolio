import { Component, ElementRef, ViewChild } from '@angular/core';
import { Project1Service } from '../../backend/project1.service';
import { ViewTasksComponent } from "./view-task/view-task.component";
import { AddTaskComponent } from "./add-task/add-task.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project1',
  standalone: true,
  imports: [ViewTasksComponent, AddTaskComponent, FormsModule, CommonModule  ],
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css'],
})
export class Project1Component {
  tasks: any[] = [];
  filteredTasks: any[] = [];
  filter: string = 'All';
  searchTerm: string = '';
  task: any = {} as any;

  @ViewChild('openPopupButton') openPopupButton!: ElementRef;

  constructor(private taskService: Project1Service) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.tasks = this.taskService.getTasks(this.filter);
    this.filterTasks();
  }

  filterTasks() {
  let filtered = [...this.tasks];

  // Filter by status
  if (this.filter === 'Completed') {
    filtered = filtered.filter(task => task.isDone);
  } else if (this.filter === 'Pending') {
    filtered = filtered.filter(task => !task.isDone);
  }

  // Filter by search term
  const search = this.searchTerm.trim().toLowerCase();
  if (search) {
    filtered = filtered.filter(task => task.taskTitle.toLowerCase().includes(search));
  }

  this.filteredTasks = filtered;
}


  get progressPercent(): number {
    const total = this.tasks.length;
    if (total === 0) return 0;
    const completed = this.tasks.filter(t => t.isDone).length;
    return Math.round((completed / total) * 100);
  }
  editItem(filteredIndex: number): void {
  const taskToEdit = this.filteredTasks[filteredIndex];
  const originalIndex = this.tasks.findIndex(t => t === taskToEdit);

  if (originalIndex !== -1) {
    this.task = { ...taskToEdit, index: originalIndex };
    this.openPopupButton.nativeElement.click();
  }
}

}
