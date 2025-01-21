import { template } from "./components/game/view.js";

const body = document.body;
const templateElement = template().getElement();
body.appendChild(templateElement);
