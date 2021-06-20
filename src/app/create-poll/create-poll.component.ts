import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {ServerService} from "../server.service";
import {Voter} from "../../perameters/voter";

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {

  pollForm: FormGroup;
  buttonEnable: boolean = false;
  canSubmit: boolean = false;
  voter: Voter = {
    id: '',
    alias: '',
    email: ''
  };

  constructor(private fb: FormBuilder, private router: Router, private serverService: ServerService) {
    this.pollForm = this.fb.group({
      question: '',
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
    for (var choice of this.pollForm.value.choices) {
      this.canSubmit = true;
      if (choice.choice.length < 1) {
        this.canSubmit = false;
        break;
      }
    }
    /*if (this.canSubmit) {
      console.log(this.pollForm.value.question.length > 0);
      this.router.navigate(['/vote']);
    }*/
    this.getVoter();

  }

  nameChange(): void {
    this.buttonEnable = this.pollForm.value.question.length > 0;
  }

  getVoter(): void {
    console.log(this.voter);

    this.serverService.getVoter().subscribe(voter => this.voter = voter);

    console.log(this.voter);
  }
}
