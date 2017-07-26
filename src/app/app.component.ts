import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayParagraph = true;
  logClicks = [];
  i = 0;

  onDisplayDetails() {
    this.displayParagraph = !this.displayParagraph;
    this.logClicks.push(++this.i);
  }

  getColor() {
    if (this.isLogsMoreThanFourElements()) {
      return 'blue';
    }
  }

  isLogsMoreThanFourElements() {
    return this.i > 4;
  }
}
