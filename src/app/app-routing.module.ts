import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodosComponent} from './todos/todos.component';
import {CvComponent} from './cv/cv/cv.component';

const routes: Routes = [
  {path: 'todos', component: TodosComponent},
  {path: 'cv', component: CvComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
