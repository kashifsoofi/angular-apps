import { Component, OnInit } from '@angular/core';
import { TaskNewComponent } from './task-new.component';
import { TaskListComponent } from './task-list.component';

@Component({
  selector: 'tasks',
  directives: [TaskNewComponent, TaskListComponent],
  template: `
  <h1>Task List Application</h1>
  <task-new></task-new>
  <task-list></task-list>
  `
})
export class TasksComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
