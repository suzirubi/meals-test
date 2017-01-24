import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
    <div class="newForm">
      <div *ngIf="addNewFood">
        <h3>New Food <span class="comment">add each food item in your meal separately</span></h3>
        <div>
          <label>New Food Image:</label><br>
          <input #newUserImage placeholder="add image url here">
        </div>
        <div>
          <label>New Food Name:</label><br>
          <input #newName>
        </div>
        <div>
          <label>New Food Details:</label><br>
          <input #newDetails>
        </div>
        <div>
          <label>New Food Calories — (for a handy calorie counter visit <a href="https://www.fitwatch.com/caloriecounter">fit watch</a>)</label><br>
          <input #newCalories placeholder="enter calories in this food here">
        <div>
          <label>Time that I ate this Meal:</label><br>
          <input #newTime>
        </div>
        <div>
          <span class="details"><button (click)="submitForm(newUserImage.value, newName.value, newDetails.value, newCalories.value, newTime.value); newUserImage.value=''; newName.value=''; newDetails.value=''; newCalories.value=''; newTime.value='';"><span class="large">Add New Food to My List!</span></button></span>          <span class="done"><button (click)="newButtonClicked()">Done</button></span>
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
    if (userImage === ''){
      userImage = "./resources/images/catWithFood.png";
    }
    var newFoodToAdd: Food = new Food(userImage, name, details, calories, time);
    this.newFoodSender.emit(newFoodToAdd);
  }
  newButtonClicked() {
    this.newButtonClickedSender.emit();
  }
}
