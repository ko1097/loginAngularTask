import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  
  
  constructor(private homeService:UserService) { 

  }
  home:any = this.homeService.users
  


  ngOnInit(): void {
  }
  

}
