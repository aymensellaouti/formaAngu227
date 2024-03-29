import { Component, OnInit } from '@angular/core';
import {Todo} from '../model/todo';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  todo: Todo;
  constructor(private todoService: TodoService) {
    this.todo = new Todo('', '');
  }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  deleteTodo(todo: Todo) {
    this.todoService.delete(todo);
  }
  addTodo() {
    this.todoService.add(this.todo);
    this.todo = new Todo('', '');
  }

}
