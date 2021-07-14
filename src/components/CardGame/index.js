import './style.css'

function CardGame(icon = 'logo-pokebola', alt = 'Imagem de uma Pokébola') {
  return /* html */ `
  <article class="c-card-game">
  <img src="images/${icon}.png" alt="${alt}" 
   />
  </article>
  
  `
}

export default CardGame
