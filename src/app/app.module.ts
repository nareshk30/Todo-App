import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodosFormsComponent } from './components/todos-forms/todos-forms.component';
import { HeaderComponent } from './layout/header/header.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome"
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodosFormsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
