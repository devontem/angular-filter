import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDisplayComponent } from './filter-display.component';

describe('FilterDisplayComponent', () => {
  let component: FilterDisplayComponent;
  let fixture: ComponentFixture<FilterDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formatList should format list from type Filter to array', () => {
    fixture = TestBed.createComponent(FilterDisplayComponent);
    component = fixture.componentInstance;

    var filters = Object.assign({}, component.filters, {mpg: [{title: '21+', start: 21, end: null, id:5}]});
    var filters2 = Object.assign({}, filters, {acc: [{title: '0-10', start: 0, end: 10, id:5}]})
    expect(component.formatList(filters).length).toEqual(1);
    expect(component.formatList(filters2).length).toEqual(2);
  });

  it('handleClick method should emit filterUpdateEvent', () => {
    fixture = TestBed.createComponent(FilterDisplayComponent);
    component = fixture.componentInstance;

    spyOn(component.filterUpdateEvent, 'emit');
    component.filters = Object.assign({}, component.filters, {mpg: [{title: '21+', start: 21, end: null, id:5}]});
    component.handleClick('mpg', 5);
    expect(component.filterUpdateEvent.emit).toHaveBeenCalled;
  });
});
