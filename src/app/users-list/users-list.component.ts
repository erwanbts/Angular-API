import { Component, OnInit, Input } from '@angular/core';

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor() { }

  @Input() users: array;

  ngOnInit(): void {

  }

}
