import { api } from "@/utils/api";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import CardLoader from "@/components/CardLoader";
import { Button } from "@/components/Button";

const QuizList = () => {
  const { isLoading, data: quizzes = [] } = api.quiz.getAll.useQuery();

  if (isLoading) return <CardLoader />;
  if (!quizzes) return <>Error...</>;

  return (
    <>
      {quizzes.map((it) => (
        <Card className={"m-2 w-[318px]"} key={it.id}>
          <CardHeader>
            <CardTitle>{it.name}</CardTitle>
            <CardDescription>{it.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Last attempt: 97%</p>
          </CardContent>
          <CardFooter>
            <Button variant="secondary">Start</Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default QuizList;
