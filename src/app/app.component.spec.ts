import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterDisplayComponent } from './components/filter-display/filter-display.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CarsService } from './services/cars.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    const CarsServiceStub = {
      getData: function(){
        return [];
      }
    };
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AppComponent,
        FilterDisplayComponent,
        ItemsListComponent,
        CategoriesComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
      ],
      providers: [CarsService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should have a filters property with each attribute', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    fixture.whenStable().then(() => { 
      expect(app.filters.acc).toBeTruthy();
      expect(app.filters.dsp).toBeTruthy();
      expect(app.filters.hp).toBeTruthy();
      expect(app.filters.cyl).toBeTruthy();
      expect(app.filters.lbs).toBeTruthy();
      expect(app.filters.year).toBeTruthy();
      expect(app.filters.mpg).toBeTruthy();
    });
  }));
  it('should have a receiveMessage method that updates filter property', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    fixture.whenStable().then(() => { 
      var updatedFilters = Object.assign({}, app.filters, { 
        mpg: [{
          title: '<10', 
          id:1, 
          start: 0, 
          end: 10 
        }]
      });
      app.receiveMessage(updatedFilters);
      expect(app.filters.mpg[0].id).toEqual(1);
    });
  }));
});
