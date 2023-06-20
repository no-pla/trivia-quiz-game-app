import { getPageStatus } from "@/share/atom";
import React from "react";
import { useSetRecoilState } from "recoil";

const QuizPage = () => {
  const setStatus = useSetRecoilState(getPageStatus);

  return (
    <div>
      Quiz
      <button onClick={() => setStatus("result")}>결과 보기</button>
    </div>
  );
};

export default QuizPage;
