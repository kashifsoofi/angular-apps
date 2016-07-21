import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'task-new',
  template: `
  <h4>Create a Task</h4>
  <form (submit)="onSubmit()">
    <input [(ngModel)]="task.title">
    <input type="submit" value="Create">
  </form>
  `,
  styles:[".completed { color: green }"]
})
export class TaskNewComponent implements OnInit {
    task;

    constructor(public taskService: TaskService) {
        this.task = { title: "", completed : false }
    }

    ngOnInit() { }

    onSubmit() {
        this.taskService.addTask(this.task);
        this.task = { title: "", completed : false }
    }
}
