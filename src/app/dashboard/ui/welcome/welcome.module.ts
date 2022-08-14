import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
