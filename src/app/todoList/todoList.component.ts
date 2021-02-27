import { Component } from '@angular/core';

@Component({
    selector: 'app-todolist',
    templateUrl: './todoList.component.html',
    styleUrls: ['./todoList.component.css']
})
export class ToDoListComponent {
    tasks: string[] = ['Coffee', 'Breakfast'];
    task: string;
    addCnt = 0;

    add(): void {
        let t: string;
        t = this.task.trim();

        if (!this.task) {
            return;
        }
        this.tasks.push(t);
        this.task = '';
        this.addCnt++;
    }
    delete(task: string): void {
        this.tasks = this.tasks.filter(h => h !== task);
    }
}