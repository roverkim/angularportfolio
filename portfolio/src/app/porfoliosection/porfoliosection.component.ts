import { Component, OnInit } from '@angular/core';
import { ApicallsService } from '../apicalls.service';

@Component({
  selector: 'app-porfoliosection',
  templateUrl: './porfoliosection.component.html',
  styleUrls: ['./porfoliosection.component.css']
})
export class PorfoliosectionComponent implements OnInit {

  githubObject: Array<object>;
  loading: boolean = true;

  constructor(private apicalls: ApicallsService) {
    console.log(this.apicalls);
  }

  ngOnInit() {
    this.getGithubLinks();
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
