import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../data-access/models/todo';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-todolist-table',
  templateUrl: './todolist-table.component.html',
  styleUrls: ['./todolist-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodolistTableComponent implements OnInit {
  @Input() todoData: Todo[] = [];

  displayedColumns: string[] = ['title', 'isDone', 'id'];

  constructor() {}

  ngOnInit(): void {}
}
