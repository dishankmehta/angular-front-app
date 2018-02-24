import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Screen} from './screen';

@Injectable()
export class ScreenService {

  private apiUrl = "http://localhost:8080/screen";

  constructor(private http: HttpClient) {

  }

  getAllScreens(): Observable<Screen[]> {
    return this.http.get(`${this.apiUrl}/all`)
      .catch((error: any) => Observable.throw(error || 'Server Error!!!'));
  }

  getScreenById(id: number): Observable<Screen> {
    return this.http.get(`${this.apiUrl}/${id}`)
      .catch((error: any) => Observable.throw(error || 'Server Error!!!'));
  }

  updateScreenById(screen: Screen): Observable<Screen> {
    return this.http.post(`${this.apiUrl}/update`, screen)
      .catch((error: any) => Observable.throw(error || 'Server Error!!!!!'));
  }


}
