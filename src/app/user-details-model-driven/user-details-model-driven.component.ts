import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'af-user-details-model-driven',
  templateUrl: './user-details-model-driven.component.html',
  styleUrls: ['./user-details-model-driven.component.css']
})
export class UserDetailsModelDrivenComponent implements OnInit {


  userForm: FormGroup
  edit: boolean;
  newHobby: string;

  constructor(private fb: FormBuilder) { }

  addHobby () {
    // this.hobbies.push(this.newHobby);
    this.newHobby = null;
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      firstName: new FormControl('Pankaj'),
      lastName: new FormControl('Parkar'),
      hobbies: new FormControl([]),
      age: new FormControl(27)
    })
  }
}
