import { Component } from '@angular/core';
class Todo {
  title: string;
  desc: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private todo: Todo;
  private todos: Todo[];
  ngOnInit(): void {
    this.todo = new Todo;
    this.todos = [];
  }
  public onSubmit(): void {
    this.todos.push(this.todo);
    this.todo = new Todo;
  }
  public onDelete(index: number): void {
    this.todos.splice(index, 1);
  }
}