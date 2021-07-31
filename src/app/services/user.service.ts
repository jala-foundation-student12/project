import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap, map, catchError } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Observable, of } from 'rxjs';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user:any;

  constructor(private http: HttpClient){
    // this.
    //this.user = new User();
  }

  get token(){
    return localStorage.getItem('token') || '';
  }

  get headers(){
    return {
      headers:{
      'x-token': this.token
      }
    }
  }

  saveLocalStorage(token: string){
    localStorage.setItem('token', token);
  }

  validateToken(): Observable<boolean>{
    return this.http.get(`${base_url}/login`, {
      headers:{
        'x-token': this.token
      }
    }).pipe(
      map( (resp: any) => {
            this.saveLocalStorage(resp.token);

            const {name, lastname, email, birthdate, telnumber, university, school, job, address, uid} = resp.user;

            this.user = new User(uid, name, lastname, email, '' ,birthdate, telnumber, university, school, job, address);
            console.log(this.user);
            return true;
            // this.usuario.imprimirNombre();
        }),   
        catchError(error => {
          // console.log(error);
          return of(false)
        }) 
    );

  }

  createUser(formData: User){
    console.log(formData);
    return this.http.post(`${base_url}/users`, formData)
        .pipe(
          tap( (resp: any) => {
            this.saveLocalStorage(resp.token);
          })
        )
  }

  loginUser(formData: any){
    console.log(formData);
    return this.http.post(`${base_url}/login`, formData).
        pipe(
          tap( (resp: any) => {
            this.saveLocalStorage(resp.token);
          })
        )
  }

  updateUser(user:User, uid:string){
    console.log(user);
    return this.http.put(`${base_url}/users/${uid}`, user, this.headers);
  }

  getUsers(){
    return this.http.get(`${base_url}/users`);
  }
}
