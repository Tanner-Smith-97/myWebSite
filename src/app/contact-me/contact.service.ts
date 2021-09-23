import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  private api = 'https://tsemailapi.azurewebsites.net/email';

  constructor(private http: HttpClient) { }

  public PostMessage(input: any): Observable<string> {
    return this.http.post(this.api, input, { responseType: 'text' }).pipe(
      map((value: string) => {
        return value;
      })
    );
  }
}
