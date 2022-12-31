import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, throwError } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
    // private api = 'https://mailthis.to/code-go'
    _url = 'http://localhost:8080/enroll';
    constructor(private _http: HttpClient) { }

  enroll(user: User){
    return this._http.post<any>(this._url, user)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(() => error);
  }


}
