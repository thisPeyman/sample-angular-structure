import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistTableComponent } from './todolist-table.component';

describe('TodolistTableComponent', () => {
  let component: TodolistTableComponent;
  let fixture: ComponentFixture<TodolistTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodolistTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
