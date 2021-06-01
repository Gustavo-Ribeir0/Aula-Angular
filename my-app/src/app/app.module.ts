import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FirstComponent} from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FormularioComponent } from './formulario/formulario.component';
import { StyledInputComponent } from './styled-input/styled-input.component';
import { StyledButtonComponent } from './styled-button/styled-button.component'

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    FormularioComponent,
    StyledInputComponent,
    StyledButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
