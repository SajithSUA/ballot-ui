import { Component, OnInit } from '@angular/core';
import {PollResult} from "../../perameters/pool-result";
import {mockResult} from "../mock-data/mock-result";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-vote-result',
  templateUrl: './vote-result.component.html',
  styleUrls: ['./vote-result.component.css']
})
export class VoteResultComponent implements OnInit {

  voteResult : PollResult = mockResult;
  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }

}
