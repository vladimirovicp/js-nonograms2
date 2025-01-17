import ElementCreator from "../../util/element-creator.js";

let gridSize = 5;

export function game(size) {
  gridSize = size;

  const game = new ElementCreator({
    tag: "section",
    classNames: ["game"],
  });

  const gameContainer = new ElementCreator({
    classNames: ["game__container"],
  });

  const rowHints = new ElementCreator({
    classNames: ["row-hints"],
  });

  rowHints.addInnerElements(generateRowHintsItems("easy"));

  gameContainer.addInnerElements([rowHints]);

  game.addInnerElements([gameContainer]);

  return game;
}

function generateRowHintsItems(difficulty) {
  let gridSize = 5;

  if (difficulty === "medium") {
    gridSize = 10;
  } else if (difficulty === "medium") {
    gridSize = 15;
  }

  const result = [];

  for (let i = 0; i < gridSize; i++) {
    const rowHintsItems = new ElementCreator({
      classNames: ["row-hints__items"],
    });

    result.push(rowHintsItems);
  }

  return [...result];
}

function generateRowHintsItem(difficulty) {
  const rowHintsItem = new ElementCreator({
    classNames: ["row-hints__item"],
  });
}
