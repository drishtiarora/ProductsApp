import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() rating : number;
  @Output() ratingtoParent : EventEmitter<string> = new EventEmitter();
  rating_array : any = [];

  constructor() { }

  ngOnInit() {
    this.rating_array = Array(Math.round(this.rating)).fill(this.rating);
    console.log(this.rating_array);
  }
  sendratingToParent(){
    this.ratingtoParent.emit('Rating value =' + this.rating);
  }
}
