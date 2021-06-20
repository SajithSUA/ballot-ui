import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Voter} from "../model/voter";
import {Poll} from "../model/poll";
import {ResultModel} from "../model/result";
import {PollView} from "../model/poll-view";

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
  getVoter(id: string): Observable<Voter> {
    let url = `${this.baseUrl}/voters/${id}`;
    return this.http.get<Voter>(url);
  }

  /** create Voters from the server */
  createPoll(poll: Poll): Observable<ResultModel> {
    let url = `${this.baseUrl}/polls}`;
    return this.http.post<ResultModel>('http://localhost:8080/polls', poll, this.httpOptions)
  }

  /** GET Voters from the server */
  getPoolDetail(id: string): Observable<PollView> {
    let url = `${this.baseUrl}/polls/${id}`;
    return this.http.get<PollView>(url);
  }

}
