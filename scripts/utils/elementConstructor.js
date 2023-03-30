"use strict";

function elementConstructor(
  elementTag,
  elementParent,
  classesArray,
  attributeObjectArray,
  text
) {
  const element = document.createElement(elementTag);

  if (text) {
    element.innerHTML = text;
  }

  if (classesArray && classesArray.length > 0) {
    for (var i = 0; i < classesArray.length; i++) {
      element.classList.add(classesArray[i]);
    }
  }

  if (attributeObjectArray && attributeObjectArray.length > 0) {
    for (var i = 0; i < attributeObjectArray.length; i++) {
      element.setAttribute(
        attributeObjectArray[i].attributeName,
        attributeObjectArray[i].attributeValue
      );
    }
  }

  elementParent.appendChild(element);

  return element;
}
