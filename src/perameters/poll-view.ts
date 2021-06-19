import {Choice} from "./choice";

export interface PollView {

  id: string,
  owner: string,
  question: string,
  choices: Choice []
}
