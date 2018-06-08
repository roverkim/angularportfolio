import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
// import * as $ from 'jquery';
declare var $ : any;
import { ApicallsService } from '../apicalls.service';


interface emailObject {
  email: string;
  message: string;
  modal: string;
};


@Component({
  selector: 'app-contactsection',
  templateUrl: './contactsection.component.html',
  styleUrls: ['./contactsection.component.css']
})
export class ContactsectionComponent implements OnInit {

  modalRef: BsModalRef;

  emailMessage: emailObject = {
    email: 'Your Email',
    message: 'Your Message',
    modal : ''
  };

  constructor(private apicalls: ApicallsService) { }

  ngOnInit() {

    $(".email-button").click(function() {
      $(".envelope").toggleClass("active");
      setTimeout(()=>$('.card').toggleClass('card_click'), 1200);
      $('.submit').toggleClass("active");

    });


    $('.submit').on('click', function(e) {
      e.preventDefault();
      // $('.card').toggleClass('card_click')
      // $(".envelope").toggleClass("active");
    });

  }

  remove(condition: string): void {
    if (condition == "email"){
      this.emailMessage.email = "";
    } else if (condition == "message"){
      if (this.emailMessage.message == "A message is required" || this.emailMessage.message == "Your Message") {
        this.emailMessage.message = "";
      }
    }
  }


  add(email: string, message: string): void {

    if (email && message) {

      //console.log(email);

      let emailValidator = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;
      let condition = emailValidator.test(email);

      //console.log(condition);

      if (condition) {
        //console.log('Email Valid');
        this.emailMessage.modal = 'Email Sending ...';
        $('#modal_icon').html('<i class="fa fa-spinner" aria-hidden="true"></i>');
        $('#statusModal').modal('show');
        this.apicalls.submitEmail({email, message}).subscribe(response => {
          if (response.status == 'passed'){
            //console.log('Email Sent');
            this.emailMessage.modal = 'Email Sent!';
            $('#modal_icon').html('');
            $('#modal_icon_check').html('<i class="fa fa-check" aria-hidden="true"></i>');
            $('.card').toggleClass('card_click')
            $(".envelope").toggleClass("active");
            setTimeout(()=> $('#statusModal').modal('hide'), 1500);
          } else {
            this.emailMessage.modal = "Email Failed to Send. Please click on the submit button once more."
            setTimeout(()=> $('#statusModal').modal('hide'), 1500);
          }
        });
      } else {
        //console.log('Invalid Email')
        this.emailMessage.email = "Please Enter a Valid Email"
      }

    }

    if (email == "") {
      this.emailMessage.email = "Please Enter an Email";
    }

    if (message == "") {
      this.emailMessage.message = "A message is required";
    }
  }
}
