import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  showModalSignIn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public modularSignIn(){
    this.showModalSignIn = true;
  }
}
