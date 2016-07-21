import { Component, OnInit, Injectable } from '@angular/core';

@Injectable()
export class TaskService {
    tasks;

    constructor() {
        this.tasks = [
            { title: "First Task", completed: false },
            { title: "Second Task", completed: false },
            { title: "Third Task", completed: false },
            { title: "Fourth Task", completed: false }
        ];
    }

    addTask(task) {
        this.tasks.push(task);
    }
}