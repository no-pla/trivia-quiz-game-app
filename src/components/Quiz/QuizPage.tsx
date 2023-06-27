import { getPageStatus, quizList, rightAnswers } from "@/share/atom";
import React, { useCallback, useEffect, useState } from "react";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import Button from "../Button";
import styled from "@emotion/styled";
import StatusBar from "./StatusBar";

const QuizPage = () => {
  const setStatus = useSetRecoilState(getPageStatus);
  const setRightAnswer = useSetRecoilState(rightAnswers);
  const resetWrongAnswer = useResetRecoilState(rightAnswers);
  const quizsList = useRecoilValue(quizList);
  const [index, setIndex] = useState<number>(0);

  const onClick = useCallback(
    (event: any) => {
      const currentQuiz = quizsList[index];
      if (event.target.value === currentQuiz.correct_answer) {
        setRightAnswer((prev: number) => prev + 1);
      }
      setIndex((prev) => prev + 1);
    },
    [index, quizsList, setRightAnswer]
  );

  useEffect(() => {
    if (index === 10) {
      setStatus("result");
    }
  }, [index]);

  useEffect(() => {
    resetWrongAnswer();
  }, []);

  return (
    <Container>
      <QuestionContainer>
        <StatusBar width={(100 / 10) * (index + 1)} />
        <QuizInfo>
          <span>{quizsList[index]?.category}</span>
          <span>{quizsList[index]?.difficulty}</span>
        </QuizInfo>
        <Question>{quizsList[index]?.question}</Question>
      </QuestionContainer>
      <ButtonContainer onClick={(event) => onClick(event)}>
        {quizsList[index]?.answers?.map((answer, index) => {
          return <Button key={index} text={answer} />;
        })}
      </ButtonContainer>
    </Container>
  );
};

export default QuizPage;

const Container = styled.div`
  padding-top: 0;

  justify-content: space-between;
  @media (max-width: 375px) {
    height: calc(min(90vh, 100%));
  }
`;

const QuizInfo = styled.div`
  display: flex;
  justify-content: space-between;
  > span {
    color: whitesmoke;
  }
`;

export const Question = styled.div`
  background-color: whitesmoke;
  margin: 20px 0 60px;
  border-radius: 8px;
  padding: 20px;
`;
const QuestionContainer = styled.div``;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  gap: 12px;
  margin: 6px 0;
  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
  }
`;
