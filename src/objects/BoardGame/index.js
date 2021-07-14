import './style.css';
import CardFrontBack from '../../components/CardFrontBack';

function BoardGame(amountCard) {
  const $htmlContent = CardFrontBack().repeat(amountCard);

  return /* html */ `
    <section class="l-board-game">
      ${$htmlContent}
    </section>  
    `; 
}

export default BoardGame;
