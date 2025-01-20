import ElementCreator from "../../util/element-creator.js";
import { getGridSize, getTemplateName } from "../../util/config.js";
import templates from "../../game-template.js";
import { difficultyView } from "../difficulty/difficultyView.js";
import { difficultySVG } from "../dataSVG.js";

import { consoleLog, removeAllClassesExceptList } from "../../util/helper.js";

export function template() {
  const main = new ElementCreator({
    tag: "main",
    classNames: ["main"],
  });

  const container = new ElementCreator({
    classNames: ["container"],
  });

  const contentPrimary = new ElementCreator({
    tag: "aside",
    classNames: ["container__primary"],
  });

  contentPrimary.addInnerElements([difficultyView()]);

  const contentMain = new ElementCreator({
    classNames: ["content-main"],
  });

  const contentSecondary = new ElementCreator({
    tag: "aside",
    classNames: ["content-secondary"],
  });

  container.addInnerElements([contentPrimary, contentMain, contentSecondary]);

  main.addInnerElements([container, difficultySVG()]);

  return main;
}

export function game() {
  const gridSize = getGridSize();

  const game = new ElementCreator({
    tag: "section",
    classNames: ["game"],
  });

  const gameContainer = new ElementCreator({
    classNames: ["game__container"],
  });

  const colHints = new ElementCreator({
    classNames: ["col-hints"],
  });
  colHints.addInnerElements(generateColHintsItems(gridSize));

  const gameWrapper = new ElementCreator({
    classNames: ["game__wrapper"],
  });

  const rowHints = new ElementCreator({
    classNames: ["row-hints"],
  });
  rowHints.addInnerElements(generateRowHintsItems(gridSize));

  const gameTable = new ElementCreator({
    classNames: ["game__table"],
  });

  gameTable.addInnerElements([...createTetableCeil(gridSize)]);

  gameWrapper.addInnerElements([rowHints, gameTable]);

  gameContainer.addInnerElements([colHints, gameWrapper]);
  game.addInnerElements([gameContainer]);

  return game;
}

function generateRowHintsItems(gridSize) {
  const result = [];
  //const gridSize = getGridSize();
  const templateName = getTemplateName();
  const rowHintsData = templates[gridSize][templateName]["row"];
  for (let i = 0; i < gridSize; i++) {
    const rowHintsItems = new ElementCreator({
      classNames: ["row-hints__items"],
    });
    rowHintsItems.addInnerElements(generateRowHintsItem(rowHintsData[i]));
    result.push(rowHintsItems);
  }
  return [...result];
}

function generateRowHintsItem(data) {
  const result = [];

  data.forEach((el) => {
    const rowHintsItem = new ElementCreator({
      classNames: ["row-hints__item"],
      textContent: el,
    });
    result.push(rowHintsItem);
  });

  return [...result];
}

function generateColHintsItems(gridSize) {
  const result = [];
  const templateName = getTemplateName();
  const colHintsData = templates[gridSize][templateName]["col"];
  for (let i = 0; i < gridSize; i++) {
    const rowHintsItems = new ElementCreator({
      classNames: ["col-hints__items"],
    });
    rowHintsItems.addInnerElements(generateColHintsItem(colHintsData[i]));
    result.push(rowHintsItems);
  }
  return [...result];
}

function generateColHintsItem(data) {
  const result = [];

  data.forEach((el) => {
    const colHintsItem = new ElementCreator({
      classNames: ["col-hints__item"],
      textContent: el,
    });
    result.push(colHintsItem);
  });

  return [...result];
}

function createTetableCeil(gridSize) {
  const result = [];
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const tableCeil = new ElementCreator({
        classNames: ["game__table-ceil"],
        attributes: {
          "data-col": i,
          "data-row": j,
        },
        callbacks: [
          {
            eventType: "click",
            handler: (event) => {
              removeAllClassesExceptList(event.target, [
                "game__table-ceil",
                "checked",
              ]);
              event.target.classList.toggle("checked");
            },
          },
          {
            eventType: "contextmenu",
            handler: (event) => {
              removeAllClassesExceptList(event.target, [
                "game__table-ceil",
                "marker",
              ]);
              event.target.classList.toggle("marker");
              event.preventDefault();
            },
          },
        ],
      });
      result.push(tableCeil);
    }
  }
  return result;
}
