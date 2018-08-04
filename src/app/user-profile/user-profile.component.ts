import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'af-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  
  newHobby: string;
  edit: boolean;
  user: any;

  constructor(private userService: UserService) { }

  addHobby () {
    this.user.hobbies.push(this.newHobby);
    this.newHobby = null;
  }

  submit () {
    console.log('Form submitted')
  }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

}
