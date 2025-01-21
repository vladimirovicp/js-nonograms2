import ElementCreator from "../../util/element-creator.js";
import { difficultyView } from "../difficulty/difficultyView.js";
import { header } from "../header/header.js";
import { game } from "./game.js";

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

  contentMain.addInnerElements([header(), game()]);

  const contentSecondary = new ElementCreator({
    tag: "aside",
    classNames: ["content-secondary"],
  });

  container.addInnerElements([contentPrimary, contentMain, contentSecondary]);

  main.addInnerElements([container]);

  return main;
}
