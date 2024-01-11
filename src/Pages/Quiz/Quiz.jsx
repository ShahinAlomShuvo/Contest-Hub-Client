import { useState } from "react";
import { QuizData } from "./QuizData";
import QuizResult from "./QuizResult";
import { Helmet } from "react-helmet";
import bgImage from "../../assets/Images/quiz.jpg";
import CommonBanner from "../../Components/Shared/CommonBanner";
import MyTeam from "../Home/MyTeam";

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
      <Helmet>
        <title>ContestHub | Quiz</title>
      </Helmet>
      <CommonBanner bgImage={bgImage} title={"Play Quiz"}></CommonBanner>

      <div className='bg-[#0F1F33] text-center py-16'>
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
      <MyTeam></MyTeam>
    </>
  );
};

export default Quiz;
