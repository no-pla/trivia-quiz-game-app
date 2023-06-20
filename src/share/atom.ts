import { atom } from "recoil";

export const getPageStatus = atom({
  key: "getPageStatus",
  default: "main",
});
