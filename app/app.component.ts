import { Component } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>MEALS I ATE <span class="time"> ( on {{month}}-{{day}}-{{year}} )</span></h1>
      <h2>...or at least I wish I ate</h2>
      <food-list [childFoodList]="masterFoodList"></food-list>
    </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() +1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  masterFoodList: Food[] = [
  new Food('French Fries', 'Fried in white truffle oil and lightly salted', 100, 6),
  new Food('Hamburger', 'Lean Eastern Oregon Beef with Tomatoes, Lettuce and Mayonaise', 25, 6),
  new Food('Milkshake', 'Hand-dipped Tillamook Chocolate with cream', 15, 6)
];

}
