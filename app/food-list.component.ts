import { Component, Input } from '@angular/core';
import { Food } from './food.model';

// , Output, EventEmitter

@Component({
  selector: 'food-list',
  template: `
    <ul>
      <li *ngFor="let currentFood of childFoodList"><img src={{currentFood.image}} alt={{currentFood.name}} width="50px">{{currentFood.name}}<span class="details"><button>more details...</button></span><span class="edit"><button>EDIT</button></span></li>
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
