import ElementCreator from "../util/element-creator.js";

const svgDifficultyFiles = {
  easy: {
    id: "difficulty-easy",
    viewBox: "0 0 20 21",
    path: {
      d: "M2.97079 2.18794C2.97079 1.34878 3.03137 1.49324 3.09072 2.18889C5.32053 2.22398 7.99686 3.21657 10.3999 3.21657C11.5635 3.21657 16.4988 3.08651 17.2575 3.84517C17.7264 4.31409 17.3718 9.42178 17.3718 10.1885C17.3718 11.4739 19.302 18.1319 17.6289 18.1319C14.9748 18.1319 12.3093 18.0602 9.65696 18.1319C8.22327 18.1707 1.31215 20.4149 2.71362 17.3319C3.6216 15.3344 1.63509 13.1534 2.57074 10.9314C3.37732 9.01591 3.23774 3.91184 3.09072 2.18889C3.0506 2.18826 3.01062 2.18794 2.97079 2.18794Z",
      "stroke-width": "3",
      "stroke-linecap": "round",
    },
  },
};
export function difficultySVG() {
  const svg = new ElementCreator({
    tag: "svg",
    attributes: {
      style: "display: none",
    },
  });

  const symbol = new ElementCreator({
    tag: "symbol",
    id: svgDifficultyFiles.easy.id,
    attributes: {
      viewBox: svgDifficultyFiles.easy.viewBox,
    },
  });

  const path = new ElementCreator({
    tag: "path",
    attributes: svgDifficultyFiles.easy.path,
  });

  symbol.addInnerElements([path]);

  svg.addInnerElements([symbol]);
  return svg;
}
