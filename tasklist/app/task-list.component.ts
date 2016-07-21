import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'task-list',
  template: `
  <h4>Task List</h4>
  <ul>
    <li *ngFor="let task of taskService.tasks">
        <span [class.completed]="task.completed">{{ task.title }} - {{ task.completed }}</span>
        <button (click)="completeTask(task)">Click to Complete</button>
    </li>
  </ul>
  `,
  styles:[".completed { color: green }"]
})
export class TaskListComponent implements OnInit {
    constructor(public taskService: TaskService) { }

    ngOnInit() { }

    completeTask(task) {
        task.completed = true;
    }
}
