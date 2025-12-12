"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

type CountdownTimerProps = {
  durationInSeconds: number;
  onComplete: () => void;
};

export function CountdownTimer({
  durationInSeconds,
  onComplete,
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(durationInSeconds);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    console.log("[PanetonesPage] Timer iniciado", { durationInSeconds });
  }, [durationInSeconds]);

  useEffect(() => {
    if (!isClient) return;

    if (timeLeft <= 0) {
      console.log("[PanetonesPage] Timer finalizado");
      onComplete();
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, onComplete, isClient]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  if (!isClient) {
    // Render a placeholder on the server
    const initialMinutes = Math.floor(durationInSeconds / 60);
    const initialSeconds = durationInSeconds % 60;
    return (
      <span className="font-mono text-4xl md:text-5xl font-bold text-primary flex items-center">
        <Clock className="mr-2 h-8 w-8" />
        {String(initialMinutes).padStart(2, "0")}:
        {String(initialSeconds).padStart(2, "0")}
      </span>
    );
  }

  return (
    <span className="font-mono text-4xl md:text-5xl font-bold text-primary flex items-center">
      <Clock className="mr-2 h-8 w-8" />
      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </span>
  );
}
