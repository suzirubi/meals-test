import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-detail',
  template: `

  <span class="details"><button *ngIf="!listDetail" (click)="detailButtonClicked()"> - more details...</button></span>

	<div class="listDetail">
  	<div *ngIf="foodListDetail">
  		<h3>{{currentFood.name}}</h3>
      <h6>{{currentFood.details}}</h6>
      <h6>{{currentFood.name}} has a total of {{currentFood.calories}} calories</h6>
      <h6>{{currentFood.time}} was when I ate this food</h6>

      <span class="edit"><button (click)="hideDetailButtonClicked()"><span >HIDE</span></button></span>
      <span class="edit pink"><button (click)="editFood()">EDIT</button></span>
  	</div>
  </div>




  <edit-food *ngIf="!selectedFood" [selectedFood]="currentFood" (doneButtonClickedSender)="doneButtonClicked()"></edit-food>
  `
})



export class FoodDetailComponent {

  @Input() currentFood: Food;
  foodListDetail: boolean = false;
  selectedFood: boolean = true;

  @Output() doneButtonClickedSender = new EventEmitter();

  @Output() detailClickSender = new EventEmitter();

  doneButtonClicked(foodToEdit: Food) {
    this.doneButtonClickedSender.emit(foodToEdit);
  }


  editFood() {
    this.selectedFood = false;
  }


  detailButtonClicked() {
    this.foodListDetail = true;
  }

  hideDetailButtonClicked(){
    this.foodListDetail = false;
  }

}
