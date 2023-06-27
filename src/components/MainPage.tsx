import React from "react";
import styled from "@emotion/styled";
import { useSetRecoilState } from "recoil";
import Button from "./Button";
import { getPageStatus } from "@/share/atom";

const MainPage = () => {
  const setStatus = useSetRecoilState(getPageStatus);
  return (
    <Container>
      <Title>
        Tribia Quiz
        <br />
        Game
      </Title>
      <Button text="퀴즈 풀기" onClick={() => setStatus("category")} />
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  gap: 40px;
`;

const Title = styled.h1`
  border: 1px solid gray;
  background-color: whitesmoke;
  border: none;
  border-radius: 8px;
  color: darkgreen;
  font-weight: 800;
  padding: 20px 0;
  font-size: 1.4rem;
  text-align: center;
`;
