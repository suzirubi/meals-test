import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
	<div class="newForm">
  	<div *ngIf="childSelectedFood">
  		<h3>Edit {{childSelectedFood.name}}</h3>
      <div>
        <label>Edit Food Image:</label><br>
    		<input [(ngModel)]="childSelectedFood.image" placeholder="add new image url here if desired">
      </div>
      <div>
        <label>Edit Food Name:</label><br>
    		<input [(ngModel)]="childSelectedFood.name">
      </div>
      <div>
        <label>Edit Details about Food:</label><br>
    		<input [(ngModel)]="childSelectedFood.details">
      </div>
      <div>
        <label>Edit Calories in Food:</label><br>
    		<input [(ngModel)]="childSelectedFood.calories">
      </div>
      <div>
        <label>Edit Time food consumed:</label><br>
        <input [(ngModel)]="childSelectedFood.time">
      </div>
      <div>
  		  <span class="done"><button (click)="doneButtonClicked()">Done</button></span>
      </div>
  	</div>
  </div>
  `
})

export class EditFoodComponent {

  @Input() childSelectedFood: Food;

  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
  	this.doneButtonClickedSender.emit();
  }

}
