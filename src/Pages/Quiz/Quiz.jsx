import { useState } from "react";
import { QuizData } from "./QuizData";
import QuizResult from "./QuizResult";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [clicked, setClicked] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const nextQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClicked(0);
    } else {
      setShowResult(true);
    }
  };

  const updateScore = () => {
    if (clicked === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const resetAll = () => {
    setCurrentQuestion(0);
    setClicked(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <>
      <div className='bg-[#0F1F33] text-center py-16'>
        <div className='text-center space-y-4 py-10'>
          <h2 className='text-4xl font-semibold text-white'>Play Quiz</h2>
          <p className='text-gray-500 w-4/5 lg:w-1/3 mx-auto'>
            Get Ready to test your wits and compete for glory
          </p>
        </div>

        <div className='flex justify-center items-center'>
          <div className='w-[500px] bg-[#19273A] rounded-md py-6 px-4'>
            {showResult ? (
              <QuizResult
                tryAgain={resetAll}
                score={score}
                totalScore={QuizData.length}
              />
            ) : (
              <>
                <div className='bg-[#009688] m-5 p-10 rounded'>
                  <span className='font-medium text-2xl'>
                    {currentQuestion + 1}.
                  </span>
                  <span className='font-medium text-2xl'>
                    {QuizData[currentQuestion].question}
                  </span>
                </div>
                <div className='flex flex-col m-1 '>
                  {QuizData[currentQuestion].options.map((option, index) => {
                    return (
                      <button
                        className={`btn mx-4 mt-4 bg-[#009688] btn-outline  hover:bg-[#0F1F33] hover:text-white ${
                          clicked == index + 1
                            ? "bg-[#0F1F33] text-white "
                            : "null"
                        }`}
                        onClick={() => setClicked(index + 1)}
                        key={index}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={nextQuestion}
                  className='btn bg-[#009688] border-none mt-1  mx-4'
                >
                  Next
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
