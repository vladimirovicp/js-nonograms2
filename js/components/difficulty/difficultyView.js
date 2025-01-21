import ElementCreator from "../../util/element-creator.js";
import { svgCreator } from "../../util/svg-creator.js";
const difficultyName = ["easy", "medium", "hard"];
const difficultySize = {
  easy: { width: 20, height: 21 },
  medium: { width: 20, height: 35 },
  hard: { width: 20, height: 49 },
};

export function difficultyView() {
  const list = new ElementCreator({
    tag: "ul",
    classNames: ["difficulty__list"],
  });

  const itemList = [];
  difficultyName.forEach((name) => {
    const item = new ElementCreator({
      tag: "li",
      classNames: ["difficulty__item"],
    });
    const button = new ElementCreator({
      tag: "button",
      classNames: ["btn__reset", "btn__difficulty", `btn__difficulty-${name}`],
    });

    const text = new ElementCreator({
      tag: "span",
      classNames: ["text"],
      textContent: name,
    });

    const previev = new ElementCreator({
      classNames: ["difficulty__previev", `difficulty__previev-${name}`],
    });

    previev.addInnerElements([...previevSvgDifficulty()]);

    button.addInnerElements([text, previev]);

    item.addInnerElements([button]);
    itemList.push(item);
  });

  list.addInnerElements([...itemList]);

  return list;
}

function previevSvgDifficulty() {
  const svgList = [];

  difficultyName.forEach((name) => {
    const fragment = svgCreator({
      classNames: "icon icon-easy",
      width: "20",
      height: "21",
      d: "M2.97079 2.18794C2.97079 1.34878 3.03137 1.49324 3.09072 2.18889C5.32053 2.22398 7.99686 3.21657 10.3999 3.21657C11.5635 3.21657 16.4988 3.08651 17.2575 3.84517C17.7264 4.31409 17.3718 9.42178 17.3718 10.1885C17.3718 11.4739 19.302 18.1319 17.6289 18.1319C14.9748 18.1319 12.3093 18.0602 9.65696 18.1319C8.22327 18.1707 1.31215 20.4149 2.71362 17.3319C3.6216 15.3344 1.63509 13.1534 2.57074 10.9314C3.37732 9.01591 3.23774 3.91184 3.09072 2.18889C3.0506 2.18826 3.01062 2.18794 2.97079 2.18794Z",
      stroke: "black",
      strokeWidth: "3",
      strokeLineca: "round",
    });

    svgList.push(fragment);
  });

  return svgList;
}
