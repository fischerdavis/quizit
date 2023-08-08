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
import { buttonVariants } from "@/components/Button";
import Link from "next/link";

const QuizList = ({ name }: { name: string | null }) => {
  const { isLoading, data: quizzes = [] } = api.quiz.getAll.useQuery({ name });

  if (isLoading) return <CardLoader />;
  if (!quizzes) return <>Error...</>;

  return (
    <>
      {quizzes.length ? (
        quizzes.map((it) => (
          <Card className={"m-2 w-[318px]"} key={it.id}>
            <CardHeader>
              <CardTitle>{it.name}</CardTitle>
              <CardDescription>{it.description}</CardDescription>
            </CardHeader>
            <CardContent>3</CardContent>
            <CardFooter>
              <Link
                href={{ pathname: "/quiz", query: { id: it.id } }}
                className={buttonVariants({ variant: "default" })}
              >
                Start
              </Link>
            </CardFooter>
          </Card>
        ))
      ) : (
        <div className="flex w-full justify-center">
          <div>Nothing found.</div>
        </div>
      )}
    </>
  );
};

export default QuizList;
