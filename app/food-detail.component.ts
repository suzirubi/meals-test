import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-detail',
  template: `
	<div>
  	<div *ngIf="foodListDetail">
  		<h3>{{foodListDetail.name}}</h3>
      <h6>{{foodListDetail.details}}</h6>
      <h6>{{foodListDetail.name}} has a total of {{foodListDetail.calories}} calories</h6>
      <h6>{{foodListDetail.time}} was when I ate this food</h6>

      <button (click)="hideDetailButtonClicked()">Hide Details</button>
  	</div>
  </div>
  `
})

export class FoodDetailComponent {

  @Input() foodListDetail: Food;

  @Output() hideDetailButtonClickedSender = new EventEmitter();

  hideDetailButtonClicked() {
  	this.hideDetailButtonClickedSender.emit();
  }

}
