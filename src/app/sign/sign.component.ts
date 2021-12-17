import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import{UserService} from '../user.service';
import { UserModule} from '../shared/user.model';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.sass']
})
export class SignComponent implements OnInit {
  
  'user':UserModule
  @ViewChild('registerForm',{read : NgForm}) form : any; 



  constructor(public userService:UserService) { }
  inname : any = []

  ngOnInit(): void {
    // this.form = new FormGroup({
    //   FirstName : new FormControl('',Validators.required),
    //   LastName : new FormControl('',Validators.required),
    //   Email : new FormControl('',Validators.required ),
    //   Password : new FormControl('',Validators.required),
    //   Mobile : new FormControl('',Validators.pattern('[0-9]'))

    // })
    this.valueForm()
    
  }
  valueForm(form?:NgForm)
  {
    this.user = {
      'FirstName':'',
      'LastName':'',
      'Email':'',
      'Password':'',
      'Mobile':''
      
    }

  }
  onSubmit(myForm:NgForm){  
        console.log(myForm.value)
        this.userService.users.push(myForm.value);
       console.log(this.userService.users)
       console.log(this.form.controls)
       if(this.form.controls.email.status == 'INVALID'){
         this.inname.push("email")
         console.log(this.inname)

       }
       if(this.form.controls.firstName.status == 'INVALID'){
        this.inname.push("firstName")
        console.log(this.inname)

      }
      if(this.form.controls.Password.status == 'INVALID'){
        this.inname.push("Password")
        console.log(this.inname)

      }
      if(this.form.controls.MobileNumber.status == 'INVALID'){
        this.inname.push("MobileNumber")
        console.log(this.inname)

      }
      for(var i =0;i<this.inname.length;i++){
        alert('Fill the ' + this.inname[i])
        myForm.reset()

      }
      
     
        
        
      

        
      }
        
    
        

  }


