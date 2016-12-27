import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoService {

  private todos: Todo[] = [];

  constructor() { }

  public get list(): Todo[] {
    return this.todos;
  }
  public add(todo: Todo): void {
    this.todos.push(todo);
  }
  public delete(index: number): void {
    this.todos.splice(index, 1);
  }
}
