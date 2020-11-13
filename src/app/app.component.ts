import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users = [];
  constructor(private usersService: UsersService){}

  ngOnInit() {
    this.getUsers();
    // this.users$
    // .subscribe(user => this.listofusers.push(user));
  }

  getUsers() {
    this.usersService.fetchUsers().subscribe(res => this.users = res.results);
    // .toPromise()
    // .then(res => this.users$ = res);
  }
}
