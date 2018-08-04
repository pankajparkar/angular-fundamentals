import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'af-user-details-model-driven',
  templateUrl: './user-details-model-driven.component.html',
  styleUrls: ['./user-details-model-driven.component.css']
})
export class UserDetailsModelDrivenComponent implements OnInit {

  userForm: FormGroup
  edit: boolean;
  newHobby: string;
  user: any;

  constructor(private userService: UserService) { }

  addHobby () {
    let hobbyControl = this.userForm.controls.hobbies;
    this.userForm.controls.hobbies.setValue([...hobbyControl.value, this.newHobby]);
    this.newHobby = null;
  }

  submit () {
    this.user = 
    console.log('Form submitted')
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      hobbies: new FormControl([]),
      age: new FormControl()
    })
    let user = this.userService.getUser();
    this.user = user;
    this.userForm.patchValue(user)
  }
}
