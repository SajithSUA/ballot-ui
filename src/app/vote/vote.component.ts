import {Component, OnInit} from '@angular/core';
import {mockPollView} from "../mock-data/mock-vote";
import {PollView} from "../../perameters/poll-view";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  pollView: PollView = mockPollView;

  selected : string;

  constructor() {
    this.selected = this.pollView.choices[0].choice;
  }

  ngOnInit(): void {
    console.log()
  }

  voteClick(): void {
    console.log(this.selected);
  }

  onItemChange(id: String): void{
    this.selected = JSON.stringify(id);
  }
}
