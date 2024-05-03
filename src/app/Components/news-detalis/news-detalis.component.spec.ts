import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetalisComponent } from './news-detalis.component';

describe('NewsDetalisComponent', () => {
  let component: NewsDetalisComponent;
  let fixture: ComponentFixture<NewsDetalisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsDetalisComponent]
    });
    fixture = TestBed.createComponent(NewsDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
