import React from "react";

interface CardProps {
  content: string;
  index: number;
}

const Card: React.FC<CardProps> = ({ content, index }) => {
  const randomValue = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const colors = ["red", "yellow", "green", "blue", "indigo", "purple", "pink"];
  const shades = ["300", "400", "500"];
  const randomColor = colors[randomValue(0, colors.length - 1)];
  const randomShade = shades[randomValue(0, shades.length - 1)];

  const randomTop = randomValue(100, window.innerHeight - content.length * 10);
  const randomLeft = randomValue(100, window.innerWidth - content.length * 10);
  const randomRotate = randomValue(-15, 15);
  const style: React.CSSProperties = {
    top: `${randomTop}px`,
    left: `${randomLeft}px`,
    transform: `rotate(${randomRotate}deg)`,
  };
  return (
    <div className={`absolute z-${index}`} style={style}>
      <span
        className={`absolute group transform transition-transform hover:scale-125 cursor-default whitespace-nowrap text-${randomColor}-${randomShade} `}
        onClick={(e) => ""}
      >
        {content}
      </span>
    </div>
  );
};

export default Card;
