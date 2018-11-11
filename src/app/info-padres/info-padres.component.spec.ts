import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPadresComponent } from './info-padres.component';

describe('InfoPadresComponent', () => {
  let component: InfoPadresComponent;
  let fixture: ComponentFixture<InfoPadresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPadresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPadresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
