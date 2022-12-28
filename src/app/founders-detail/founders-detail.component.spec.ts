import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundersDetailComponent } from './founders-detail.component';

describe('FoundersDetailComponent', () => {
  let component: FoundersDetailComponent;
  let fixture: ComponentFixture<FoundersDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundersDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
