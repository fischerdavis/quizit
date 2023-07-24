import { ThemeProvider } from "next-themes";
import NavBar from "@/components/NavBar";
import { Input } from "@/components/Input";
import { TextArea } from "@/components/TextArea";

const Create = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <NavBar />
      <div className="container flex flex-wrap gap-4 bg-background pt-10">
        <Input placeholder="Title" />
        <TextArea placeholder="Description..." />
      </div>
    </ThemeProvider>
  );
};

export default Create;
