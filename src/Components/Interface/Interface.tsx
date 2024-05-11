import React, { useState, useEffect, useRef } from "react";
import Card from "../Card/Card.tsx";
import "./Interface.css";

const Interface: React.FC = () => {
  const [newContent, setNewContent] = useState<string>("");
  const [showInput, setShowInput] = useState<boolean>(false);
  const [inputPosition, setInputPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showInput) {
      inputRef.current?.focus();
    }
  }, [showInput]);

  const handleClick = (e: React.MouseEvent) => {
    if (showInput === false) {
      setInputPosition({ x: e.pageX, y: e.pageY });
      setShowInput(true);
    } else {
      const distance = Math.sqrt(
        Math.pow(e.pageX - inputPosition.x, 2) +
          Math.pow(e.pageY - inputPosition.y, 2)
      );
      if (distance > 50) {
        setInputPosition({ x: e.pageX, y: e.pageY });
      }
    }
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const [cards, setCards] = useState<JSX.Element[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (newContent.trim() !== "") {
      const newCard = <Card key={cards.length} content={newContent} />;
      setCards((prevCards) => [...prevCards, newCard]);
      setNewContent("");
      setShowInput(false);
    }
  };

  return (
    <div className="container" onClick={handleClick}>
      {cards}
      {showInput && (
        <form
          style={{
            position: "absolute",
            left: `${inputPosition.x}px`,
            top: `${inputPosition.y}px`,
          }}
          onSubmit={handleAdd}
        >
          <input
            ref={inputRef}
            type="text"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
        </form>
      )}
    </div>
  );
};

export default Interface;
