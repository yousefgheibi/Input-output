import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Input-output';
  ratings = [2, 3.2, 4, 1.5, 5];

  onStarClicked(rating : number){
    console.log(`This rating ${rating} is clicked!`);
  }
}


