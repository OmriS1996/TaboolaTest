function addAttributes(element, attributesObject) {
  for (var attribute in attributesObject) {
    element.setAttribute(attribute, attributesObject[attribute]);
  }
}
