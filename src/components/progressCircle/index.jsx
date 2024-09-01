import React from 'react';
import './style.css';

export function ProgressCircle({ progress }) {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="progress-circle">
      <svg width="150" height="150">
        <circle
          className="background"
          cx="75"
          cy="75"
          r={radius}
        />
        <circle
          className="progress"
          cx="75"
          cy="75"
          r={radius}
          style={{ strokeDashoffset: offset }}
        />
      </svg>
      <strong>{progress}%</strong>
      <p>Completo</p>
    </div>
  );
};

