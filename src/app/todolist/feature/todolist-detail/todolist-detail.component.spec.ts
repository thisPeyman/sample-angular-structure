import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistDetailComponent } from './todolist-detail.component';

describe('TodolistDetailComponent', () => {
  let component: TodolistDetailComponent;
  let fixture: ComponentFixture<TodolistDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodolistDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
