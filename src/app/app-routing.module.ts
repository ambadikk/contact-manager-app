import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactmanagerComponent } from './contactmanager/contactmanager.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/contacts/admin',pathMatch:'full'
  },
  //path for contact managercomponent
  {
    path:'contacts/admin',component:ContactmanagerComponent
  },
  //path for addcontact component
  {
    path:'contacts/add',component:AddContactComponent
  },
  //path for update component
  {
    path:'contacts/edit/:contactId',component:UpdateContactComponent
  },
 // path for view contactcomponent
 {
  path:'contacts/view/:contactId',component:ViewContactComponent
 },
 //path 4 pagenotFound
 {
  path:'**',component:PageNotFoundComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
