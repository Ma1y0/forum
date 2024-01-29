import { Question } from "../lib/types";

export default function QuestionComp({ question }: { question: Question }) {
  return (
    <>
      <div className=" p-6 m-auto bg-accent-content rounded-md shadow-md ring-2 ring-gray-800/50">
        <h2 className="text-xl">{question.title}</h2>
        <p className="mt-3">{question.description}</p>
      </div>
    </>
  );
}
