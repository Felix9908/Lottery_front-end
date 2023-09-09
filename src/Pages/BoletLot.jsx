import React, { useState, useEffect } from 'react';

function BoletosLot() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [ticketNumbers, setTicketNumbers] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    // Generar números del 1 al 1000
    const numbers = Array.from({ length: 1000 }, (_, index) => index + 1);
    setTicketNumbers(numbers);
  }, []);

  function calculateTimeLeft() {
    const now = new Date();
    const lotteryDate = new Date('2023-12-31T23:59:59'); // Fecha del sorteo
    const timeDifference = lotteryDate - now;

    if (timeDifference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div className="p-8">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-semibold mb-2">Tiempo Restante Para la loteria</h2>
        <div className="text-2xl">
          <span className="bg-yellow-300 p-2 rounded-md mr-2">{timeLeft.days} Días</span>
          <span className="bg-yellow-300 p-2 rounded-md mr-2">{timeLeft.hours} Horas</span>
          <span className="bg-yellow-300 p-2 rounded-md mr-2">{timeLeft.minutes} Minutos</span>
          <span className="bg-yellow-300 p-2 rounded-md">{timeLeft.seconds} Segundos</span>
        </div>
      </div>
      <div className="grid grid-cols-5 md:grid-cols-10 lg:grid-cols-20 gap-4">
        {ticketNumbers.map((number) => (
          <div
            key={number}
            className="bg-yellow-300 text-center p-2 rounded-md text-gray-800 font-semibold"
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BoletosLot;
