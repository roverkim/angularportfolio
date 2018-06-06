import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-contactsection',
  templateUrl: './contactsection.component.html',
  styleUrls: ['./contactsection.component.css']
})
export class ContactsectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".email-button").click(function() {
      $(".envelope").toggleClass("active");
      setTimeout(()=>$('.card').toggleClass('card_click'), 1200);
      $('.submit').toggleClass("active");
    });


    $('.submit').on('click', function(e) {
      e.preventDefault();
      $('.card').toggleClass('card_click')
      $(".envelope").toggleClass("active");
    });

  }
}
