import { Card, CardContent, CardFooter, CardHeader } from "@/components/Card";
import { Skeleton } from "@/components/Skeleton";

const CardLoader = () => (
  <>
    <Card className={"m-2 w-[318px]"}>
      <CardHeader>
        <Skeleton className="h-4 w-[250px]" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-[250px]" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-4 w-[250px]" />
      </CardFooter>
    </Card>

    <Card className={"m-2 w-[318px]"}>
      <CardHeader>
        <Skeleton className="h-4 w-[250px]" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-[250px]" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-4 w-[250px]" />
      </CardFooter>
    </Card>
    <Card className={"m-2 w-[318px]"}>
      <CardHeader>
        <Skeleton className="h-4 w-[250px]" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-[250px]" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-4 w-[250px]" />
      </CardFooter>
    </Card>
    <Card className={"m-2 w-[318px]"}>
      <CardHeader>
        <Skeleton className="h-4 w-[250px]" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-[250px]" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-4 w-[250px]" />
      </CardFooter>
    </Card>
  </>
);

export default CardLoader;
