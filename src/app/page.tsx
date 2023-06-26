"use client";

import CategoryPage from "@/components/CategoryPage";
import MainPage from "@/components/MainPage";
import QuizPage from "@/components/Quiz/QuizPage";
import ResultPage from "@/components/ResultPage";
import { getPageStatus } from "@/share/atom";
import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";

export default function Home() {
  const status = useRecoilValue(getPageStatus);
  return (
    <Container>
      {status === "main" && <MainPage />}
      {status === "category" && <CategoryPage />}
      {status === "quiz" && <QuizPage />}
      {status === "result" && <ResultPage />}
    </Container>
  );
}

const Container = styled.div`
  background-color: whitesmoke;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    background-color: darkgreen;
    width: 80%;
    height: object-fit;
    border-radius: 8px;
    padding: 32px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
`;
