import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FriendshipService } from 'src/app/services/friendship.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {


  public currentUser:User;
  public friends:any;

  constructor(
    private friendshipService: FriendshipService,
    private userService: UserService
  ){
    this.currentUser = this.userService.user;
  }

  ngOnInit():void{
    this.loadFriends();
    console.log('current',this.currentUser);
  }

  loadFriends(){
    this.friendshipService.getFriends(this.currentUser.uid)
      .subscribe((resp:any)=>{
        //console.log(resp);
        this.friends = resp.getfriends;
        console.log(this.friends);
      });
  }

  deleteFriend(id:string){
    this.friendshipService.deleteFriend(id)
      .subscribe((resp:any)=>{
        console.log('deleteFriend',resp, id);
      })
  }

}
