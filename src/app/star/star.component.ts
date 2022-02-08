import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input() rating: number = 2.3;
  @Output() starClicked = new EventEmitter<number>();
  width: number = 90;

  constructor() { }

  ngOnInit(): void {
    this.width = ( this.rating / 5 ) * 90;
  }

  //Every time I use this function it calls rating variable
  public onClick() {
    this.starClicked.emit(this.rating);
  }

}
