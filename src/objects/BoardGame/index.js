import './style.css';
import CardGame from '../../components/CardGame'

function BoardGame(amountCard) {
  const $htmlContent = CardGame().repeat(amountCard);

  return /* html */ `
    <section class="l-board-game">
      ${$htmlContent}
    </section>  
    `; 
}

export default BoardGame;
