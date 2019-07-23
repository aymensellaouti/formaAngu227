import { Injectable } from '@angular/core';
import {Todo} from '../model/todo';
import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];
  constructor(private loggerService: LoggerService) {
    this.todos = [
      new Todo('lundi', 'component'),
      new Todo('mardi', 'directives et service'),
    ];
  }
  logger(todo: Todo) {
    this.loggerService.logger(todo.name + ' : ' + todo.content);
  }
  add(todo: Todo) {
    this.todos.push(todo);
  }
  delete(todo: Todo) {
   const index = this.todos.indexOf(todo);
   if (index > -1) {
     this.todos.splice(index, 1);
   }
  }
  getTodos() {
    return this.todos;
  }
}
