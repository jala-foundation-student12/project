import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { SocialNetService } from 'src/app/services/socialnet.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  public socialnetFormSubmitted = false;
  public userinfoFormSubmitted = false;

  public userinfoForm;
  public socialnetForm:any;

  public currentUser:User;
  public currentUserSocialnet: any;

  @Input() nameInput:string = '';
  public nameUser:string;
  public lastnameUser:string;
  
  constructor(
    private fb: FormBuilder, private router: Router,
    private userService: UserService
  ){ 
    this.currentUser = this.userService.user;

    console.log(this.currentUser);
    /* ----- User information ----- */
    this.userinfoForm = this.fb.group({
      name: [this.currentUser.name, [Validators.required, Validators.minLength(2)]],
      lastname: [this.currentUser.lastname, [Validators.required, Validators.minLength(2)]],
      email: [this.currentUser.email, [Validators.required, Validators.email]],
      birthdate: [this.currentUser.birthdate],
      telnumber: [this.currentUser.telnumber],
      university: [this.currentUser.university],
      school: [this.currentUser.school],
      job: [this.currentUser.job],
      address: [this.currentUser.address]
    });

    this.nameUser = this.currentUser.name;
    this.lastnameUser = this.currentUser.lastname; 

  }//constructor()

  
 
  ngOnInit(): void {
  }

  sendUserinfo(){
    console.log(this.userinfoForm);
    this.userinfoFormSubmitted = true;
    if(this.userinfoForm.invalid){
      console.log("invalid data");
      return;
    }
    this.userService.updateUser(this.userinfoForm.value, this.currentUser.uid).
      subscribe(resp=>{
        console.log(resp);
        Swal.fire({
          icon: 'success',
          title: 'Saved data',
          text: 'Your data has been updated'
        });
      }, (err)=>{
        console.log(err);
      })
  }

}
