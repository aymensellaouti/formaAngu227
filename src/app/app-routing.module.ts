import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodosComponent} from './todos/todos.component';
import {CvComponent} from './cv/cv/cv.component';
import {CvdetailComponent} from './cv/cvdetail/cvdetail.component';
import {Nf400Component} from './nf400/nf400.component';
import {AddPersonneComponent} from './cv/add-personne/add-personne.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: '', component: CvComponent},
  {path: 'todos', component: TodosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cv', children: [
      {path: '', component: CvComponent},
      {path: 'add', component: AddPersonneComponent},
      {path: ':id', component: CvdetailComponent}
    ]
  },
  {path: 'error', component: Nf400Component},
  {path: '**', component: Nf400Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
