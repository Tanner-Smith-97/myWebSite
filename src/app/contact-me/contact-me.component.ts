import {Component, NgModule, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {ContactService} from "./contact.service";
import {error} from "@angular/compiler/src/util";
import {HttpClient} from "@angular/common/http";
import {connect, Email} from "node-mailjet";


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})

export class ContactMeComponent implements OnInit {

  // @ts-ignore
  FormData: FormGroup;

  name: string = "";
  email: string = "";
  message: string = "";

  constructor(private builder: FormBuilder,
              private contact: ContactService,
              private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Comment: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    //this.FormData.get([this.name, this.email, this.message]);

    //console.log(this.FormData.value.Email);

    this.contact.PostMessage({
      "Email": this.FormData.value.Email,
      "Name": this.FormData.value.Fullname,
      "Content": this.FormData.value.Comment
    })
      .subscribe();
  }





  // onSubmit(FormData: any) {
  //   console.log(FormData);
  //   this.contact.PostMessage(FormData)
  //     .subscribe(response => {
  //         location.href = 'https://mailthis.to/confirm';
  //         console.log(response);
  //       }, error => {
  //         console.warn(error.reponseText);
  //         console.log([{error}])
  //       }
  //     )
  // }


  // submitForm(){
  //   const message = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
  //   alert(message)
  // }
  //
  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);

  // matcher = new MyErrorStateMatcher();

}
