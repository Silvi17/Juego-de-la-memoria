import { useState } from "react";

export const Card = ({ idCard, numCard, onSelectCard }) => {
  const [isFlip, setIsFlip] = useState(false);

  return (
    <div
      data-id={idCard}
      onClick={() => onSelectCard({ idCard, isFlip, setIsFlip })}
      className={`flex justify-center relative cursor-pointer p-2 w-[100%] max-w-[100px] bg-sky-100 rounded-lg ${
        isFlip ? "flip-face-up cardFaceDown" : "flip-face-dowm cardFaceUp"
      }`}
    >
      <img
        src={`./assets/${numCard}.png`}
        alt="card"
        className={`relative w-[80%] cursor-pointer ${
          isFlip ? "z-10 opacity-100 cardImgUp" : "z-0 opacity-0 cardImgDown"
        }`}
      />

      <div className="absolute top-0 w-full h-full bg-transparent rounded-lg"></div>
    </div>
  );
};