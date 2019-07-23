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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
