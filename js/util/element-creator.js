class ElementCreator {
  constructor(params) {
    this.element = document.createElement(
      params.tag !== undefined ? params.tag : "div"
    );
    this.setId(params.id);
    this.setCssClasses(params.classNames);
    this.setCallback(params.callback, params.eventType);
    this.setCallbacks(params.callbacks);
    this.setTextContent(params.textContent);
    this.setAttributes(params.attributes);
  }

  getElement() {
    return this.element;
  }

  setCallback(callback, eventType) {
    if (typeof callback === "function") {
      if (eventType) {
        this.element.addEventListener(eventType, callback);
      } else {
        this.element.addEventListener("click", callback);
      }
    }
  }

  setCallbacks(callbacks) {
    if (Array.isArray(callbacks)) {
      callbacks.forEach(({ eventType = "click", handler }) => {
        if (typeof handler === "function") {
          this.element.addEventListener(eventType, handler);
        }
      });
    }
  }

  setTextContent(text) {
    if (text !== undefined) {
      this.element.textContent = text;
    }
  }

  addInnerElements(children) {
    const fragment = new DocumentFragment();
    children.forEach((child) => {
      if (child instanceof ElementCreator) {
        fragment.append(child.getElement());
      } else {
        fragment.append(child);
      }
    });
    this.element.append(fragment);
  }

  setId(id) {
    if (id !== undefined) {
      this.element.id = id;
    }
  }

  setCssClasses(cssClasses) {
    if (cssClasses !== undefined) {
      cssClasses.map((cssClass) => this.element.classList.add(cssClass));
    }
  }

  setAttributes(attributes) {
    if (attributes !== undefined) {
      const keys = Object.keys(attributes);
      keys.forEach((key) => {
        this.element.setAttribute(key, attributes[key]);
      });
    }
  }
}

export default ElementCreator;
