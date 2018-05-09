import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit(){
    $(document).ready(function(){  
        var url = window.location;
        $('ul a[href="'+ url +'"]').parent().addClass('active');
        $('ul a').filter(function() {
         return this.routerLink == url;
        }).parent().addClass('active');

        var win = $(window),
        navbar = $('nav'),
        pos = $(".main-bar").innerHeight(),
          
      
          sticky = function(){ 
              
          if(win.scrollTop() > pos){
              navbar.addClass("navFixed");
              $(".main-bar").css("margin-bottom","30px");
              
  
          }else{
              navbar.removeClass("navFixed");
              $(".main-bar").css("margin-bottom","0px");
              
          }
         
      }
      win.scroll(sticky);
    });
  }
}
