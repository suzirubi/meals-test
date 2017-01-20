import { Component } from '@angular/core';

@Component ({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>MEALS I ATE <span class="time"> ( on {{month}}-{{day}}-{{year}} )</span></h1>
      <h2>...or at least I wish I ate</h2>
    </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() +1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();


}
