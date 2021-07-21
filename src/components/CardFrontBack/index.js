import CardGame from '../CardGame';
import './style.css';


function CardFrontBack() {
  return /* html */ `
    <article class="c-card-front-back">
    <div class="card -front">
      ${CardGame()}
    </div>

    <div class="card -back">
      ${CardGame('pikachu', 'Imagem do Pikachu')}
    </div>
    </article>
  
  `
}

export default CardFrontBack
