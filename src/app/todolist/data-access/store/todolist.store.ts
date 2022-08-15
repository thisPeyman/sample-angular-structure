import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Todo } from '../models/todo';

interface TodoState {
  todos: Todo[];
}

@Injectable()
export class TodolistStore extends ComponentStore<TodoState> {
  
  readonly todos$ = this.select((state) => state.todos);
  readonly vm$ = this.select(this.todos$, (todos) => ({ todos }));
  
  constructor() {
    super({ todos: [{ title: 'go home', isDone: false, id: 10 }] });
  }

  readonly doneTodos$ = this.select(this.todos$, (todos) =>
    todos.filter((todo) => todo.isDone)
  );

  readonly addTodo = this.updater((state, todo: Todo) => ({
    ...state,
    todos: [...state.todos, todo],
  }));

  readonly removeTodo = this.updater((state, id: number) => ({
    ...state,
    todos: [...state.todos.filter((t) => t.id !== id)],
  }));

}
