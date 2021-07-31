import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FriendshipService } from 'src/app/services/friendship.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  public users:any;
  public currentUser: User;

  constructor(
    private friendshipService: FriendshipService,
    private userService: UserService
  ){
    this.currentUser = this.userService.user;
  }

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests(){
    this.friendshipService.getRequest(this.currentUser.uid)
      .subscribe((resp:any)=>{
        console.log('loadRequests', resp);
        this.users = resp.getrequest;
      });
  }

  respond(uid:string, respond:boolean){
    console.log('uid respon',uid,  respond);
    this.friendshipService.respondRequest(uid, respond)
      .subscribe((resp)=>{
        console.log('respond', resp);
      })

  }

}
