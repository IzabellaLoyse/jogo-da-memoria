import CardGame from "../CardGame";

function CardFrontBack() {
  return /* html */ `
    <article class="c-card-front-back">
    ${CardGame()}
    ${CardGame()}
    </article>
  
  `;
}


export default CardFrontBack;