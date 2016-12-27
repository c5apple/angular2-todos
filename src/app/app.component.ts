import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private todoService: TodoService
  ) { }

  private todo: Todo;
  private todos: Todo[];

  ngOnInit(): void {
    this.todo = new Todo;
    this.todos = this.todoService.list;
  }
  public onSubmit(): void {
    this.todoService.add(this.todo);
    this.todo = new Todo;
  }
  public onDelete(index: number): void {
    this.todoService.delete(index);
  }
}