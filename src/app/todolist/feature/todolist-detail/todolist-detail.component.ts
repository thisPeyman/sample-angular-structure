import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist-detail',
  templateUrl: './todolist-detail.component.html',
  styleUrls: ['./todolist-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodolistDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
