import { getPageStatus } from "@/share/atom";
import React from "react";
import { useSetRecoilState } from "recoil";

const ResultPage = () => {
  const setStatus = useSetRecoilState(getPageStatus);

  return (
    <div>
      ResultPage
      <button onClick={() => setStatus("main")}>다시 해 보기</button>
    </div>
  );
};

export default ResultPage;
