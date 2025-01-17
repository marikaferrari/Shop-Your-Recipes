import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepAwakeComponent } from './keep-awake.component';

describe('KeepAwakeComponent', () => {
  let component: KeepAwakeComponent;
  let fixture: ComponentFixture<KeepAwakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeepAwakeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeepAwakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
