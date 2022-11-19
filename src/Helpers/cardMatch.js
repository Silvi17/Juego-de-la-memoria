const possibleMatch = [
    [1, 9],
    [2, 10],
    [3, 11],
    [4, 12],
    [5, 13],
    [6, 14],
    [7, 15],
    [8, 16],
  ];
  
  let arrIdCard = [];
  let arrSetFlipCard = [];
  
  const selectAudio = new Audio(".public/Sounds/Click-sound-effect.wav");
  const matchAudio = new Audio("./publicSounds/Correct-sound-effect.wav");
  const errorAudio = new Audio(".public/Sounds/Error-sound-effect.wav");
  
  //! Debe de resetearse al ganar colocarlo en el context
  
  //* setPoints, setMovements modificadores del estado del CardContext
  //  setPoints: modifica los puntos
  //  setMovementsL modifica los movimientos
  
  export const cardMatch = ({
    setPoints,
    setMovements,
    flipCards,
    counterMatchCard,
  }) => {
    const getPoints = (counterMatch) => {
      setPoints(counterMatch);
    };
  
    const onSelectCard = ({ idCard, isFlip, setIsFlip }) => {
      if (isFlip) return;
      setIsFlip(true);
  
      //* solucion para introducir todos los modificadores de las card flip = true
      if (!flipCards.find((card) => card.id === idCard)) {
        flipCards.unshift({ id: idCard, setIsFlip });
      }
  
      const arrSetFlip = arrSetFlipCard.unshift(setIsFlip);
      const arrIds = arrIdCard.unshift(idCard);
  
      if (arrIds === 2 && arrSetFlip === 2) {
        validMatchCardsSelect(arrIdCard, arrSetFlipCard);
        //* Aumentar los movimientos
        setMovements((movement) => movement + 1);
      } else {
        //* audio select card
        selectAudio.play();
      }
    };
  
    const validMatchCardsSelect = (arrId, arrSetFlip) => {
      let matchCard = false;
  
      const cardMatchValid = possibleMatch.filter((ids) => {
        if (arrId.includes(ids[0]) && arrId.includes(ids[1])) {
          //* almacenar los match para saber si gano y los punto que tiene
          counterMatchCard.unshift(arrId);
  
          return arrId;
        }
      });
  
      if (cardMatchValid.length > 0) {
        matchCard = true;
  
        //* audio match
        matchAudio.play();
      } else {
        matchCard = false;
  
        //* audio not match
        errorAudio.play();
      }
  
      if (!matchCard) {
        setTimeout(() => {
          arrSetFlip.forEach((setFlip) => {
            setFlip(false);
          });
        }, 450);
      }
  
      arrIdCard = [];
      arrSetFlipCard = [];
      getPoints(counterMatchCard.length);
    };
  
    return { onSelectCard };
  };