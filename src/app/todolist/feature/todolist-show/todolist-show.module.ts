import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistShowComponent } from './todolist-show.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TodolistShowComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: TodolistShowComponent}])
  ]
})
export class TodolistShowModule { }
