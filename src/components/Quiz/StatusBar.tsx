import styled from "@emotion/styled";
import React from "react";

type IBar = {
  width: number;
};

const StatusBar = ({ width }: IBar) => {
  return (
    <StatusBarContainer>
      <Bar width={width} />
    </StatusBarContainer>
  );
};

export default StatusBar;

const StatusBarContainer = styled.div`
  margin-bottom: 20px;
  background-color: whitesmoke;
  height: 20px;
  border-radius: 20px;
`;

const Bar = styled.div<{ width: number }>`
  border-radius: 20px;
  height: 20px;
  width: ${(props) => props.width}%;
  transition-duration: 0.5s;
  background-image: linear-gradient(
    to right top,
    #393b4c,
    #3e3f51,
    #434355,
    #48475a,
    #4d4b5f,
    #524e64,
    #565268,
    #5b556d,
    #615972,
    #675d77,
    #6d617c,
    #736581
  );
`;
