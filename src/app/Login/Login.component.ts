import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
  email: any = "";
  password: any = "";
  retUrl: any = "login";


  public loginForm2!: FormGroup;
  constructor(private service: LoginService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private http: HttpClient) { }


  ngOnInit() {

    this.loginForm2 = this.fb.group
    ({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]]
    })

    this.route.queryParamMap.subscribe(parama => {
      this.retUrl = parama.get('retUrl');
      console.log("LoginComponent/ngOnInit", this.retUrl);
    })
  }
  onLogin() {
    this.service.login(this.email, this.password).subscribe((data) => {
      console.log("return to" + this.retUrl);
      if (this.retUrl != null) {
        this.router.navigate([this.retUrl]);
      }
    })
  }
  
  login3() {
    this.http.get<any>("http://localhost:3000/users")
      .subscribe(data => {
        const user = data.find((a: any) => {
          return a.email === this.loginForm2.value.email && a.password === this.loginForm2.value.password
        });
        if (user) {
          alert("Login successful!!");
          this.loginForm2.reset();
          this.router.navigate(['/index']);
        } else {
          alert("User not found")
        }
      }, err => {
        alert("Login failed!!");
      });
  }
}
