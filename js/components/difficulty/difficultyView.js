import ElementCreator from "../../util/element-creator.js";
import { svgCreator } from "../../util/svg-creator.js";
import { svgDifficultyFiles } from "../../components/dataSVG.js";
import { setGridSize } from "../../util/config.js";
import { updateDifficultyBody } from "../../util/helper-components.js";

const difficultyName = ["easy", "medium", "hard"];

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
      callback: (e) => {
        const el = e.target;
        const difficulty = el.dataset.difficulty;
        updateDifficultyBody(difficulty);
        setGridSize(difficulty);
      },
    });

    const textСlassNames = name === "easy" ? ["text", "--active"] : ["text"];

    const text = new ElementCreator({
      tag: "span",
      classNames: textСlassNames,
      attributes: {
        "data-difficulty": name,
      },
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
      classNames: `icon icon-${svgDifficultyFiles[name].className}`,
      width: svgDifficultyFiles[name].width,
      height: svgDifficultyFiles[name].height,
      d: svgDifficultyFiles[name].path.d,
      stroke: svgDifficultyFiles[name].path.stroke,
      strokeWidth: svgDifficultyFiles[name].path["stroke-width"],
      strokeLineca: svgDifficultyFiles[name].path["stroke-linecap"],
    });
    svgList.push(fragment);
  });

  return svgList;
}
