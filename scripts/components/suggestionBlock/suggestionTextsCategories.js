function createSuggestionCategory(parentContainer, suggestionData) {
  if (suggestionData.categories) {
    let categoriesText = "";

    for (var i = 0; i < suggestionData.categories.length; i++) {
      if (i > 0 && i < suggestionData.categories.length) {
        categoriesText += " | ";
      }
      categoriesText += suggestionData.categories[i];
    }
    const categories = elementConstructor("span", {
      elementParent: textsContainer,
      text: categoriesText,
    });
    addStyle(categories, ["categories-container"]);
  }
}
