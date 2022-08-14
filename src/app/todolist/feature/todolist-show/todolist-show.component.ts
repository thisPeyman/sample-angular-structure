import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TodolistStore } from '../../data-access/store/todolist.store';

@Component({
  selector: 'app-todolist-show',
  templateUrl: './todolist-show.component.html',
  styleUrls: ['./todolist-show.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodolistShowComponent implements OnInit {
  todos$ = this.todolistStore.todos$;

  constructor(private todolistStore: TodolistStore) {}

  ngOnInit(): void {}

  test() {
    this.todolistStore.addTodo({ id: 20, title: 'my nice todo', isDone: true });
  }
}
