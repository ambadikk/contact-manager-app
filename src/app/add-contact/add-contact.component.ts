import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyContact } from 'src/models/myContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit{
  
allGroups:any[]=[]
contactname:string=''
contact:MyContact = {} as MyContact

  constructor(private api:ApiService,private router:Router){ }

  ngOnInit(): void {
    this.api.getAllGroups()
    .subscribe((data:any)=>{
      console.log(data);
      this.allGroups = data
      
    })
    
  }
  addcontact(){
    this.api.addcontact(this.contact)
    .subscribe(
      (data:any)=>{
        //navigate to admin page
        this.router.navigateByUrl('')

      }
    )

  }

}
