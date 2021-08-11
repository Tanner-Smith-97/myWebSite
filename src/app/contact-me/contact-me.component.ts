import {Component, NgModule, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})

export class ContactMeComponent implements OnInit {

  name: string = "";
  email: string = "";
  message: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(){
    const message = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    alert(message)
  }

}
