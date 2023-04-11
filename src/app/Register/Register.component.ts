import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmedValidator } from '../confirm.validator';
import { UserService } from '../user.service';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css'],
  styles:[`input.ng-invalid{border-bottom :2px solid red;}

  input.ng-valid{border-bottom:2px solid green;}`
  ]
})
export class RegisterComponent implements OnInit {


  username: any = "";
  mobileno:any="";
  email: any = "";
  password: any = "";
  confirmpass: any = "";

  public loginForm1 !: FormGroup;
  constructor(private userService: UserService, private fb: FormBuilder, private http: HttpClient, private router: Router) { }



  ngOnInit() {
    this.loginForm1 = this.fb.group
      ({
        username: ["", [Validators.required,Validators.pattern(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{7,15}$/)]],
        mobileno:["",[Validators.required,Validators.pattern(/^[6-9]\d{9}$/)]],
        email: ["", [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        password: ["", [Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)]],
        confirmpass: ["", [Validators.required]]
      }, { validator: ConfirmedValidator('password', 'confirmpass') })
  }

  submitForm() {
    this.http.post<any>("http://localhost:3000/users", this.loginForm1.value)
      .subscribe(data => {
        alert("Registration Successful!");
        this.loginForm1.reset();
        this.router.navigate(['/login']);
      }, err => {
        alert("Registration Failure")
      })
  }
}
