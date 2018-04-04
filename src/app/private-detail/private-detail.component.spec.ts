import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateDetailComponent } from './private-detail.component';

describe('PrivateDetailComponent', () => {
  let component: PrivateDetailComponent;
  let fixture: ComponentFixture<PrivateDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
