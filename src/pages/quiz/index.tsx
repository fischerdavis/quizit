import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  const id = router.query.id as string;

  if (id === undefined) return;
  return <>{id}</>;
};

export default Index;
