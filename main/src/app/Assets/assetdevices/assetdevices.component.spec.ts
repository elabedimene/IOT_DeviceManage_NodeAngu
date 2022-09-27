import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetdevicesComponent } from './assetdevices.component';

describe('AssetdevicesComponent', () => {
  let component: AssetdevicesComponent;
  let fixture: ComponentFixture<AssetdevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetdevicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetdevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
