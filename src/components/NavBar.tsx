import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ListChecks, Plus } from "lucide-react";
import { Button, buttonVariants } from "@/components/Button";
import { Input } from "@/components/Input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/tooltip";

const NavBar = () => (
  <nav className="border-bottom-gray-200 border-b py-3">
    <div className="container flex flex-wrap items-center justify-between">
      <Link href="/" className="flex items-center">
        <ListChecks className="mr-2" />
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          Quizit
        </span>
      </Link>
      <div className="flex gap-2">
        <div className="flex-1">
          <Input type="search" placeholder="Search Quizzes..." />
        </div>
        <div>
          <Button variant="outline">Search</Button>
        </div>
      </div>
      <div className="flex items-center">
        <div className="mr-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/"
                  className={buttonVariants({ variant: "outline", size: "sm" })}
                >
                  <Plus />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Create Quiz</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  </nav>
);

export default NavBar;
