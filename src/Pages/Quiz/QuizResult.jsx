const QuizResult = ({ score, totalScore, tryAgain }) => {
  return (
    <div>
      <div className='text-center'>
        <div>
          <div>
            <div className='space-y-2'>
              <p className='text-white text-2xl'>You Got:{score}</p>
              <p className='text-white text-2xl'>Total Marks:{totalScore}</p>
              <button onClick={tryAgain} className='btn btn-success'>
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
