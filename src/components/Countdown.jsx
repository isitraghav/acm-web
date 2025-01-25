"use client";

import moment from "moment";
import { useEffect, useState } from "react";

export default function Countdown({ dateTime }) {
  const countDownDate = new Date(dateTime);
  const [countDown, setCountDown] = useState(
    Math.floor((countDownDate.getTime() - Date.now()) / 1000),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const distance = countDownDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
        setCountDown(0);
      } else {
        setCountDown(Math.floor(distance / 1000));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return <div>in {moment(dateTime).fromNow(true)}</div>;
}
