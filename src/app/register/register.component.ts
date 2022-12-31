import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthApiService } from '../services/auth-api.service';
import { Teacher } from '../teacher';
import { Router, RouterLink } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  exform!: FormGroup;
  info!: any;

  public teacher = new Teacher()

  constructor(private fb: FormBuilder, private auth_api: AuthApiService, private router: Router) { }

  ngOnInit(): void {
    /*this.exform = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });*/
  }

  register() {
    // this.router.navigate(["/home"])
    /* this.auth_api.register(this.teacher)
     .subscribe({
       next: (res: any) => {
         console.log(res)
          this.info = res+" Welcome "+this.teacher.name
        //  localStorage.setItem('token', res)
       },
       error: (err: any) => {
         console.log(err)
         }
   
      });*/
    this.auth_api.register(this.teacher)
      .subscribe({
        next: (res: any) => {

          // this.info = "This user already exists!"
          console.log(res)
          localStorage.setItem('token', res.token)
          this.router.navigate(['/marks'])
        },
        error: (err: any) => {
          console.log(err)
        }
      })
  }

}
