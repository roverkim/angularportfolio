import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

interface responseObject {
  status: string;
  sender: string;
}

@Injectable()
export class ApicallsService {

  private heroesUrl = 'https://api.github.com/users/roverkim/repos?sort=created';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
   getGithubLinks(): Observable <Array<object>>{
    return this.http.get<Array<object>>(this.heroesUrl);
  }

  submitEmail(emailObject: object): Observable <responseObject> {
    return this.http.post<responseObject>('/email', emailObject);
  }
}
