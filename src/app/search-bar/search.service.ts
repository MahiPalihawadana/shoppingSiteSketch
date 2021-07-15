import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  ProductName: '';
  searchResults: Array<any> = [];
  items: Array<any> = [];

  constructor(private http: HttpClient) { }

  // public searchItem(data: string): Observable<any> {
  //   return this.http.get('http://localhost:3000/products/getSearchList/' + data);

  // }
}