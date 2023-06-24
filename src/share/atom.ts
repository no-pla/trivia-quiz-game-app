import { atom } from "recoil";

export const getPageStatus = atom({
  key: "getPageStatus",
  default: "main",
});
export const quizList = atom({
  key: "quizList",
  default: [],
});
