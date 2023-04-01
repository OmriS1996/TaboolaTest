"use strict";

function elementConstructor(elementTag, addonsObject) {
  const element = document.createElement(elementTag);
  if (addonsObject) {
    if (addonsObject.text) {
      element.innerText = addonsObject.text;
    }

    if (addonsObject.attributesObject) {
      addAttributes(element, addonsObject.attributesObject);
    }

    if (addonsObject.elementParent) {
      addonsObject.elementParent.appendChild(element);
    }
  }

  return element;
}
