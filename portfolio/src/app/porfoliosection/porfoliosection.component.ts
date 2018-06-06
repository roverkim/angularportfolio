import { Component, OnInit } from '@angular/core';
import { ApicallsService } from '../apicalls.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-porfoliosection',
  templateUrl: './porfoliosection.component.html',
  styleUrls: ['./porfoliosection.component.css']
})
export class PorfoliosectionComponent implements OnInit {

  githubObject: Array<object>;
  loading: boolean = true;
  video: string = "https://www.google.com/"

  constructor(private apicalls: ApicallsService) {
    console.log(this.apicalls);
  }

  ngOnInit() {
    this.getGithubLinks();
    $('.carousel').css('height', '100%');
  }
  //
  getGithubLinks(): void {
    this.apicalls.getGithubLinks().subscribe(response => {
      this.githubObject = response;
      this.loading = false;
      console.log(this.githubObject)
    })
  }

}
