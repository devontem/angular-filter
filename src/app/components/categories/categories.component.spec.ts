import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesComponent } from './categories.component';
import { CarsService } from './../../services/cars.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

describe('CategoriesComponent', () => {
  let component:CategoriesComponent;
  let fixture:ComponentFixture<CategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
      ],
      providers: [CarsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('handleChange method should emit filterUpdateEvent', () => {
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;

    spyOn(component.filterUpdateEvent, 'emit');
    var option = {title: '21+', start: 21, end: null, id:5};
    component.filters = Object.assign({}, component.filters, {mpg: [option]});
    component.handleChange('mpg', option);
    expect(component.filterUpdateEvent.emit).toHaveBeenCalled;
  });

  it('handleChange should remove filter if present', () => {
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;

    var option = {title: '21+', start: 21, end: null, id:5};
    component.filters = Object.assign({}, component.filters, {mpg: [option]});
    component.handleChange('mpg', option);
    expect(component.filters.mpg.length).toEqual(0);
  });

  it('ngOnInit method should call getCategories', () => {
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;

    spyOn(component, 'getCategories');
    component.ngOnInit();
    expect(component.getCategories).toHaveBeenCalled;
  });

  it('isChecked method should show false if filter is not applied', () => {
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;

    var option = {title: '21+', start: 21, end: null, id:5};
    var newOption = {title: '10-23', start: 10, end: 20, id:6};
    component.filters = Object.assign({}, component.filters, {mpg: [option]});
    expect(component.isChecked('mpg', newOption)).toEqual(false);
  });

  it('isChecked method should show true if filter is not applied', () => {
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;

    var option = {title: '21+', start: 21, end: null, id:5};
    component.filters = Object.assign({}, component.filters, {mpg: [option]});
    expect(component.isChecked('mpg', option)).toEqual(true);
  });
});
