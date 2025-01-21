import ElementCreator from "../../util/element-creator.js";

export function header() {
  const header = new ElementCreator({
    tag: "header",
    classNames: ["header"],
  });

  header.addInnerElements([nameSite("Nonograms")]);

  return header;
}

function nameSite(name) {
  const siteName = new ElementCreator({
    tag: "h1",
    classNames: ["site-name"],
    textContent: name,
  });
  return siteName;
}
