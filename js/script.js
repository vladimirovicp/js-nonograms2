import { game } from "./components/game/view.js";

console.log("111");

const body = document.body;

console.log(game(5));

body.appendChild(game(5).getElement());
