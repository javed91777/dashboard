import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEnvComponent } from './test-env.component';

describe('TestEnvComponent', () => {
  let component: TestEnvComponent;
  let fixture: ComponentFixture<TestEnvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEnvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
