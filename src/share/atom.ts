import { atom } from "recoil";

type IQuiz = {
  category: string;
  correct_answer: string[] | boolean;
  difficulty: string;
  incorrect_answers: string[] | boolean;
  answers: string[];
  question: string;
  type: string;
};

export const getPageStatus = atom({
  key: "getPageStatus",
  default: "main",
});
export const quizList = atom<IQuiz[]>({
  key: "quizList",
  default: [],
});
