import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'af-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  
  firstName: string;
  lastName: string;
  age: number;
  hobbies: string[];

  constructor() { }

  ngOnInit() {
    this.firstName = 'Pankaj';
    this.lastName = 'Parkar';
    this.age = 27;
    this.hobbies = ['Cricket', 'Football'];
  }

}
