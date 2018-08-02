import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'af-user-details-model-driven',
  templateUrl: './user-details-model-driven.component.html',
  styleUrls: ['./user-details-model-driven.component.css']
})
export class UserDetailsModelDrivenComponent implements OnInit {

  firstName: string;
  lastName: string;
  newHobby: string;
  age: number;
  hobbies: string[];
  edit: boolean;

  constructor() { }

  addHobby () {
    this.hobbies.push(this.newHobby);
    this.newHobby = null;
  }

  ngOnInit() {
    this.firstName = 'Pankaj';
    this.lastName = 'Parkar';
    this.age = 27;
    this.hobbies = ['Cricket', 'Football'];
  }
}
