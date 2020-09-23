import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  Days : any;
  Users : any[];
  Profiles : any;
  //testing
  DataDetails: any[];

 // update arrays
 UsersUpdate: any[];
 update: any[];
 delete: any [];
 UsersDelete : any [];
  constructor(public Data:ApiService) { }

  updates(form : NgForm){
    console.log(form.value.name);
    //this.Data.getDays().push(
      //form.value.name
    //)
    this.UsersUpdate = this.Data.getUsers();
    this.UsersUpdate.forEach(e =>{
      this.update=e['users'];

    
//push new user
this.update.push({
  "UserID" : "214"+ form.value.name,
  "Name" :form.value.name,
  "Bio" :form.value.bio,
 

})
    })
  }
//delete items
deletes(name){
  console.log(name)
  for(var i=0; i<this.Users.length; i++)
  {
    if(this.Users[i]["name"]==name)
    this.Users.splice(i,1);
  }
}
  
  

  ngOnInit() {
    this.Days= this.Data.getDays();
    this.Users= this.Data.getUsers();
    this.Users.forEach(element => {
    this.Profiles= element['users'];
  
    })
  }

}
