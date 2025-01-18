import { game } from "./components/game/view.js";

/*
import { getGridSize, setGridSize } from "./util/config.js";

const readSize = document.querySelector(".read-size");

readSize.addEventListener("click", () => {
  console.log("текущее значение", getGridSize());
});

document.querySelector(".size").addEventListener("change", (event) => {
  console.log(`Выбрано: ${event.target.value}`);
  setGridSize(event.target.value);
});
*/

const body = document.body;

// console.log(game(5));

body.appendChild(game(5).getElement());
