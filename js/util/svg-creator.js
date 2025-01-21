export function svgCreator({
  classNames,
  width,
  height,
  d,
  stroke,
  strokeWidth,
  strokeLineca,
}) {
  const fragment = document.createDocumentFragment();
  const svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );

  svgElement.setAttribute("class", classNames);
  svgElement.setAttribute("width", width);
  svgElement.setAttribute("height", height);
  svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  const pathElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  pathElement.setAttribute("d", d);
  pathElement.setAttribute("stroke", stroke);
  pathElement.setAttribute("stroke-width", strokeWidth);
  pathElement.setAttribute("stroke-lineca", strokeLineca);

  svgElement.appendChild(pathElement);
  fragment.appendChild(svgElement);

  return fragment;
}

export function svgUseCreator() {
  const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgIcon.setAttribute("class", "icon icon-easy");
  svgIcon.setAttribute("width", "20");
  svgIcon.setAttribute("height", "21");

  // Добавляем <use> для использования символа из спрайта
  const useElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "use"
  );
  useElement.setAttribute("xlink:href", "#difficulty-easy");

  // Вставляем <use> в <svg> и <svg> в body
  svgIcon.appendChild(useElement);
  //document.body.appendChild(svgIcon);

  return svgIcon;
}
