import { Input } from "@/components/Input";
import { TextArea } from "@/components/TextArea";
import { Checkbox } from "@/components/Checkbox";
import { Label } from "@/components/label";
import { Fragment, useState } from "react";
import { Button } from "@/components/Button";
import { Icons } from "@/components/Icons";

interface Answer {
  isAnswer: boolean;
  answer: string;
}

interface Question {
  multiAnswer: boolean;
  title: string;
  description: string;
  answers: Answer[];
}

const Create = () => {
  const [questions, setQuestions] = useState<Question[]>([
    {
      multiAnswer: false,
      title: "",
      description: "",
      answers: [
        {
          isAnswer: false,
          answer: "",
        },
      ],
    },
  ]);

  const onChange = ({
    question,
    index,
    propertyName,
    value,
  }: {
    question: Question;
    index: number;
    propertyName: string;
    value: string | boolean;
  }) => {
    setQuestions([
      { ...question, [propertyName]: value },
      ...questions.filter((_, questionIndex) => questionIndex !== index),
    ]);
  };

  const onChangeAnswer = ({
    answerIndex,
    questionIndex,
    value,
    question,
    answer,
    property,
  }: {
    answerIndex: number;
    questionIndex: number;
    value: string | boolean;
    property: string;
    question: Question;
    answer: Answer;
  }) => {
    const newAnswer: Answer = {
      ...answer,
      [property]: value,
    };

    setQuestions([
      {
        ...question,
        answers: [
          newAnswer,
          ...question.answers.filter((_, ind) => ind !== answerIndex),
        ],
      },
      ...questions.filter((_, ind) => ind !== questionIndex),
    ]);
  };

  const onClickAddAnswer = ({
    question,
    questionIndex,
  }: {
    question: Question;
    questionIndex: number;
  }) => {
    setQuestions([
      {
        ...question,
        answers: [
          ...question.answers,
          {
            isAnswer: false,
            answer: "",
          },
        ],
      },
      ...questions.filter((_, ind) => ind !== questionIndex),
    ]);
  };

  return (
    <div className="flex flex-col gap-6 px-20">
      <Input placeholder="Title" />
      <TextArea placeholder="Description..." />
      {questions.map((question, questionIndex) => (
        <div key={`question-${questionIndex}`}>
          <div className="flex gap-4">
            <div className="flex-1">
              <Input className="mb-8 mt-8" placeholder="Question..." />
            </div>
            <div className="flex items-center gap-1">
              <Checkbox
                checked={question.multiAnswer}
                onClick={() =>
                  onChange({
                    question,
                    propertyName: "multiAnswer",
                    value: !question.multiAnswer,
                    index: questionIndex,
                  })
                }
                id="multiAnswer"
              />
              <Label htmlFor="multiAnswer">Multiple Answers</Label>
            </div>
          </div>
          <div className="flex flex-col">
            {question.answers.map((answer, answerIndex) => {
              return (
                <div
                  className="mb-4 flex items-center gap-3"
                  key={`question-${questionIndex}-answer-${answerIndex}`}
                >
                  <Checkbox
                    id="isAnswer"
                    checked={answer.isAnswer}
                    onCheckedChange={(e) =>
                      onChangeAnswer({
                        answerIndex,
                        questionIndex,
                        value: e,
                        question,
                        answer,
                        property: "isAnswer",
                      })
                    }
                  />
                  <Input
                    placeholder="Answer..."
                    value={answer.answer}
                    onChange={(e) =>
                      onChangeAnswer({
                        answerIndex,
                        questionIndex,
                        value: e.target.value,
                        question,
                        answer,
                        property: "answer",
                      })
                    }
                  />
                </div>
              );
            })}
          </div>
          <div className="flex gap-3">
            <Button
              variant={"secondary"}
              onClick={() => onClickAddAnswer({ question, questionIndex })}
            >
              Add Answer
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Create;
