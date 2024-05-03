import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private httpClient:HttpClient) { }
  baseUrl: string = 'http://localhost:5084';


  getAthorById(id:any):Observable<any>
  {
    return this.httpClient.get(`${this.baseUrl}/api/Authors/${id}`)
  }

}
