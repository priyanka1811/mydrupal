import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../../models/index';
import { UserService } from '../../services/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  role: string;
  users: User[] = [];

  constructor(
      private userService: UserService,
      private route: ActivatedRoute,
      private router: Router,
  ) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
      //this.loadAllUsers();
  }

  // deleteUser(_id: string) {
  //     this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
  // }

  // private loadAllUsers() {
  //     this.userService.getAll().subscribe(users => { this.users = users; });
  // }

}