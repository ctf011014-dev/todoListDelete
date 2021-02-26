import { Component } from '@angular/core';

@Component({
    selector: 'app-todolist',
    templateUrl: './todoList.component.html',
    styleUrls: ['./todoList.component.css']
})
export class ToDoListComponent {
    tasks: string[] = ['Coffee', 'Breakfast'];
    addCnt = 0;

    add(taskName: string): void {
        let t: string;
        t = taskName.trim();

        if (!taskName) {
            return;
        }
        this.tasks.push(t);
        this.addCnt++;
    }

    delete(task: string): void {
        this.tasks = this.tasks.filter(h => h !== task);
    }
}