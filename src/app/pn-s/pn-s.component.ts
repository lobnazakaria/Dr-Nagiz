import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery';
@Component({
  selector: 'app-pn-s',
  templateUrl: './pn-s.component.html',
  styleUrls: ['./pn-s.component.css']
})
export class PnSComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  clicked:boolean=false;
  constructor() { }

  images: any[];
    
  ngOnInit(): void {
 
    this.galleryOptions = [
        {
            width: '90%',
            height: '600px',
            thumbnailsColumns: 5,
            imageAnimation: NgxGalleryAnimation.Slide,
            imageAutoPlay:true,
        },
        // max-width 800
        {
            breakpoint: 800,
            width: '100%',
            height: '600px',
            imagePercent: 80,
            thumbnailsPercent: 20,
            thumbnailsMargin: 20,
            thumbnailMargin: 20
        },
        // max-width 400
        {
            breakpoint: 400,
            preview: false
        }
    ];

    this.galleryImages = [
        {
            small: '../../assets/images/problem.jpg',
            medium: '../../assets/images/problem.jpg',
            big: '../../assets/images/problem.jpg'
        },
        {
            small: '../../assets/images/problem.jpg',
            medium: '../../assets/images/problem.jpg',
            big: '../../assets/images/problem.jpg'
        },
        {
            small: '../../assets/images/problem.jpg',
            medium: '../../assets/images/problem.jpg',
            big: '../../assets/images/problem.jpg'
        },
        {
          small: '../../assets/images/problem.jpg',
          medium: '../../assets/images/problem.jpg',
          big: '../../assets/images/problem.jpg'
      },
      {
        small: '../../assets/images/problem.jpg',
        medium: '../../assets/images/problem.jpg',
        big: '../../assets/images/problem.jpg'
    },
    {
      small: '../../assets/images/problem.jpg',
      medium: '../../assets/images/problem.jpg',
      big: '../../assets/images/problem.jpg'
  }
    ];
}
viewHidden(){
  this.clicked=true;
}
}
