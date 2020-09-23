import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  User : any;
  Subjects :any;
  subjmarks: any;
  Ref : any;
  UsersUpdate: any[];
  update: any[];
  
// update arrays

constructor(public Data : ApiService, public _route :ActivatedRoute) { }

 
 
  
  ngOnInit() {
    //get user id
    this.Ref= this._route.snapshot.paramMap.get('ref');
    console.log('Ref:', this.Ref);
    this.User= this.Data.getUserinfo(this.Ref);
    console.log(this.User);
    //get subjects
    this.Subjects = this.Data.getSubjects(this.Ref);
    console.log(this.Subjects);

    
  }
  }


