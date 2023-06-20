"use client";

import MainPage from "@/components/MainPage";
import QuizPage from "@/components/Quiz/QuizPage";
import ResultPage from "@/components/ResultPage";
import { getPageStatus } from "@/share/atom";
import { useRecoilValue } from "recoil";

export default function Home() {
  const status = useRecoilValue(getPageStatus);
  return (
    <>
      {status === "main" && <MainPage />}
      {status === "quiz" && <QuizPage />}
      {status === "result" && <ResultPage />}
    </>
  );
}
