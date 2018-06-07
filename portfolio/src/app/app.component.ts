import { Component, ViewEncapsulation, ViewChild, ElementRef, PipeTransform, Pipe, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public showContent: boolean = false;
  title: string = 'app';

  ngOnInit(){
      setTimeout(()=>{
        $('#loader-wrapper').toggleClass('loaded');
        $('#loader').toggleClass('loaded');
      }, 2000);

      setTimeout(()=>this.showContent = true, 9500);
  }

}
