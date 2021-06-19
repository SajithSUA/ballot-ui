import {PollResult} from "../../perameters/pool-result";

export const mockResult: PollResult = {
  id: "testId",
  pollId: "pollId",
  owner: 'sajith',
  question: 'What is the best programming language?',
  choiceResults: [
    {choice: 'java', votes: 2},
    {choice: 'phython', votes: 2},
    {choice: 'c#', votes: 2},
    {choice: 'java1', votes: 2},
    {choice: 'phython2', votes: 2},
    {choice: 'c#3', votes: 2},
  ]
};
