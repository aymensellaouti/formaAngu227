import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodosComponent} from './todos/todos.component';
import {CvComponent} from './cv/cv/cv.component';
import {CvdetailComponent} from './cv/cvdetail/cvdetail.component';
import {Nf400Component} from './nf400/nf400.component';

const routes: Routes = [
  {path: 'todos', component: TodosComponent},
  {path: 'cv', children: [
      {path: '', component: CvComponent},
      {path: ':id', component: CvdetailComponent}
    ]
  },
  {path: '**', component: Nf400Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
