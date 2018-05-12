import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
clicked:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  viewHidden(){
    this.clicked=true;
  }
}
