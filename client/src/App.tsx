import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Question } from "./lib/types";
import QuestionComp from "./components/Question";

export default function App() {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/question/get/10")
      .then((res) => res.json())
      .then((data) => setQuestions(data.questions))
      .catch((e) => console.error(e));
  }, []);

  if (questions.length < 0) {
    return <p>Loading..</p>;
  }

  return (
    <main>
      <div className="flex p-6">
        <ul className="w-full flex flex-col gap-2">
          {questions.map((question) => (
            <li key={question.id}>
              <Link href={`/question/${question.id}`}>
                <QuestionComp key={question.id} question={question} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
