import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { People } from './../../model/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  public API = 'https://swapi.dev/api';
  public PEOPLE_API = this.API + '/people';
  
  constructor(private http: HttpClient) { }
 
  getAll(page: number): Observable<any> {

    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
      'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
      'Content-Type' : 'application/json'

     });

    return this.http.get('/api/people/?page=' + page);
  }

  getId(id: string): Observable<any>{
    
    return this.http.get('/api/people/' + id);
  }
}
