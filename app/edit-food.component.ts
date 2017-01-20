import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
	<div>
  	<div *ngIf="childSelectedFood">
  		<h3>Edit {{childSelectedFood.name}}</h3>
  		<label>Edit Food Image:</label>
  		<input [(ngModel)]="childSelectedFood.image">
  		<label>Edit Food Name:</label>
  		<input [(ngModel)]="childSelectedFood.name">
  		<label>Edit Details about Food:</label>
  		<input [(ngModel)]="childSelectedFood.details">
  		<label>Edit Calories in Food:</label>
  		<input [(ngModel)]="childSelectedFood.calories">
      <label>Edit Time food consumed:</label>
      <input [(ngModel)]="childSelectedFood.time">
  		<button (click)="doneButtonClicked()">Done</button>
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
