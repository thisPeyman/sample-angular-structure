import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertTodoComponent } from './insert-todo.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InsertTodoComponent],
  imports: [CommonModule, MatButtonModule, MatInputModule, ReactiveFormsModule],
  exports: [InsertTodoComponent],
})
export class InsertTodoModule {}
