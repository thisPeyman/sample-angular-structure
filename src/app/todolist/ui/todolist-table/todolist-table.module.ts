import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistTableComponent } from './todolist-table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [TodolistTableComponent],
  imports: [CommonModule, MatTableModule],
  exports: [TodolistTableComponent],
})
export class TodolistTableModule {}
