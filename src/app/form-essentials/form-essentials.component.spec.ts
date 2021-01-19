import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEssentialsComponent } from './form-essentials.component';

describe('FormEssentialsComponent', () => {
  let component: FormEssentialsComponent;
  let fixture: ComponentFixture<FormEssentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEssentialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEssentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
