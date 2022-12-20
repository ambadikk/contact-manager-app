import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/models/myContact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl:string = "http://localhost:3000/contacts"

  constructor(private http:HttpClient) { }

  //function to get contacts
  getallcontacts():Observable<MyContact>{
   return this.http.get(this.baseUrl)
  }

  //function for viewing contact 
  veiwContact(contactId:string){
   return this.http.get(`${this.baseUrl}/${contactId}`)
  }

   //function for getting a particular group name
   getGroupName(GroupId:string){
     return this.http.get('http://localhost:3000/groups/'+GroupId)
   }
   //function for fetch for all group from url http://localhost:3000/groups
   getAllGroups(){
    return this.http.get('http://localhost:3000/groups')
   }

   //function for adding new contact to server
   addcontact(contactBody:any){
    return this.http.post(this.baseUrl,contactBody)

   }
   //function for deleting

   deleteContact(contactId:any){
    this.http.delete(`${this.baseUrl}/${contactId}`)
   }
}
