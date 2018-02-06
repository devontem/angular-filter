import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FilterDisplayComponent } from './components/filter-display/filter-display.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CarsService } from './services/cars.service';


@NgModule({
  declarations: [
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
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
