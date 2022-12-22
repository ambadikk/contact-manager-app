import { Component, OnInit } from '@angular/core';
import { MyContact } from 'src/models/myContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contactmanager',
  templateUrl: './contactmanager.component.html',
  styleUrls: ['./contactmanager.component.css']
})
export class ContactmanagerComponent implements OnInit{
  allContacts:MyContact[]=[]
  searchkey:string=''
  constructor(private api:ApiService){}

  ngOnInit():void{
  this.getAllContact()
  }
  //get all contatc
  getAllContact(){
    this.api.getallcontacts().subscribe(
      (data:any)=>{
        console.log(data);
        this.allContacts=data
        
      }
    )
  }
  //search 
  search(event:any){
    console.log(event.target.value);
    this.searchkey=event.target.value
    
  }

  deleteContact(contactId:any){
    this.api.deleteContact(contactId)
    .subscribe(
      (data:any)=>{
        this.getAllContact()
      }
    )
  }

}
