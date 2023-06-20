import { getPageStatus } from "@/share/atom";
import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

const MainPage = () => {
  const setStatus = useSetRecoilState(getPageStatus);
  return (
    <div>
      MainPage
      <button onClick={() => setStatus("quiz")}>결과 보기</button>
    </div>
  );
};

export default MainPage;
