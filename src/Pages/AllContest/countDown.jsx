import { useState, useEffect } from "react";

const CountDown = ({ date }) => {
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
    };
  }

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div>
      <h2 className='text-2xl font-semibold'>Registration Left</h2>
      <div className='flex justify-center gap-6 mt-10'>
        <p>
          <span className='bg-fuchsia-600 p-3 rounded mr-2 text-white'>
            {timeLeft.days}
          </span>
          days,
        </p>
        <p>
          <span className='bg-fuchsia-600 p-3 rounded mr-2 text-white'>
            {timeLeft.hours}
          </span>
          hours,{" "}
        </p>
        <p>
          <span className='bg-fuchsia-600 p-3 rounded mr-2 text-white'>
            {timeLeft.minutes}
          </span>
          minutes,
        </p>
        <p>
          <span className='bg-fuchsia-600 p-3 rounded mr-2 text-white'>
            {timeLeft.seconds}
          </span>
          seconds
        </p>
      </div>
    </div>
  );
};

export default CountDown;
