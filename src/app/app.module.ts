import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FilterDisplayComponent } from './components/filter-display/filter-display.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { CategoriesComponent } from './components/categories/categories.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterDisplayComponent,
    ItemsListComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
