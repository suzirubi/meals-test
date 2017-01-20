
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { FoodListComponent } from './food-list.component';
import { FoodDetailComponent } from './food-detail.component';
import { EditFoodComponent } from './edit-food.component';
import { NewFoodComponent } from './new-food.component';
import { CounterPipe } from './counter.pipe';





@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FoodListComponent, FoodDetailComponent, EditFoodComponent, NewFoodComponent, CounterPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
