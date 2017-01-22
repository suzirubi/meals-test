import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';


@Component({
  selector: 'food-list',
  template: `
    <div class="mainList">
      <ul>
        <li *ngFor="let currentFood of childFoodList | counter:filterByCounter "><img src={{currentFood.userImage}} alt={{currentFood.name}} width="50px">{{currentFood.name}} <span class="details"><button (click)="showDetailHasBeenClicked(currentFood)"> — more details...</button></span><span class="edit"><button (click)="editButtonHasBeenClicked(currentFood)">EDIT</button></span></li>
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



  @Output() clickSender = new EventEmitter();
  @Output() detailClickSender = new EventEmitter();


  editButtonHasBeenClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }


  showDetailHasBeenClicked(foodToShowDetail: Food) {
    this.detailClickSender.emit(foodToShowDetail);
  }

}

//
// newUserImage(currentFood.userImage: Food.userImage) {
//   var currentFood = childFoodList;
//   if (currentFood.userImage === '') {
//     return currentFood.userImage = './resources/images/catWithFood.png';
//   } else {
//     return currentFood.userImage;
//   }
// }
