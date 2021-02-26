import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TodosComponent } from './todos/todos.component';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TodosComponent,
    ContainerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
