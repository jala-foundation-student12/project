import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() isLogged:boolean = false;
  @Input() name:string='a';

  showModalSignUp: boolean = false;
  showModalSignIn: boolean = false;



  constructor(private router: Router){ }

  ngOnInit(): void {
    console.log(this.name);
  }

  // get token(){
  //   return localStorage.getItem('token') || '';
  // }

  public modularSignIn(){
    this.showModalSignIn = true;
  }

  public modularSignUp(){

    this.showModalSignUp = true;
  }

  public logOut(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/home');
  }

}
