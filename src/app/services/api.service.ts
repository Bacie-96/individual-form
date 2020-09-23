import { Injectable } from '@angular/core';
import { Details } from './details';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  Users: any[];
 
  person : any;
  constructor(public data : Details) { }
   //function to return week days
   getDays(){
    return this.data.days;
  }
  //get person array
   getUsers(){
     return this.data.persons;
   }

   // get single user data
   getUserinfo(ref){
     this.Users=this.data.persons;
     this.Users.forEach(i =>{
       this.person= i['users'];
       
     })
     return this.person.find( e => e.UserID===ref);
 
   }
//get  subject for single user
 
   getSubjects(ref){
    this.Users=this.data.persons;
    this.Users.forEach(i =>{
      this.person= i['subjects'];
     
   })

   return this.person.find( e => e.UserID===ref);
  }
}
