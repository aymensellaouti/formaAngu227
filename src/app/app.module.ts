import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ColorComponent } from './color/color.component';
import {FormsModule} from '@angular/forms';
import { CardComponent } from './card/card.component';
import { CvComponent } from './cv/cv/cv.component';
import { ItemComponent } from './cv/item/item.component';
import { DetailComponent } from './cv/detail/detail.component';
import { ListeComponent } from './cv/liste/liste.component';
import { NgStyleComponent } from './directive/ng-style/ng-style.component';
import { NgClassComponent } from './directive/ng-class/ng-class.component';
import { HighlightDirective } from './directive/highlight.directive';
import { RainbowComponent } from './directive/rainbow/rainbow.component';
import { RainbowDirective } from './directive/rainbow.directive';
import { DefaultImagePipe } from './default-image.pipe';
import { TodosComponent } from './todos/todos.component';
import {LoggerService} from './services/logger.service';
import {TodoService} from './services/todo.service';
import { HeaderComponent } from './header/header.component';
import { RouteSimulatorComponent } from './route-simulator/route-simulator.component';
import { CvdetailComponent } from './cv/cvdetail/cvdetail.component';
import { Nf400Component } from './nf400/nf400.component';
import { AddPersonneComponent } from './cv/add-personne/add-personne.component';
import { LoginComponent } from './login/login.component';
import { ObservableComponent } from './observable/observable.component';
import { TesthttpComponent } from './testhttp/testhttp.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ColorComponent,
    CardComponent,
    CvComponent,
    ItemComponent,
    DetailComponent,
    ListeComponent,
    NgStyleComponent,
    NgClassComponent,
    HighlightDirective,
    RainbowComponent,
    RainbowDirective,
    DefaultImagePipe,
    TodosComponent,
    HeaderComponent,
    RouteSimulatorComponent,
    CvdetailComponent,
    Nf400Component,
    AddPersonneComponent,
    LoginComponent,
    ObservableComponent,
    TesthttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
