import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  public name:string;

  constructor(
    private userService: UserService
  ){
    this.name = this.userService.user.name + ' ' + this.userService.user.lastname; 
    console.log(this.name);
  }

  ngOnInit(): void {
  }

}
