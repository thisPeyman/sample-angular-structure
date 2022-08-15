import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Todo } from '../../data-access/models/todo';

@Component({
  selector: 'app-insert-todo',
  templateUrl: './insert-todo.component.html',
  styleUrls: ['./insert-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InsertTodoComponent implements OnInit {
  addForm = this.fb.group({
    title: ['', Validators.required],
  });

  @Output() newTodo = new EventEmitter<Todo>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onFormSubmit(): void {
    if (this.addForm.invalid) return;

    const title = this.addForm.value.title!;

    this.newTodo.emit({ title, isDone: false, id: this.randomNumber });
  }

  get randomNumber(): number {
    return Math.floor(Math.random() * 10000);
  }
}
