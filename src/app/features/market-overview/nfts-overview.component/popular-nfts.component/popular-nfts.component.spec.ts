import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularNftsComponent } from './popular-nfts.component';

describe('PopularNftsComponent', () => {
  let component: PopularNftsComponent;
  let fixture: ComponentFixture<PopularNftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularNftsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularNftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
