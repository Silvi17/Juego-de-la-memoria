import { useContext } from "react";
import { CardsContext } from "../context/CardsContext";

export const ModalInit = ({ tilte, description }) => {
  const { time, TimeInit, setModalStart, resumeTimer } =
    useContext(CardsContext);

  const restart = (time) => {
    TimeInit(time);
    setModalStart(false);
    resumeTimer();
  };

  return (
    <div className="absolute flex justify-center items-center top-0 w-screen h-screen animate__animated animate__fadeIn transparentBg">
      <div className="animate__animated animate__bounceIn z-10 p-5 font-bold text-center text-sky-100 max-w-lg bg-opacity-90 bg-[#56a7b1] rounded-lg">
        <h1 className="text-2xl">{tilte}</h1>
        <hr />
        <p className="my-8 text-lg">{description}</p>
        <button
          onClick={() => restart(40)}
          className="text-md  px-4 py-2 mx-2 rounded-xl shadow-lg text-[#56a7b1] bg-sky-100 hover:bg-gray-200 hover:scale-110 transition-all"
        >
          40 Seg
        </button>
        <button
          onClick={() => restart(60)}
          className="text-md px-4 py-2 mx-2 rounded-xl shadow-lg text-[#56a7b1] bg-sky-100 hover:bg-gray-200 hover:scale-110 transition-all"
        >
          1 Min
        </button>
        <button
          onClick={() => restart(120)}
          className="text-md  px-4 py-2 mx-2 rounded-xl shadow-lg text-[#56a7b1] bg-sky-100 hover:bg-gray-200 hover:scale-110 transition-all"
        >
          2 Min
        </button>
      </div>
    </div>
  );
};