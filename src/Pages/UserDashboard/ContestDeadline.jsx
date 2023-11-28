import { useState, useEffect } from "react";

const ContestDeadline = ({ date }) => {
  const deadline = new Date(date).getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = deadline - now;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
      isActive: difference > 0,
    };
  }

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div className='text-center'>
      {timeLeft.isActive ? (
        <div className='flex  gap-2'>
          <p>
            {timeLeft.days} <br />
            days,
          </p>
          <p>
            {timeLeft.hours} <br />
            hours,{" "}
          </p>
          <p>
            {timeLeft.minutes} <br />
            minutes,
          </p>
          <p>
            {timeLeft.seconds} <br />
            seconds
          </p>
        </div>
      ) : (
        <div className='flex  gap-2'>
          <p>
            0 <br />
            days,
          </p>
          <p>
            0 <br />
            hours,{" "}
          </p>
          <p>
            0 <br />
            minutes,
          </p>
          <p>
            0 <br />
            seconds
          </p>
        </div>
      )}
    </div>
  );
};

export default ContestDeadline;
