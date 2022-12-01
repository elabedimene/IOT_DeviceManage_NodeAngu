import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAssetContentComponent } from './dialog-asset-content.component';

describe('DialogAssetContentComponent', () => {
  let component: DialogAssetContentComponent;
  let fixture: ComponentFixture<DialogAssetContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAssetContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAssetContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
