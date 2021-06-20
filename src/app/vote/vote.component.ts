import {Component, OnInit} from '@angular/core';
import {mockPollView} from "../mock-data/mock-vote";
import {PollView} from "../../model/poll-view";
import {ActivatedRoute, Router} from "@angular/router";
import {ServerService} from "../../services/server.service";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  pollView: PollView = mockPollView;

  selected : string;

  constructor(private route: ActivatedRoute,
              private serverService: ServerService) {
    this.selected = this.pollView.choices[0].choice;
  }

  ngOnInit(): void {
    this.getPollDetail();
  }

  voteClick(): void {
    console.log(this.selected);
  }

  onItemChange(id: String): void{
    this.selected = JSON.stringify(id);
  }

  getPollDetail(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id !== null)
    {this.serverService.getPoolDetail(id).subscribe(view => this.pollView = view);}

  }

}
