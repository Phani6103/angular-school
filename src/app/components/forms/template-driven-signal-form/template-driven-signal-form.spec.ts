import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenSignalForm } from './template-driven-signal-form';

describe('TemplateDrivenSignalForm', () => {
  let component: TemplateDrivenSignalForm;
  let fixture: ComponentFixture<TemplateDrivenSignalForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenSignalForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenSignalForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
