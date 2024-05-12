import React from "react";

interface CardProps {
  content: string;
}

const Card: React.FC<CardProps> = ({ content }) => {
  const randomValue = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomTop = randomValue(100, window.innerHeight - content.length * 10);
  const randomLeft = randomValue(100, window.innerWidth - content.length * 10);
  const randomRotate = randomValue(-15, 15);

  const style: React.CSSProperties = {
    top: `${randomTop}px`,
    left: `${randomLeft}px`,
    transform: `rotate(${randomRotate}deg)`,
  };
  return (
    <div className="absolute" style={style}>
      <span
        className="absolute group transform transition-transform hover:scale-125 cursor-pointer whitespace-nowrap z-50 text-white"
        onClick={(e) => ""}
      >
        {content}
      </span>
    </div>
  );
};

export default Card;
