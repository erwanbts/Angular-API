import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  fetchUsers(): Observable<Object> {
    return this.http.get('https://randomuser.me/api/?nat=fr&&results=20');
  }

}
