import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingNotesComponent } from './shopping-notes.component';

describe('ShoppingNotesComponent', () => {
  let component: ShoppingNotesComponent;
  let fixture: ComponentFixture<ShoppingNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingNotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoppingNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
