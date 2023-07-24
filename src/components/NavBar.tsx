import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ListChecks, LogIn, LogOut, Plus } from "lucide-react";
import { Button, buttonVariants } from "@/components/Button";
import { Input } from "@/components/Input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Tooltip";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

const NavBar = () => {
  const user = useUser();
  return (
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
          <div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/create"
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                    })}
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
          {!user.isSignedIn && (
            <SignInButton>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" type="button">
                      <LogIn />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Sign in</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </SignInButton>
          )}
          {!!user.isSignedIn && (
            <SignOutButton>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" type="button">
                      <LogOut />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Logout</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </SignOutButton>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
