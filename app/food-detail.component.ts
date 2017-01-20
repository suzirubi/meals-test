import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-detail',
  template: `
	<div class="listDetail">
  	<div *ngIf="foodListDetail">
  		<h3>{{foodListDetail.name}}</h3>
      <h6>{{foodListDetail.details}}</h6>
      <h6>{{foodListDetail.name}} has a total of {{foodListDetail.calories}} calories</h6>
      <h6>{{foodListDetail.time}} was when I ate this food</h6>

      <span class="done"><button (click)="hideDetailButtonClicked()"><span class="small">Hide Details</span></button></span>
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
