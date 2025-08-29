import { Injectable } from '@angular/core';
// import { Taskdetails } from './model/taskdetails';  // ✅ Adjusted import

@Injectable({
  providedIn: 'root',
})
export class Project1Service {
  tasks: any[] = [];
  private taskId = 0;

  getTasks(filter: string = 'All') {
    if (filter === 'All') {
      return this.tasks;
    }
    const selectval = filter === 'Completed' ? true : false;
    return this.tasks.filter((x) => x.isDone === selectval);
  }

  addTask(task: any) {
    if (task.index != null) {
      this.tasks[task.index] = task;
    } else {
      const newTask = { ...task, index: this.tasks.length, isDone: false };
      this.tasks.push(newTask);
    }
  }

  deleteTask(i: number) {
    this.tasks.splice(i, 1);
    this.getTasks()
  }

  changeToDone(i: number) {
    this.tasks[i].isDone = true;
  }
}
