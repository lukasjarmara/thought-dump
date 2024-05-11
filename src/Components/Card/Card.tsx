import React from "react";

interface CardProps {
  content: string;
}

const Card: React.FC<CardProps> = ({ content }) => {
  const randomValue = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomColor = () => {
    const r = randomValue(0, 255);
    const g = randomValue(0, 255);
    const b = randomValue(0, 255);
    return `rgb(${r},${g},${b})`;
  };

  const randomTop = randomValue(100, window.innerHeight - 100);
  const randomLeft = randomValue(100, window.innerWidth - 100);
  const randomRotate = randomValue(-15, 15);
  const color = randomColor();

  const style: React.CSSProperties = {
    position: "absolute",
    top: `${randomTop}px`,
    left: `${randomLeft}px`,
    transform: `rotate(${randomRotate}deg)`,
    color: color, // Add the random color to the style
  };
  return (
    <div className="card" style={style}>
      <span>{content}</span>
    </div>
  );
};

export default Card;
