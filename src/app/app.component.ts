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
          /*
          if( win.scrollTop() >= $('.products').outerHeight() - 464 ){
              navbar.removeClass('sticky');
              $(".sticky-fix").css("display","none");
          }
          */
      }
      
      
  win.scroll(sticky);
      
     
      
       
  
  });
  }
}
