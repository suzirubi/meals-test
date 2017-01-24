import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';


@Component({
  selector: 'food-list',
  template: `
    <div class="mainList">
      <ul>
        <li *ngFor="let currentFood of childFoodList | counter:filterByCounter "><img src={{currentFood.userImage}} alt={{currentFood.name}} width="50px">{{currentFood.name}}

        <food-detail [currentFood]="currentFood"></food-detail>

        </li>
      </ul>
      <p>
      Change the view of the listed items above by the amount of calories they contain:
      <select (change)="onChange($event.target.value)">
        <option value="allFoods" selected="selected">All Foods</option>
        <option value="foodsUnder500">Foods Under 500 Calories</option>
        <option value="foodsOver500">Foods Over 500 Calories</option>
      </select>
      </p>
    </div>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];

  filterByCounter: string = "allFoods";

  onChange(optionFromMenu) {
    this.filterByCounter = optionFromMenu;
  }

  @Output() detailClickSender = new EventEmitter();

  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked(foodToEdit: Food) {
    this.doneButtonClickedSender.emit(foodToEdit);
  }

  showDetailHasBeenClicked(foodToShowDetail: Food) {
    this.detailClickSender.emit(foodToShowDetail);
  }

}
