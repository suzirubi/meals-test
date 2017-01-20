import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';


@Component({
  selector: 'food-list',
  template: `
    <ul>
      <li *ngFor="let currentFood of childFoodList"><img src={{currentFood.image}} alt={{currentFood.name}} width="50px">{{currentFood.name}}<span class="details"><button (click)="showDetailHasBeenClicked(currentFood)">more details...</button></span><span class="edit"><button (click)="editButtonHasBeenClicked(currentFood)">EDIT</button></span></li>
    </ul>
  `
})





export class FoodListComponent {
  @Input() childFoodList: Food[];


  @Output() clickSender = new EventEmitter();
  @Output() detailClickSender = new EventEmitter();


  editButtonHasBeenClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }


  showDetailHasBeenClicked(foodToShowDetail: Food) {
    this.detailClickSender.emit(foodToShowDetail);
  }

}
