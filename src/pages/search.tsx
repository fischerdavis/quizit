import { useRouter } from "next/router";
import QuizList from "@/components/QuizList";

const Search = () => {
  const router = useRouter();

  const name = router.query.search as string;

  if (name === undefined) return;

  return <QuizList name={name} />;
};

export default Search;
