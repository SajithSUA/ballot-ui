import {Poll} from "../model/poll";
import {Choice} from "../model/choice";
import {FormGroup} from "@angular/forms";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class PollMapper {

  mapPoll(form: FormGroup): Poll {

    return {
      owner: form.value.owner,
      question: form.value.question,
      choices: this.mapChoices(form)
    };
  }

  mapChoices(form: FormGroup): Choice[] {

    var coicesList: Choice[] = [];
    for (var choice of form.value.choices) {
      coicesList.push(choice);
    }

    return coicesList;
  }
}
