import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewuser=()=>{
    return this.http.get<any>("http://localhost:3000/home")
  } 
  deleteuser=(id:any)=>{
    return this.http.delete<any>("http://localhost:3000/delete/"+id)
  }
  updateuser=(user:any)=>{
    return this.http.put<any>("http://localhost:3000/update/"+user._id,user)
  }
  adduser=(user:any)=>{
    return this.http.post<any>("http://localhost:3000/register",user)
  } 


  //admin


  addadmin=(admin:any)=>{
    return this.http.post<any>("http://localhost:3000/loginadmin",admin)


  }
}
