import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ipost } from './post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private _url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Ipost[]> {
    return this.http.get<Ipost[]>(this._url);
  }
}
