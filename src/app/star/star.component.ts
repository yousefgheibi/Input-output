import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  rating: number = 2.3;
  width: number = 90;
  constructor() { }

  ngOnInit(): void {
    this.width = ( this.rating / 5 ) * 90;
  }

}
