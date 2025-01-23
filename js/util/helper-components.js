const body = document.body;
let difficultyListTag = null;
let difficultyItems = null;
let game = null;

const difficultyArr = ["easy", "medium", "hard"];

// Уровень сложности
export function createDifficultyHTML() {
  difficultyListTag = document.querySelector(".difficulty__list");
  difficultyItems = difficultyListTag.querySelectorAll(".difficulty__item");
}
// активный уровень сложности
export function updateDifficultyBody(difficulty) {
  body.classList.remove(...difficultyArr);
  body.classList.add(difficulty);
}

export function createGameHTML() {
  game = document.querySelector(".game");
}

export function startCreateTag() {
  createDifficultyHTML();
  createGameHTML();
}
