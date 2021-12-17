import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  
  
  constructor(public homeService:UserService) { 
    for(var i=0;i<this.homeService.users.length; i++)
      console.log(this.homeService.users[i].email)

  }

  ngOnInit(): void {
  }


}
