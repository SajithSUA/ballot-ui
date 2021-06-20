import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Voter} from "../perameters/voter";

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  baseUrl: string = 'http://localhost:8080'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,) { }

  /** GET Voters from the server */
  getVoter(): Observable<Voter> {
    let url = `${this.baseUrl}/voters/58bc5833-4566-4c2d-8dd3-79ea8f604a2e`;
    return this.http.get<Voter>(url);
  }


}
