import { Card } from "./Card";
import { dataCards } from "../data/dataCards";
import { shuffleCards, cardMatch } from "../helpers/";
import { useContext, useMemo } from "react";
import { CardsContext } from "../context/CardsContext";

export const Table = () => {
  const { setPoints, setMovements, flipCards, counterMatchCard, shuffleCard } =
    useContext(CardsContext);

  const { onSelectCard } = cardMatch({
    setPoints,
    setMovements,
    flipCards,
    counterMatchCard,
  });

  const suffleCards = useMemo(() => shuffleCards(dataCards), [shuffleCard]);

  return (
    <div className="transparentBg text-sky-100 p-5 max-w-screen-sm rounded-xl mx-5">
      <h1 className="text-center font-bold text-2xl mb-10">Juego de la memoria</h1>
      <div className="grid grid-cols-4 gap-4 place-items-center">
        {suffleCards.map((card) => (
          <Card
            key={card.id}
            onSelectCard={onSelectCard}
            idCard={card.id}
            numCard={card.numImg}
          />
        ))}
      </div>
    </div>
  );
};