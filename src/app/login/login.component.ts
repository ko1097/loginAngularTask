import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { UserModule } from '../shared/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
   'user' = UserModule
  @ViewChild('loginForm',{read : NgForm}) form : any; 

  constructor(public loginUser:UserService) { }
  loginSuccess: any;
  
  ngOnInit(): void {
  }

 
  onSubmit(loginForm: NgForm){
    console.log(loginForm.value.Email);
    this.loginSuccess = false; 
    
    
    for(var i=0;i<this.loginUser.users.length;i++){
         console.log(this.form.value.Email)
      if(loginForm.value.Email == this.loginUser.users[i].email && loginForm.value.password == this.loginUser.users[i].password){
        
        this.loginSuccess = true;
      }              
    
      }
      

        if (this.loginSuccess){
        alert("Login Successfully")
        
      }else alert("Account not register")

    loginForm.reset()
  }
 
  

}
