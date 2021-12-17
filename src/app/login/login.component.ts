import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { UserModule } from '../shared/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
   'user' = UserModule
  @ViewChild('loginForm',{read : NgForm}) form : any; 

  constructor(public loginUser:UserService , private r:Router) { }
  loginSuccess: any;
  
  ngOnInit(): void {
  }

 
  onSubmit(loginForm: NgForm){
    console.log(loginForm.value.Email);
    this.loginSuccess = false; 
    
    
   for(var i=0;i<this.loginUser.users.length;i++){
     if(this.form.value.Email == this.loginUser.users[i].email ){        
       this.loginSuccess = true;} 
       if(loginForm.value.password == this.loginUser.users[i].password) {
         this.loginSuccess = true;
         this.loginUser.table = this.loginUser.users[i];
         console.log(this.loginUser.table)
       }              
   }
      

   if (this.loginSuccess){
     alert("Login Successfully")
     this.r.navigateByUrl("home")
        
   }else alert("Account not register")
     loginForm.reset()
}
 
  

}
