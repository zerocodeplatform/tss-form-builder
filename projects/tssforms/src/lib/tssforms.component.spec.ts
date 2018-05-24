import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TssformsComponent } from './tssforms.component';

describe('TssformsComponent', () => {
  let component: TssformsComponent;
  let fixture: ComponentFixture<TssformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TssformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TssformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
