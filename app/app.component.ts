import { Component } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>MEALS I ATE <span class="time"> ( on {{month}}-{{day}}-{{year}} )</span></h1>
      <h2>...or at least I wish I ate</h2>

      <food-list [childFoodList]="masterFoodList" (detailClickSender)="detailFood($event)" (clickSender)="editFood($event)"></food-list>

      <food-detail [foodListDetail]="selectedDetailFood" (hideDetailButtonClickedSender)="hideDetail()"></food-detail>

      <edit-food [childSelectedFood]="selectedFood" (doneButtonClickedSender)="finishedEditing()"></edit-food>

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


  masterFoodList: Food[] = [
  new Food('http://www.econation.co.nz/wp-content/uploads/2015/06/Hamburger.jpg', 'Hamburger', 'Lean Eastern Oregon Beef with Tomatoes, Lettuce and Mayonaise', 25, 6),
  new Food('https://4.imimg.com/data4/UR/QC/MY-26657356/french-fries-box-250x250.jpg','French Fries', 'Fried in white truffle oil and lightly salted', 100, 6),
  new Food('https://images.jmcatalog.com/prdimgs/ACO87yu8/FAB/FABKC24.JPG', 'Milkshake', 'Stumptown coffee, Hand-dipped Tillamook Chocolate, blended with cream', 15, 6)
];

editFood(clickedFood) {
  this.selectedFood = clickedFood;
}

detailFood(foodToShowDetail){
  this.selectedDetailFood = foodToShowDetail;

}



hideDetail() {
  this.selectedDetailFood = null;
}

finishedEditing() {
  this.selectedFood = null;
}

}
