import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-BookNow',
  templateUrl: './BookNow.component.html',
  styleUrls: ['./BookNow.component.css']
})
export class BookNowComponent implements OnInit {



    firstName: any = "";
    lastName:any="";
    mobileno1: any = "";
    mobileno2: any = "";
    email: any = "";
    date: any = "";
    pAddress:any="";
    eAddress: any = "";
    service: any = "";
    days: any = "";

    public bookForm1 !: FormGroup;
    constructor( private fb: FormBuilder, private http: HttpClient, private router: Router) { }




    ngOnInit() {
      this.bookForm1 = this.fb.group
        ({
          firstName: ["", [Validators.required]],
          lastName: ["", [Validators.required]],
          mobileno1:["",[Validators.required,Validators.pattern(/^[6-9]\d{9}$/)]],
          mobileno2:["",[Validators.required,Validators.pattern(/^[6-9]\d{9}$/)]],
          email: ["", [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
          date: ["", [Validators.required]],
          pAddress: ["", [Validators.required]],
          eAddress: ["", [Validators.required]],
          service: ["", [Validators.required]],
          days: ["", [Validators.required]]
        })
    }

    bookForm() {
      this.http.post<any>("http://localhost:3000/Booking", this.bookForm1.value)
        .subscribe(data => {
          alert("Booked Successfully!");
          this.bookForm1.reset();
          this.router.navigate(['/index']);
        }, err => {
          alert("Booking Failed")
        })
    }
  }
