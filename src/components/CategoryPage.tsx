import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import styled from "@emotion/styled";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { getPageStatus, quizList } from "@/share/atom";
import he from "he";

const categories = [
  { value: "", name: "Any Category" },
  { value: "9", name: "General Knowledge" },
  { value: "10", name: "Entertainment: Books" },
  { value: "11", name: "Entertainment: Film" },
  { value: "12", name: "Entertainment: Music" },
  { value: "13", name: "Entertainment: Musicals & Theatres" },
  { value: "14", name: "Entertainment: Television" },
  { value: "15", name: "Entertainment: Video Games" },
  { value: "16", name: "Entertainment: Board Games" },
  { value: "17", name: "Science & Nature" },
  { value: "18", name: "Science: Computers" },
  { value: "19", name: "Science: Mathematics" },
  { value: "20", name: "Mythology" },
  { value: "21", name: "Sports" },
  { value: "22", name: "Geography" },
  { value: "23", name: "History" },
  { value: "24", name: "Politics" },
  { value: "25", name: "Art" },
  { value: "26", name: "Celebrities" },
  { value: "27", name: "Animals" },
  { value: "28", name: "Vehicles" },
  { value: "29", name: "Entertainment: Comics" },
  { value: "30", name: "Science: Gadgets" },
  { value: "31", name: "Entertainment: Japanese Anime & Manga" },
  { value: "32", name: "Entertainment: Cartoon & Animations" },
];

type IQuiz = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

const CategoryPage = () => {
  const setStatus = useSetRecoilState(getPageStatus);
  const setQuizList = useSetRecoilState(quizList);
  const resetQuizList = useResetRecoilState(quizList);
  const categorySelect = useRef<HTMLSelectElement>(null);
  const difficultySelect = useRef<HTMLSelectElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    resetQuizList();
  }, []);

  const onClick = async () => {
    setLoading(true);
    const category = categorySelect.current?.value;
    const res = await fetch(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }`
    );
    await res.json().then(({ results }) => {
      let temp: any[] = [];
      results?.map((result: IQuiz) => {
        temp.push({
          ...result,
          question: he.decode(result?.question),
          correct_answer: he.decode(result?.correct_answer),
          incorrect_answers: result.incorrect_answers.map((incorrect) =>
            he.decode(incorrect)
          ),
          answers:
            result.type === "multiple"
              ? [
                  he.decode(result?.correct_answer),
                  ...result.incorrect_answers.map((incorrect) =>
                    he.decode(incorrect)
                  ),
                ].sort(() => Math.random() - 0.5)
              : ["True", "False"],
        });
      });
      setQuizList(temp);
      setLoading(false);
    });
    setStatus("quiz");
  };

  return (
    <>
      <Container>
        {loading && (
          <Loading>
            <LoadingItem>
              <LoadingDot />
              <LoadingDot />
              <LoadingDot />
            </LoadingItem>
          </Loading>
        )}
        <CotegoryContainer>
          <Label>카테고리</Label>
          <Select ref={categorySelect}>
            {categories.map((category) => {
              return (
                <option key={category.value} value={category.value}>
                  {category?.name}
                </option>
              );
            })}
          </Select>
          <Label>난이도</Label>
          <Select ref={difficultySelect}>
            <option value="">모든 난이도</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Select>
          <Button text="카테고리 선택" onClick={onClick} />
        </CotegoryContainer>
      </Container>
    </>
  );
};

export default CategoryPage;

const Loading = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingItem = styled.div`
  display: flex;
  gap: 8px;
  > div:nth-of-type(1) {
    animation-delay: 0s;
  }
  > div:nth-of-type(2) {
    animation-delay: 0.3s;
  }
  > div:nth-of-type(3) {
    animation-delay: 0.6s;
  }
`;

const LoadingDot = styled.div`
  height: 20px;
  width: 20px;
  background-color: darkgreen;
  border-radius: 50%;
  animation: upsidedown 1s infinite ease-in-out;
  @keyframes upsidedown {
    0% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(50%);
    }
    100% {
      transform: translateY(0%);
    }
  }
`;

const CotegoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Label = styled.label`
  color: whitesmoke;
  font-size: 1.1rem;
`;

const Select = styled.select`
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 12px 8px;
  border-radius: 8px;
  border: none;
`;

const Container = styled.div`
  gap: 40px;
`;
