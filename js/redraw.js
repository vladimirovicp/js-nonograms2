export function redrawGame(newElement) {
  const game = document.querySelector(".game");
  if (game) {
    game.innerHTML = "";
    game.appendChild(newElement.getElement());
  }
}
