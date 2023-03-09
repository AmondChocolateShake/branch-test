function elementMaker(type) {
  let e = {
    element : document.createElement(type),
    style : this.element.style,
  }
  return e;
}

let div2 = elementMaker('div');