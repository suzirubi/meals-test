import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
	<div class="newForm">
  	<div *ngIf="hideEditForm">
  		<h3>Edit {{selectedFood.name}}</h3>
      <div>
        <label>Edit Food Image:</label><br>
    		<input [(ngModel)]="selectedFood.image" placeholder="add new image url here if desired">
      </div>
      <div>
        <label>Edit Food Name:</label><br>
    		<input [(ngModel)]="selectedFood.name">
      </div>
      <div>
        <label>Edit Details about Food:</label><br>
    		<input [(ngModel)]="selectedFood.details">
      </div>
      <div>
        <label>Edit Calories in Food:</label><br>
    		<input [(ngModel)]="selectedFood.calories">
      </div>
      <div>
        <label>Edit Time food consumed:</label><br>
        <input [(ngModel)]="selectedFood.time">
      </div>
      <div>
  		  <span class="done"><button (click)="doneButtonClicked()">Done</button></span><span class="done"><button (click)="hideEditButtonClicked()">Hide</button></span>
      </div>
  	</div>
  </div>
  `
})

export class EditFoodComponent {
  hideEditForm: boolean = true;


  @Input() selectedFood: Food;



  @Output() doneButtonClickedSender = new EventEmitter();


  doneButtonClicked() {
  	this.doneButtonClickedSender.emit();
  }
  hideEditButtonClicked() {
    this.hideEditForm = false;
  }

}
