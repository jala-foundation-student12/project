import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
    providedIn: 'root'
  })

export class FriendshipService{

    constructor(private http: HttpClient){

    }

    postFriendship(id_s:string, id_r:string){
        console.log('postFriendship', id_s, id_r);
        const data = {
            "receiver":id_r, 
            "sender":id_s
        }
        return this.http.post(`${base_url}/friendship`, data);
    }

    getRequest(id_r:string){
        return this.http.get(`${base_url}/friendship/${id_r}`);
    }

    respondRequest(id: string, accepted:boolean){
        console.log('acceptRequest', id, accepted);
        const data = {
            "respond": true,
            "accepted": accepted
        }
        return this.http.put(`${base_url}/friendship/${id}`, data);
    }

    getFriends(id: string){
        console.log('getFriends', id);
        return this.http.get(`${base_url}/friendship/friends/${id}`);
    }

    deleteFriend(id: string){
        console.log('delete friend service', id);
        const data = {
            "respond": true,
            "accepted": false
        }
        return this.http.put(`${base_url}/friendship/${id}`, data);
    }
}

