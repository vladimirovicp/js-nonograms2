import ElementCreator from "../util/element-creator.js";

export const svgDifficultyFiles = {
  easy: {
    className: "easy",
    viewBox: "0 0 20 21",
    width: 20,
    height: 21,
    path: {
      d: "M2.97079 2.18794C2.97079 1.34878 3.03137 1.49324 3.09072 2.18889C5.32053 2.22398 7.99686 3.21657 10.3999 3.21657C11.5635 3.21657 16.4988 3.08651 17.2575 3.84517C17.7264 4.31409 17.3718 9.42178 17.3718 10.1885C17.3718 11.4739 19.302 18.1319 17.6289 18.1319C14.9748 18.1319 12.3093 18.0602 9.65696 18.1319C8.22327 18.1707 1.31215 20.4149 2.71362 17.3319C3.6216 15.3344 1.63509 13.1534 2.57074 10.9314C3.37732 9.01591 3.23774 3.91184 3.09072 2.18889C3.0506 2.18826 3.01062 2.18794 2.97079 2.18794Z",
      "stroke-width": "3",
      "stroke-linecap": "round",
    },
  },
  medium: {
    className: "medium",
    viewBox: "0 0 20 35",
    width: 20,
    height: 35,
    path: {
      d: "M1.88672 4.11267C3.11135 -4.45975 2.40103 21.4265 2.40103 30.0859C2.40103 34.0495 4.30448 32.8914 7.77284 32.429C9.25762 32.231 16.3609 32.7065 17.2021 31.7718C18.7917 30.0055 17.3164 20.9001 17.3164 18.5137C17.3164 14.6658 17.3164 10.8179 17.3164 6.97001C17.3164 0.713624 6.57908 3.59835 2.40103 3.59835",
      "stroke-width": "3",
      "stroke-linecap": "round",
    },
  },
  hard: {
    className: "hard",
    viewBox: "0 0 20 49",
    width: 20,
    height: 49,
    path: {
      d: "M2.42515 4.50284C1.49812 -1.98637 1.55235 17.8024 1.55235 24.3575C1.55235 30.2413 1.55235 35.9483 1.55235 41.8445C1.55235 47.2323 2.76507 46.5952 7.72423 46.3591C8.70741 46.3122 17.4417 45.2313 17.4963 44.3018C18.1884 32.5357 17.9445 20.5807 17.4963 8.92785C17.4045 6.54133 17.9507 2.64168 14.9247 2.64168C11.2362 2.64168 5.29644 1.86966 1.95875 3.53847",
      "stroke-width": "3",
      "stroke-linecap": "round",
    },
  },
};

/*
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
*/
