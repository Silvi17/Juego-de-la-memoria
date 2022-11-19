import { createContext, useState } from "react";
import { useTimeGame } from "../hooks/useTimeGame";
export const CardsContext = createContext();

let flipCards = [];
let counterMatchCard = [];

export const CardsProvider = ({ children }) => {
  const [movements, setMovements] = useState(0);
  const [Points, setPoints] = useState(0);
  const [modalStart, setModalStart] = useState(true);
  const [shuffleCard, setShuffleCard] = useState(true);
  const { time, stopTimer, resumeTimer, setTime } = useTimeGame(0);

  const TimeInit = (initial) => {
    setTime(initial);
  };

  const restartGame = () => {
    flipCards.forEach((fns) => {
      fns.setIsFlip(false);
    });
    flipCards = [];
    counterMatchCard = [];
    setPoints(0);
    setMovements(0);

    //* shuffle card
    setTimeout(() => {
      setShuffleCard((ShuffleState) => !ShuffleState);
    }, 500);
  };

  return (
    <CardsContext.Provider
      value={{
        time,
        stopTimer,
        resumeTimer,
        TimeInit,
        movements,
        modalStart,
        setModalStart,
        setMovements,
        Points,
        setPoints,
        flipCards,
        restartGame,
        counterMatchCard,
        shuffleCard,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};