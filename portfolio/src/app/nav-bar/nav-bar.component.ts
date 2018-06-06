import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Toggle Menu
    $('#menu').on('click', (e)=>{
      $('.fa-bars').toggleClass('menuActive');
      $('.nav').toggleClass('open');
      e.stopPropagation();
    });

      // Scroll to Contact Section
      // Add smooth scrolling to all links
    $("#contact").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;
        console.log(hash);

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
          // Add hash (#) to URL when done scrolling (default click behavior)
          // window.location.hash = hash;
        });
      } // End if
    });
  }
}
