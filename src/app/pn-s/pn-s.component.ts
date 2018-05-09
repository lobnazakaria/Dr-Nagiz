import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pn-s',
  templateUrl: './pn-s.component.html',
  styleUrls: ['./pn-s.component.css']
})
export class PnSComponent implements OnInit {

  constructor() { }

  images: any[];
    
  ngOnInit() {
      this.images = [];
      this.images.push({source:'assets/images/problem.jpg', alt:'Description for Image 1', title:'Title 1'});
      this.images.push({source:'assets/images/problem.jpg', alt:'Description for Image 2', title:'Title 2'});
      this.images.push({source:'assets/images/problem.jpg', alt:'Description for Image 3', title:'Title 3'});
      this.images.push({source:'assets/images/problem.jpg', alt:'Description for Image 4', title:'Title 4'});
      this.images.push({source:'assets/images/problem.jpg', alt:'Description for Image 1', title:'Title 1'});
      this.images.push({source:'assets/images/problem.jpg', alt:'Description for Image 2', title:'Title 2'});
      this.images.push({source:'assets/images/problem.jpg', alt:'Description for Image 3', title:'Title 3'});
      this.images.push({source:'assets/images/problem.jpg', alt:'Description for Image 4', title:'Title 4'});
      this.images.push({source:'assets/images/problem.jpg', alt:'Description for Image 3', title:'Title 3'});
      this.images.push({source:'assets/images/problem.jpg', alt:'Description for Image 4', title:'Title 4'});
     
  }

}
