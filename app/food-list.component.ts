import { Component, Input } from '@angular/core';
import { Food } from './food.model';

// , Output, EventEmitter

@Component({
  selector: 'food-list',
  template: `
    <ul>
      <li *ngFor="let currentFood of childFoodList">{{currentFood.name}} <button>Edit!</button></li>
    </ul>
  `
})


// (click)="editButtonHasBeenClicked(currentFood)"


export class FoodListComponent {
  @Input() childFoodList: Food[];
  //
  // @Output() clickSender = new EventEmitter();
  //
  // editButtonHasBeenClicked(foodToEdit: Food) {
  //   this.clickSender.emit(foodToEdit);
  // }
}
