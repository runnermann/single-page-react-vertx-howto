import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button.jsx";
import "./index.css";
import Typewriter from "typewriter-effect";

const introduction = "Welcome! Let's get started.";
const questions = [
  "What is your name?",
  "What is your email?",
  "What is your profession?",
  "Thank you!"
];


export default function Greeter() {
  const [qIndex, setQIndex] = useState(-1);
  const [userInput, setUserInput] = useState("");
  const [responses, setResponses] = useState({});
  const [showForm, setShowForm] = useState(false);

  const handleNext = (event) => {
    if (qIndex >= 0) {
      setResponses({ ...responses, [questions[qIndex]]: userInput });
      setUserInput("");
    }

    setShowForm(false);
    setTimeout(() => {
      if (qIndex < questions.length - 2) {
        setQIndex(qIndex + 1);
      } else {
        setResponses({ ...responses, [questions[qIndex]]: userInput });
        //  alert("Form submitted! " + JSON.stringify(responses));
        setQIndex(qIndex + 1)
      }
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg text-center">

      { qIndex > -1 && qIndex < questions.length - 1 ? (
        <p className="typeWriterText">
          <Typewriter
            options={{ delay: 30 }}
            onInit={(typewriter) => {
              typewriter
                .typeString(questions[qIndex])
                .pauseFor(1000)
                .callFunction(() => setShowForm(true))
                .start();
            }}
            key={qIndex}
          />
        </p>
      ) : ( qIndex === -1 ? (
        <p className="typeWriterText">
          <Typewriter
            options={{ delay: 30 }}
            onInit={(typewriter) => {
              typewriter
                .typeString(introduction)
                .pauseFor(3000)
                .callFunction(() => setQIndex(0))
                .start();
            }}
          />
        </p>
        ) : (
        <p className="typeWriterText">
          <Typewriter
            options={{ delay: 30 }}
            onInit={(typewriter) => {
              typewriter
                .typeString(questions[qIndex])
                .pauseFor(1000)
                //.callFunction(() => setShowForm(false))
                .start();
            }}
          />
        </p>
        )
      )}

      {showForm && (
        <form onSubmit={handleNext} className="mt-4">
          <div className="flex flex-row items-center space-x-2">
            <Input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Enter your answer..."
              className="flex-1"
            />
            <Button type="submit">(enter)</Button>
          </div>
        </form>
      )}
      </div>
    );
}

ReactDOM.render( // (4)
  <Greeter/>,
  document.getElementById('root')
);

