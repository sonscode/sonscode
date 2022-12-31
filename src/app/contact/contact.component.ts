import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { ContactService } from '../contact.service';
import { User } from '../user';
import { data } from 'jquery';
// import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  submitted = false;
  errorMsg = '';
  userModel = new User('', '', 6, '', false);

  //   private builder!: FormBuilder
  constructor(private _contactService: ContactService) { }

  ngOnInit() {
    $('form').on('submit', (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      const name = $('#name').val();
      const email = $('#email').val();
      const phone = $('#phone').val();
      const msg = $('#msg').val();

      const data = {
        name,
        email,
        phone,
        msg
      }

      $.post('/enroll', data, function () {
        console.log('Server received data');
      });

    });
  }

  onSubmit() {
   var DE = this._contactService.enroll(this.userModel)
      .subscribe({
        next: (data: any) => { console.log('success!', data) , this.submitted = true},
        error: (error: any) => { console.log("Nothing to show here"), this.errorMsg = error.statusText, this.submitted = false }
      });
      return this.submitted;
      
  }




}


