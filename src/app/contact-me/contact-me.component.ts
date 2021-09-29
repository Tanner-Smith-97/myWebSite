import {Component, NgModule, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {ContactService} from "./contact.service";
import {error} from "@angular/compiler/src/util";
import {HttpClient} from "@angular/common/http";
import {connect, Email} from "node-mailjet";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ProgressSpinnerComponent} from "../progress-spinner/progress-spinner.component";


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
              private httpClient: HttpClient,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Comment: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {

    const spinner = this.dialog.open(ProgressSpinnerComponent);

    this.contact.PostMessage({
      "Email": this.FormData.value.Email,
      "Name": this.FormData.value.Fullname,
      "Content": this.FormData.value.Comment
    })
      .subscribe(() => {
        spinner.close();
        this.FormData.reset();
      });
  }
}
