import React, { useRef } from "react";
import axios from "axios";
import Button from "./Button";
import styled from "@emotion/styled";
import { useRecoilValue, useSetRecoilState } from "recoil";
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
  const categorySelect = useRef<HTMLSelectElement>(null);
  const difficultySelect = useRef<HTMLSelectElement>(null);
  const typeSelect = useRef<HTMLSelectElement>(null);

  const onClick = async () => {
    const category = categorySelect.current?.value;
    const difficulty = difficultySelect.current?.value;
    const type = typeSelect.current?.value;

    await axios
      .get(
        `https://opentdb.com/api.php?amount=10${
          category && `&category=${category}`
        }${difficulty && `&difficulty=${difficulty}`}${type && `&type=${type}`}`
      )
      .then(({ data: { results } }) => {
        let temp: any[] = [];
        results?.map((result: IQuiz) => {
          temp.push({
            ...result,
            question: he.decode(result?.question),
            correct_answer: he.decode(result?.correct_answer),
            incorrect_answers: result.incorrect_answers.map((incorrect) =>
              he.decode(incorrect)
            ),
          });
        });
        setQuizList(temp);
      });
    setStatus("quiz");
  };

  return (
    <Container>
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
        <Label>타입</Label>
        <Select ref={typeSelect}>
          <option value="">모든 타입</option>
          <option value="boolean">True or False</option>
          <option value="multiple">multiple</option>
        </Select>
        <Button text="카테고리 선택" onClick={onClick} />
      </CotegoryContainer>
    </Container>
  );
};

export default CategoryPage;

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
