import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsItselfComponent } from './posts-itself.component';

describe('PostsItselfComponent', () => {
  let component: PostsItselfComponent;
  let fixture: ComponentFixture<PostsItselfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsItselfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsItselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
