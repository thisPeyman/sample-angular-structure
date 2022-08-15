import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistShowComponent } from './todolist-show.component';
import { RouterModule } from '@angular/router';
import { TodolistTableModule } from '../../ui/todolist-table/todolist-table.module';
import { InsertTodoModule } from '../../ui/insert-todo/insert-todo.module';

@NgModule({
  declarations: [TodolistShowComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TodolistShowComponent }]),
    TodolistTableModule,
    InsertTodoModule
  ],
})
export class TodolistShowModule {}
