import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: "counter",
  pure: false

})


export class CounterPipe implements PipeTransform {

  transform(input: Food[], desiredCalorieCount) {
    var output: Food[] = [];
    if (desiredCalorieCount === "allFoods") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= 0) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCalorieCount === "foodsUnder500") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCalorieCount === "foodsOver500") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    }  else {
      return input;
    }
  }
}
