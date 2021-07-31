import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocialNetService } from 'src/app/services/socialnet.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-modal',
  templateUrl: './sign-modal.component.html',
  styleUrls: ['./sign-modal.component.css']
})

export class SignModalComponent implements OnInit, OnDestroy {

  public formSubmitted = false;
  public formLoginSubmitted = false;

  @Input() showModalSignUp: boolean = false;
  @Input() showModalSignIn: boolean = false;
  @Output() valueOut: EventEmitter<boolean> = new EventEmitter();


  // sign in 
  public registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    lastname: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    password2: ['', Validators.required],
  },{
    // validators: this.passwordsEquals('password', 'password2')
  });

  // log in
  public loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder, private router: Router,
    private userService: UserService,
    private socialnetService: SocialNetService
  ){

  }

  ngOnInit():void{
  }

  passwordNotValid(){
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;
    if(pass1 !== pass2 && this.formSubmitted){
      return true;
    }
    else{
      return false;
    }
  }

  passwordsEquals(pass1Name: string, pass2Name: string){

    return (formGroup: FormGroup) =>{
      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);

      if(pass1Control?.value === pass2Control?.value){
          pass2Control?.setErrors(null);
      }
      else{
        pass2Control?.setErrors({noEsIgual: true});
      }

    }
  }

  sendUser(){
    console.log(this.registerForm);
    this.formSubmitted = true;
    if(this.registerForm.invalid){
      console.log("invalid data");
      Swal.fire({
        icon: 'error',
        title: 'error on Register',
        text: 'invalid data'
      });
      return;
    }
    this.userService.createUser(this.registerForm.value).
      subscribe( resp =>{
        console.log(resp);

        this.socialnetService.createSocialNet(resp.user.uid).subscribe( resp=>{console.log(resp)} );

        this.cancelModal();
        this.router.navigateByUrl('/profile');

      },(err)=>{
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'error on Register',
          text: err.error.msg
        })
      });

  }

  loginUser(){
    console.log(this.loginForm);
    this.formLoginSubmitted = true;
    if(this.loginForm.invalid){
      console.log("invalid data");
    }
    this.userService.loginUser(this.loginForm.value).
      subscribe( resp => {
        console.log(resp);

        this.cancelModal()
        this.router.navigateByUrl('/profile');

      },(err)=>{
        console.log(err.error.msg);
        Swal.fire({
          icon: 'error',
          title: 'Login Error',
          text: err.error.msg
        })
      })
  }

  ngOnDestroy():void{
    console.log('Muere');
  }

  public modularSignIn(){
    this.showModalSignIn = true; //register
  }

  public modularSignUp(){
    this.showModalSignUp = true;
  }

  public cancelModal(){
    this.valueOut.emit(false);
  }


}
