import { atom } from "recoil";

type IQuiz = {
  category: string;
  correct_answer: string[] | boolean;
  difficulty: string;
  incorrect_answers: string[] | boolean;
  question: string;
  type: string;
  answers: string[];
  selectedAnswer?: boolean;
};

export const getPageStatus = atom({
  key: "getPageStatus",
  default: "main",
});

export const quizList = atom<IQuiz[]>({
  key: "quizList",
  default: [],
});

export const wrongAnswers = atom<any>({
  key: "wrongAnswers",
  default: [],
});
