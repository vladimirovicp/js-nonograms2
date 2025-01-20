import { template, game } from "./components/game/view.js";
import { difficultySVG } from "./components/dataSVG.js";
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

/*
const body = document.body;
//body.appendChild(game().getElement());

//body.appendChild(difficultySVG().getElement());

body.appendChild(template().getElement());

// Добавляем символы
*/

/*
const body = document.body;

// const svgElement = difficultySVG().getElement();
// body.appendChild(svgElement);

const templateElement = await template().getElement();
body.appendChild(templateElement);
*/

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  const svgElement = difficultySVG().getElement();
  body.appendChild(svgElement);

  const checkSymbol = setInterval(() => {
    console.log("555");
    if (document.querySelector("symbol#difficulty-easy")) {
      clearInterval(checkSymbol);
      const templateElement = template().getElement();

      body.appendChild(templateElement);
    }
  }, 50);
});
