import { generateGameContainer } from "../components/game/game.js";
import { redrawGame } from "../redraw.js";

const difficultyData = {
  easy: 5,
  medium: 10,
  hard: 15,
};

let gridSize = 5;
let template = "home";

// Функция для изменения значения gridSize
export function setGridSize(difficul) {
  gridSize = difficultyData[difficul];
  redrawGame(generateGameContainer());
  console.log(`изменен уровень на ${difficul}`);
}

// Функция для получения значения gridSize
export function getGridSize() {
  return gridSize;
}

export function getTemplateName() {
  return template;
}

/*
export function setTemplate( ??? ) {
  template = ???;
}
*/
