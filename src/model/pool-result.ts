import {ChoiceResult} from "./choice-result";

export interface PollResult {
  id: string,
  pollId: string,
  owner: string,
  question: string,
  choiceResults: ChoiceResult []
}
