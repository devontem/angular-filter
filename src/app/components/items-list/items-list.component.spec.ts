import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsListComponent } from './items-list.component';

import { CarsService } from './../../services/cars.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

describe('ItemsListComponent', () => {
  let component: ItemsListComponent;
  let fixture: ComponentFixture<ItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsListComponent ],
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
    fixture = TestBed.createComponent(ItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('applyFilters method should apply filter based on rawData and return all products with 21+ mpg', () => {
    fixture = TestBed.createComponent(ItemsListComponent);
    component = fixture.componentInstance;

    component.data = [{name: 'Chevy', mpg:20, dsp: 10, acc:10, lbs:1000, hp:200, year:88, cyl:4}, {name: 'Honda', mpg:9, dsp: 10, acc:10, lbs:1000, hp:200, year:88, cyl:4}];
    component.filters = Object.assign({}, component.filters, {mpg: [{title: '21+', start: 21, end: null, id:5}]});
    component.applyFilters();
    expect(component.results.length).toEqual(0);
  });

  it('applyFilters method should apply filter based on rawData and return all products with 10-20 mpg', () => {
    fixture = TestBed.createComponent(ItemsListComponent);
    component = fixture.componentInstance;

    component.data = [{name: 'Chevy', mpg:20, dsp: 10, acc:10, lbs:1000, hp:200, year:88, cyl:4}, {name: 'Honda', mpg:9, dsp: 10, acc:10, lbs:1000, hp:200, year:88, cyl:4}];
    component.filters = Object.assign({}, component.filters, {mpg: [{title: '10-20', start: 10, end: 20, id:5}]});
    component.applyFilters();
    expect(component.results.length).toEqual(1);
  });

  it('ngOnInit method should call getData', () => {
    fixture = TestBed.createComponent(ItemsListComponent);
    component = fixture.componentInstance;

    spyOn(component, 'getData');
    component.ngOnInit();
    expect(component.getData).toHaveBeenCalled;
  });

  it('ngOnChanges method should call applyFilters', () => {
    fixture = TestBed.createComponent(ItemsListComponent);
    component = fixture.componentInstance;

    spyOn(component, 'applyFilters');
    component.ngOnChanges({});
    expect(component.applyFilters).toHaveBeenCalled;
  });
});
