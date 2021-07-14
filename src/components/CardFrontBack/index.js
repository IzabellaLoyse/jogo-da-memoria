import CardGame from '../CardGame'

function CardFrontBack() {
  return /* html */ `
    <article class="c-card-front-back">
    ${CardGame()}
    ${CardGame('pikachu', 'Imagem do Pikachu')}
    </article>
  
  `
}

export default CardFrontBack
