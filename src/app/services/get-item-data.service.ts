import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../model/item';


@Injectable({
  providedIn: 'root'
})
export class GetItemDataService {

  constructor(private http: HttpClient) { }

  public getItemDetail(): Observable<Item[]> {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get<Item[]>(url);
  }

  public getCommentDetail(id: string): Observable<Item[]> {
    const url = 'https://jsonplaceholder.typicode.com/comments?postId=' + id;
    return this.http.get<Item[]>(url);
  }
}
