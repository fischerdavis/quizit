import { Input } from "@/components/Input";
import { TextArea } from "@/components/TextArea";
import { Checkbox } from "@/components/Checkbox";
import { Label } from "@/components/label";
import { Fragment, useState } from "react";

interface Answer {
  isAnswer: boolean;
  answer: string;
}

const Create = () => {
  const [answers, setAnswers] = useState<Answer[]>([
    {
      isAnswer: false,
      answer: "",
    },
  ]);

  return (
    <div className="flex flex-col gap-6 px-20">
      <Input placeholder="Title" />
      <TextArea placeholder="Description..." />
      <div>
        <div className="flex gap-4">
          <div className="flex-1">
            <Input className="mb-8 mt-8" placeholder="Question..." />
          </div>
          <div className="flex items-center gap-1">
            <Checkbox id="multiAnswer" />
            <Label htmlFor="multiAnswer">Multiple Answers</Label>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {answers.map((ans, index) => {
            return (
              <Fragment key={index}>
                <Checkbox id="isAnswer" checked={ans.isAnswer} />
                <Input placeholder="Answer..." value={ans.answer} />
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Create;
