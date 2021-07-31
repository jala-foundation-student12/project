import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FriendshipService } from 'src/app/services/friendship.service';
import { SearchService } from 'src/app/services/search.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {


  public users:any;
  public currentUser: User;

  constructor(
    private userService: UserService,
    private searchService: SearchService,
    private friendshipService: FriendshipService
  ){
    this.currentUser = this.userService.user;
    this.users = [];

  }

  ngOnInit(): void {
    this.loadUsers()
  }

  loadUsers(){
    this.userService.getUsers().subscribe((resp:any)=>{
      console.log(resp);
      this.users = resp.users;
      console.log('loadUsers', this.users);
    });
  }

  searchUsers(word:string){
    console.log(word);
    this.searchService.getSearch(word).subscribe((resp:any)=>{
      console.log('searchUsers',resp);
      this.users = resp.users;
      console.log('searchUsers', this.users);
    })
  }

  sendFrienship(id_r:string){
    console.log('sendRequest', id_r);
    this.friendshipService.postFriendship(this.currentUser.uid, id_r)
      .subscribe((resp:any)=>{
        console.log('searchUsers',resp);
      });
  }

}
