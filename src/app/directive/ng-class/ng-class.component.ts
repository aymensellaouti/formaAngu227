import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css'],
  providers: [TodoService]
})
export class NgClassComponent implements OnInit {

  allumee = false;
  constructor() { }

  ngOnInit() {
  }

}
