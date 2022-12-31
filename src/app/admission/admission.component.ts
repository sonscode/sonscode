import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MarksApiService } from '../services/marks-api.service';
import { HttpErrorResponse } from '@angular/common/http';

declare var $: any;
var i: number;
var form2:string = "/form1/maths";

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {

  constructor(private markService: MarksApiService, private router: Router) { }
  markData = []
  ngOnInit(): void {
    var form:string[] = ["form1", "form2", "form3", "form4"];

    this.markService.getMarksfromApi()
    .subscribe({
      next: (res: any) =>{
        this.markData = res;
        this.router.navigate(['/marks'])

      },
      error: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if(err.status === 401){
            this.router.navigate(['/login'])
          }
        }
      }
    })
  }

}
