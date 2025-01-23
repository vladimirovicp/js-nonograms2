import { template } from "./components/game/view.js";
import { startCreateTag } from "./util/helper-components.js";

async function start() {
  const templateElement = template().getElement();
  await body.appendChild(templateElement);

  startCreateTag();
}

const body = document.body;
body.classList.add("easy");

start();
