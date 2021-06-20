import {Choice} from "./choice";

export interface Poll {

  owner: string,
  question: string,
  choices: Choice []
}
