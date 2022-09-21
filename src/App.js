import React, { useState } from 'react';

function App() {

  const questions = [
    {
      questionText: 'What is the order of magnitude of Plancks Constant?',
      answerOptions: [
        { answerText: '-32', isCorrect: false },
        { answerText: '-33', isCorrect: false },
        { answerText: '-34', isCorrect: true },
        { answerText: '-35', isCorrect: false },
      ],
    },
    {
      questionText: 'Light travels at a speed of _____ kilometers per second',
      answerOptions: [
        { answerText: '30000', isCorrect: false },
        { answerText: '300000', isCorrect: true },
        { answerText: '3000000', isCorrect: false },
        { answerText: '300000000', isCorrect: false },
      ],
    },
    {
      questionText: 'Most accurate value of pi is?',
      answerOptions: [
        { answerText: '3.142', isCorrect: false },
        { answerText: '3.1416', isCorrect: false },
        { answerText: '3.14159', isCorrect: true },
        { answerText: '3.141589', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the order of magnitude of weight of an electron in kg?',
      answerOptions: [
        { answerText: '-29', isCorrect: false },
        { answerText: '-32', isCorrect: false },
        { answerText: '-30', isCorrect: false },
        { answerText: '-31', isCorrect: true },
      ],
    },
    {
      questionText: 'Radius of the Earth is approximately _____km',
      answerOptions: [
        { answerText: '3200', isCorrect: false },
        { answerText: '5300', isCorrect: false },
        { answerText: '6400', isCorrect: true },
        { answerText: '7200', isCorrect: false },
      ],
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;
    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    }
    else {
      setShowScore(true)
    }
  }

  return (
    <>
      <h1 className='header'>A simple Quiz about Mathematical and scientific constants</h1>
      <div className="app">
        {showScore ? (
          <div className='score-section'>

            You scored {score} out of {questions.length}, Questions answered : {questions.length} out of {questions.length}, Correct Answers : {score}, Wrong answers : {questions.length - score}

          </div>
        )
          :
          (
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Question {currentQuestion + 1}</span>{questions.length}
                </div>
                <div className='question-text'>
                  {questions[currentQuestion].questionText}
                </div>
              </div>

              <div className='answer-section'>
                {
                  questions[currentQuestion].answerOptions.map((answerOptions) => (
                    <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
                  ))
                }
              </div>
            </>
          )}
      </div>
    </>
  );
}

export default App;