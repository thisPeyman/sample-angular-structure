import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Todo } from '../../data-access/models/todo';
import { TodolistStore } from '../../data-access/store/todolist.store';

@Component({
  selector: 'app-todolist-show',
  templateUrl: './todolist-show.component.html',
  styleUrls: ['./todolist-show.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodolistShowComponent implements OnInit {
  vm$ = this.todolistStore.vm$;

  constructor(private todolistStore: TodolistStore) {}

  ngOnInit(): void {}

  onNewTodo(newTodo: Todo): void {
    this.todolistStore.addTodo(newTodo);
  }
}
