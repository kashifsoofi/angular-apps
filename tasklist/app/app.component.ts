import { Component } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TaskService } from './task.service';

@Component({
  selector: 'my-app',
  directives: [TasksComponent],
  providers: [TaskService],
  template: `
  <tasks></tasks>
  `
})
export class AppComponent { }
