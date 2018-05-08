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
      $('.nav').toggleClass('open');
      e.stopPropagation();
    });
    particlesJS.load('particles-js', 'assets/particles.json', null);
  }

}
