import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }