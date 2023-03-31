function addStyle(element, classesArray, inlineStylesObject) {
  if (classesArray && classesArray.length > 0) {
    for (var i = 0; i < classesArray.length; i++) {
      element.classList.add(classesArray[i]);
    }
  }

  if (inlineStylesObject) {
    for (var name in inlineStylesObject) {
      console.log(element.style[name] + " " + inlineStylesObject[name]);
      element.style[name] = inlineStylesObject[name];
    }
  }
}
