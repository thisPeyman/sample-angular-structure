import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistDetailComponent } from './todolist-detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TodolistDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: TodolistDetailComponent}])
  ]
})
export class TodolistDetailModule { }
