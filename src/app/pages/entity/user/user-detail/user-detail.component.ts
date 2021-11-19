import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute,private userService:UserService) { 
        this.user = new User(0,"","",0,"");
  }

  onDelete(): void {
    window.alert('User deleted');
  }

  ngOnInit(): void {
    this.user.id = Number(this.route.snapshot.paramMap.get('userId'));
    console.log("user:", this.user.id)
    this.user = this.userService.getUserById(this.user.id);
    console.log("user:", this.user)
    // this.route.paramMap.subscribe(params => {
    //   this.user = this.userService.getUserById(Number(params.get("id")));
    // });
  }

}
