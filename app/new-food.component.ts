import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
    <div class="newForm">
      <div *ngIf="addNewFood">
        <h3>New Food</h3>
        <div>
          <label>New Food Image:</label>
          <input #newUserImage>
        </div>
        <div>
          <label>New Food Name:</label>
          <input #newName>
        </div>
        <div>
          <label>New Food Details:</label>
          <input #newDetails>
        </div>
        <div>
          <label>New Food Calories:</label>
          <input #newCalories>
        <div>
          <label>New Food Time:</label>
          <input #newTime>
        </div>
        <div>
          <button (click)="submitForm(newUserImage.value, newName.value, newDetails.value, newCalories.value, newTime.value); newUserImage.value=''; newName.value=''; newDetails.value=''; newCalories.value=''; newTime.value='';">Add</button>
        </div>
          <button (click)="newButtonClicked()">Done</button>
        </div>
      </div>
    </div>

  `
})



export class NewFoodComponent {

  @Input () addNewFood: Food;

  @Output() newFoodSender = new EventEmitter();
  @Output() newButtonClickedSender = new EventEmitter();


  submitForm(userImage: string, name: string, details: string, calories: number, time: number) {
    var newFoodToAdd: Food = new Food(userImage, name, details, calories, time);
    this.newFoodSender.emit(newFoodToAdd);
  }
  newButtonClicked() {
    this.newButtonClickedSender.emit();
  }
}
