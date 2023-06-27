import React from "react";
import styled from "@emotion/styled";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Button from "./Button";
import { getPageStatus, rightAnswers } from "@/share/atom";

const ResultPage = () => {
  const getRightAnswers = useRecoilValue<number>(rightAnswers);
  const setStatus = useSetRecoilState(getPageStatus);

  return (
    <div>
      <ResultText>10문제 중 {getRightAnswers}문제 맞혔습니다.</ResultText>
      <ButtonContainer>
        <Button text="다시 하기" onClick={() => setStatus("category")} />
        <Button text="메인으로" onClick={() => setStatus("main")} />
      </ButtonContainer>
    </div>
  );
};

const ResultText = styled.h1`
  color: whitesmoke;
  text-align: center;
  margin: 20px 0 40px 0;
  font-size: 1.4rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
`;

export default ResultPage;
