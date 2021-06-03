/*tslint:disable*/
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public _url = "https://jsonplaceholder.typicode.com/todos"

  constructor(private http: HttpClient) { }


  getUserData(): Observable<any>{
    return this.http.get<any>(this._url);
  }
}
