import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project1Service } from '../../../backend/project1.service';

@Component({
  selector: 'app-view-tasks',
  standalone: true, // ✅ Standalone component
  imports: [CommonModule], // ✅ Required if you use *ngIf, *ngFor, etc. in HTML
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css'],
})
export class ViewTasksComponent {
  @Input() task!: any;
  @Input() index!: number;
  @Output() editEvent = new EventEmitter<number>();
  @Output() deleted = new EventEmitter<void>();

  constructor(private service: Project1Service) {}

  deleteTask(index: number): void {
  this.service.deleteTask(index);
  this.deleted.emit();
}

  editTask(index: number): void {
    this.editEvent.emit(index);
  }

  changeToDone(index: number): void {
    this.service.changeToDone(index);
  }
}
