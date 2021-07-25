import './App.css';
import { Fragment, useEffect, useState } from 'react';
import QuestionsContainer from './components/QuestionsContainer';
import Questions from './service/Questions';
function App() {

  const [questions, setQuestions] = useState([]);
  const [points, setPoints] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [status, setStatus] = useState("Loading");
  let totalPoints;

  useEffect(() => {
    Questions().then((questions) => {
      setQuestions(questions.results)
      setQuestionNumber(0)
      setStatus("Ready")
    })
  }, [])

  totalPoints = () => {
    return questions.reduce((acc, el) => {
      if (el.type === "boolean") {
        return acc + 5
      } else {
        return acc + 10
      }
    }, 0)
  }

  let handleAnswers = (text) => {
    if (questions[questionNumber].correct_answer === text) {
      questions[questionNumber].type === "boolean" ? setPoints(points + 5) : setPoints(points + 10);
    }

    if (typeof (questions[questionNumber + 1]) !== "undefined") {
      setQuestionNumber(questionNumber + 1);
    } else {
      setStatus("Finished")
    }
  }

  let resetGame = () => {
    setStatus("Loading");
    setPoints(0);
    Questions().then((questions) => {
      setQuestions(questions.results);
      setQuestionNumber(0);
      setStatus("Ready");
    })

  }

  return (
    <Fragment>
      {status === "Loading" &&
        <h1>¡Game is loading!</h1>
      }
      {status === "Ready" &&
        <QuestionsContainer
          question={questions[questionNumber]}
          questionNumber={questionNumber}
          handleAnswers={handleAnswers}
        />}
      {
        status === "Finished" &&
        <div>
          <h2 style={{textAlign: "center"}}>¡Thanks for playing! Your score is {points} out of {totalPoints()} </h2>
          <h3 className="playAgain" onClick={() => resetGame()}>¿Would you like to play again?</h3>
        </div>
      }

    </Fragment>
  );
}

export default App;
