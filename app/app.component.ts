import { Component } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>MEALS YOU ATE TODAY <span class="details right"><button (click)="showNewForm()">Add Foods That You Ate Today!</button></span></h1>

      <food-list [childFoodList]="masterFoodList" (doneButtonClickedSender)="finishedEditing($event)" (detailClickSender)="detailFood($event)"></food-list>

      <span class="time">( foods consumed today — {{month}}/{{day}}/{{year}} )</span>

      <new-food [addNewFood]="newFood" (newFoodSender)="addFood($event)" (newButtonClickedSender)="finishedNew()"></new-food>

    </div>
  `
})




export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() +1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedFood = null;
  selectedDetailFood = null;
  newFood = null;



  masterFoodList: Food[] = [
  new Food('http://www.econation.co.nz/wp-content/uploads/2015/06/Hamburger.jpg', 'Hamburger', 'Lean Eastern Oregon Beef with Tomatoes, Lettuce and Mayonaise', 500, 6),
  new Food('https://4.imimg.com/data4/UR/QC/MY-26657356/french-fries-box-250x250.jpg','French Fries', 'Fried in white truffle oil and lightly salted', 100, 6),
  new Food('https://images.jmcatalog.com/prdimgs/ACO87yu8/FAB/FABKC24.JPG', 'Milkshake', 'Stumptown coffee, Hand-dipped Tillamook Chocolate, blended with cream', 15, 6)
];

finishedEditing(foodToEdit){
  this.selectedFood = foodToEdit;
}

detailFood(foodToShowDetail){
  this.selectedDetailFood = foodToShowDetail;
}

finishedNew() {
  this.newFood = null;
}
addFood(newFoodFromChild: Food) {
  this.masterFoodList.push(newFoodFromChild);
}
showNewForm(){
  this.newFood = true;
}

}
