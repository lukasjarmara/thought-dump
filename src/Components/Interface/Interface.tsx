import React, { useState, useEffect, useRef } from "react";
import Card from "../Card/Card.tsx";

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
    const inputWidth = inputRef.current?.offsetWidth || 0;
    const inputHeight = inputRef.current?.offsetHeight || 0;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (showInput === false) {
      setInputPosition({ x: e.pageX, y: e.pageY });
      setShowInput(true);
    } else {
      let newX = e.pageX;
      let newY = e.pageY;

      if (newX + inputWidth > screenWidth) {
        newX = screenWidth - inputWidth;
      }

      if (newY + inputHeight > screenHeight) {
        newY = screenHeight - inputHeight;
      }

      if (newX < 0) {
        newX = 0;
      }

      if (newY < 0) {
        newY = 0;
      }

      setInputPosition({ x: newX, y: newY });
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
    <div className="h-screen w-screen bg-zinc-800" onClick={handleClick}>
      {cards}
      {showInput && (
        <form
          className="absolute"
          style={{
            left: `${inputPosition.x}px`,
            top: `${inputPosition.y}px`,
          }}
          onSubmit={handleAdd}
        >
          <input
            className="border-0 bg-transparent text-white outline-none"
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
