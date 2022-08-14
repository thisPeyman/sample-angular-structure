import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodolistShellRoutingModule } from './todolist-shell-routing.module';
import { TodolistStore } from '../../data-access/store/todolist.store';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TodolistShellRoutingModule
  ],
  providers: [TodolistStore]
})
export class TodolistShellModule { }
