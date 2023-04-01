"use strict";

function elementConstructor(
  elementTag,
  { elementParent, attributesObject, text }
) {
  const element = document.createElement(elementTag);

  if (text) {
    element.innerText = text;
  }

  if (attributesObject) {
    addAttributes(element, attributesObject);
  }

  if (elementParent) {
    elementParent.appendChild(element);
  }

  return element;
}
