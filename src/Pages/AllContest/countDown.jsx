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
    <div>
      {timeLeft.isActive ? (
        <div className='flex  justify-center gap-4 mt-10'>
          <div>
            <div className='bg-fuchsia-600 p-3 rounded  text-white'>
              {timeLeft.days}
            </div>

            <div className='pt-2 text-xl'>days,</div>
          </div>
          <div>
            <div className='bg-fuchsia-600 p-3 rounded  text-white'>
              {timeLeft.hours}
            </div>

            <div className='pt-2 text-xl'>hours, </div>
          </div>
          <div>
            <div className='bg-fuchsia-600 p-3 rounded  text-white'>
              {timeLeft.minutes}
            </div>

            <div className='pt-2 text-xl'>min,</div>
          </div>
          <div>
            <div className='bg-fuchsia-600 p-3 rounded  text-white'>
              {timeLeft.seconds}
            </div>

            <div className='pt-2 text-xl'>sec</div>
          </div>
        </div>
      ) : (
        <div className='flex  justify-center gap-4 mt-10'>
          <div>
            <div className='bg-fuchsia-600 p-3 rounded  text-white'>0</div>

            <div className='pt-2 text-xl'>days,</div>
          </div>
          <div>
            <div className='bg-fuchsia-600 p-3 rounded  text-white'>0</div>

            <div className='pt-2 text-xl'>hours, </div>
          </div>
          <div>
            <div className='bg-fuchsia-600 p-3 rounded  text-white'>0</div>

            <div className='pt-2 text-xl'>min,</div>
          </div>
          <div>
            <div className='bg-fuchsia-600 p-3 rounded  text-white'>0</div>

            <div className='pt-2 text-xl'>sec</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountDown;
