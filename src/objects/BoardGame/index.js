import CardGame from '../../components/CardGame'

function BoardGame(amountCard) {
  const $htmlBoardGame = CardGame().repeat(amountCard);

  return $htmlBoardGame;
}

export default BoardGame;
