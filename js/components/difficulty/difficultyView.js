import ElementCreator from "../../util/element-creator.js";

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
    const svg = new ElementCreator({
      tag: "svg",
      classNames: ["icon", `icon-${name}`],
      attributes: {
        width: difficultySize[name].width,
        height: difficultySize[name].height,
      },
    });

    const use = new ElementCreator({
      tag: "use",
      attributes: {
        "xlink:href": `#difficulty-${name}`,
      },
    });

    svg.addInnerElements([use]);
    svgList.push(svg);
  });

  return svgList;
}
