export function consoleLog(data) {
  console.log(data);
}

//удаление всех классов кроме указанного
export function removeAllClassesExcept(element, classToKeep) {
  element.classList.forEach((cls) => {
    if (cls !== classToKeep) {
      element.classList.remove(cls);
    }
  });
}

//удаление всех классов кроме указанного массива
export function removeAllClassesExceptList(element, classesToKeep = []) {
  element.classList.forEach((cls) => {
    if (!classesToKeep.includes(cls)) {
      element.classList.remove(cls);
    }
  });
}
