import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit(){
    $(document).ready(function() {
      setTimeout(()=>{
        $('#loader-wrapper').toggleClass('loaded');
        $('#loader').toggleClass('loaded');
      }, 2000)

    });
  }

}
