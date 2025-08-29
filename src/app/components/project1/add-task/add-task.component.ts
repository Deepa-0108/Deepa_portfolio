import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Project1Service } from '../../../backend/project1.service';


@Component({
  selector: 'app-add-task',
  standalone: true, 
  imports: [ReactiveFormsModule], 
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnChanges, OnDestroy {
  @Input() task: any = {} as any;
  @Output() taskAdded:any = new EventEmitter<void>();
  submitted = false;

  addTaskForm = new FormGroup({
  index: new FormControl<number | null>(null),
  taskTitle: new FormControl<string>('', [Validators.required]),
  date: new FormControl<string | null>(null),
  taskDescription:new FormControl()
});


  @ViewChild('closeModal') closeModalButton!: ElementRef;

  constructor(private taskService: Project1Service) {}

  onSubmit() {
    this.submitted = true;
    if (this.addTaskForm.valid) {
      this.taskService.addTask(this.addTaskForm.value);
      this.taskAdded.emit();
      this.closeModalButton.nativeElement.click();
      this.addTaskForm.reset();
    }
  }

  ngOnChanges() {
  if (this.task) {
    this.addTaskForm.patchValue({
      index: this.task.index,
      taskTitle: this.task.taskTitle,
      date: this.task.date ? this.formatDate(this.task.date) : null,
      taskDescription: this.task.taskDescription,
    });
  }
}

private formatDate(date: Date | string): string {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = ('0' + (d.getMonth() + 1)).slice(-2);
  const day = ('0' + d.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
}


  ngOnDestroy() {
    this.addTaskForm.reset();
  }
}
