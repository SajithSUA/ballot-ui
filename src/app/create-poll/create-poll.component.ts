import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {ServerService} from "../../services/server.service";
import {Poll} from "../../model/poll";
import {PollMapper} from "../../mapers/poll-mapper";

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {

  pollId: string = '';
  pollForm: FormGroup;
  buttonEnable: boolean = false;
  canSubmit: boolean = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private serverService: ServerService,
              private pollMapper: PollMapper) {
    this.pollForm = this.fb.group({
      question: '',
      owner: '',
      choices: this.fb.array([]),
    });
  }

  ngOnInit(): void {
  }

  choices(): FormArray {
    return this.pollForm.get("choices") as FormArray
  }

  newChoice(): FormGroup {
    return this.fb.group({
      choice: '',
    })
  }

  addChoice() {
    this.choices().push(this.newChoice());
  }

  removeChoice(i: number) {
    this.choices().removeAt(i);
  }

  onSubmit() {
    //If have atleast one choices
    for (let choice of this.pollForm.value.choices) {
      this.canSubmit = true;
      if (choice.choice.length < 1) {
        this.canSubmit = false;
        break;
      }
    }
    if (this.canSubmit) {
      this.createPoll(this.pollMapper.mapPoll(this.pollForm));
    }

  }

  nameChange(): void {
    this.buttonEnable = this.pollForm.value.question.length > 0;
  }

  createPoll(poll: Poll): void {
    this.serverService.createPoll(poll).subscribe(id => {
      this.pollId = id.result
    });

    //This code have problem:- poolId not update correctly (pollId is always on point behind the last update)
    if (this.pollId.length > 0) {
      this.router.navigate(['/vote/', this.pollId]);
    }
  }
}
