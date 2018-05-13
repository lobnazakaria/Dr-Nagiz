import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize, NgxGalleryLayout } from 'ngx-gallery';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  clicked:boolean=false;
  constructor() { }

  ngOnInit(): void {
 
    this.galleryOptions = [
        {
            width: '90%',
            height: '500px',
            thumbnailsColumns: 6,
            imageAnimation: NgxGalleryAnimation.Fade,
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
            thumbnailsMargin: 10,
            thumbnailMargin: 10,
            
        },
        // max-width 400
        {
            breakpoint: 400,
            preview: false
        }
    ];

    this.galleryImages = [
        {
            small: '../../assets/images/r-product.jpg',
            medium: '../../assets/images/r-product.jpg',
            big: '../../assets/images/r-product.jpg'
        },
        {
            small: '../../assets/images/c-product.jpg',
            medium: '../../assets/images/c-product.jpg',
            big: '../../assets/images/c-product.jpg'
        },
        {
            small: '../../assets/images/c-product2.png',
            medium: '../../assets/images/c-product2.png',
            big: '../../assets/images/c-product2.png'
        },
        {
            small: '../../assets/images/r-product.jpg',
            medium: '../../assets/images/r-product.jpg',
            big: '../../assets/images/r-product.jpg'
        },
        {
            small: '../../assets/images/c-product2.png',
            medium: '../../assets/images/c-product2.png',
            big: '../../assets/images/c-product2.png'
        },
        {
            small: '../../assets/images/c-product.jpg',
            medium: '../../assets/images/c-product.jpg',
            big: '../../assets/images/c-product.jpg'
        },
        {
            small: '../../assets/images/r-product.jpg',
            medium: '../../assets/images/r-product.jpg',
            big: '../../assets/images/r-product.jpg'
        },
    ];
}
viewHidden(){
    this.clicked=true;
  }

}
