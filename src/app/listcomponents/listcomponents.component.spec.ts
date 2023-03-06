import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcomponentsComponent } from './listcomponents.component';

describe('ListcomponentsComponent', () => {
  let component: ListcomponentsComponent;
  let fixture: ComponentFixture<ListcomponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcomponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
