import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class GetCommentDataService {

  constructor(private http: HttpClient) { }

  public getDataFromUrl(): Observable<Item[]> {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get<Item[]>(url);
  }

}
