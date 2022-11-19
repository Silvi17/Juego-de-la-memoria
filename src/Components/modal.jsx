import { useContext } from "react";
import { CardsContext } from "../context/CardsContext";

export const Modal = ({ tilte }) => {
  const { setModalStart, restartGame } = useContext(CardsContext);

  const restart = () => {
    setModalStart(true);
    restartGame();
  };

  return (
    <div className="absolute flex justify-center items-center top-0 w-screen h-screen animate__animated animate__fadeIn transparentBg">
      <div className="animate__animated animate__bounceIn w-[250px] z-10 p-5 font-bold text-center text-sky-100 max-w-lg bg-opacity-90 bg-[#56a7b1] rounded-lg">
        <h1 className="text-2xl ">{tilte}</h1>
        <hr />
        <button
          onClick={() => restart()}
          className="text-md px-4 py-2 mt-6 mx-2 rounded-xl  text-[#56a7b1] bg-sky-100 hover:bg-gray-200 hover:scale-110 transition-all"
        >
          Jugar de nuevo
        </button>
      </div>
    </div>
  );
};