import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SocialNetworks } from '../models/socialnet.model';
import { User } from '../models/user.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})

export class SocialNetService{

    constructor(private http: HttpClient){
     
    }

    createSocialNet(user: string){
      console.log('createSocialNet', user);
      return this.http.post(`${base_url}/socialNet`, {user});
    }

    getSocialnetById(user: string){
      console.log('getSocialnetById', user);
      return this.http.get(`${base_url}/socialNet/${user}`);
    }

    updateSocialNet(user: any, uid:string){
      console.log('updateSocialNet', user);
      return this.http.put(`${base_url}/socialNet/${uid}`, user);
    }

}