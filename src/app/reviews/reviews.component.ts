import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor() { }

  ngOnInit(): void {
 
    this.galleryOptions = [
        {
            width: '100%',
            height: '400px',
            thumbnailsColumns: 3,
            imageAnimation: NgxGalleryAnimation.Slide,
            imageSize:NgxGalleryImageSize.Contain,
            imageAutoPlay:true,
            thumbnailSize:NgxGalleryImageSize.Contain,
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
            small: '../../assets/images/c-product.jpg',
            medium: '../../assets/images/c-product.jpg',
            big: '../../assets/images/c-product.jpg'
        },
        {
            small: '../../assets/images/c-product.jpg',
            medium: '../../assets/images/c-product.jpg',
            big: '../../assets/images/c-product.jpg'
        },
        {
            small: '../../assets/images/c-product.jpg',
            medium: '../../assets/images/c-product.jpg',
            big: '../../assets/images/c-product.jpg'
        }
    ];
}
 

}
