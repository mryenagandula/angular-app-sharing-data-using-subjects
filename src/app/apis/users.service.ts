import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public uri ='https://letstalk-be.herokuapp.com'

  private headers:HttpHeaders= new HttpHeaders({
    'Content-Type':'application/json',
    'Accept':"application/json",
    'Access-Control-Allow-Methods':'GET,POST,PUT,DELETE',
    'Authorization':''
  });

  public subject = new BehaviorSubject(null);
  
  constructor(private http:HttpClient) { }

  public loadUsers(){
    return this.http.get(`${this.uri}/public/users`,{headers :this.headers})
  }

  public loadUsersById(id){
    return this.http.get(`${this.uri}/public/users/${id}`,{headers :this.headers})
  }
}
