import { useRouter } from "next/router";
import { api } from "@/utils/api";
import { Checkbox } from "@/components/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/radio-group";
import { Label } from "@/components/label";

const Index = () => {
  const router = useRouter();

  const quizId = router.query.id as string;

  const { isLoading, data: questions = [] } =
    api.question.getQuestions.useQuery({ quizId });

  if (isLoading) return <>Loading...</>;
  if (!questions) return <>Error Loading Quiz</>;
  if (!questions.length) return <>No Questions Found.</>;

  return (
    <div className="flex justify-center">
      {questions.map((question) => (
        <div key={question.id}>
          <div>{question.question}</div>
          <div>
            {question.multiAnswer ? (
              question.Answer.map((answer) => (
                <MultiAnswer
                  key={answer.id}
                  id={answer.id}
                  answer={answer.answer}
                />
              ))
            ) : (
              <RadioGroup defaultValue="comfortable">
                {question.Answer.map((answer) => (
                  <SingleAnswer
                    key={answer.id}
                    id={answer.id}
                    answer={answer.answer}
                  />
                ))}
              </RadioGroup>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

interface Answer {
  id: string;
  answer: string;
}

const MultiAnswer = ({ id, answer }: Answer) => (
  <div className="flex items-center space-x-2 pt-2" key={id}>
    <Checkbox id={id} />
    <label
      htmlFor={id}
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {answer}
    </label>
  </div>
);

const SingleAnswer = ({ id, answer }: Answer) => (
  <div className="flex items-center space-x-2 pt-2">
    <RadioGroupItem value={answer} id={id} />
    <Label htmlFor={id}>{answer}</Label>
  </div>
);

export default Index;
