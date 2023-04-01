function createSuggestionTexts(parentContainer, suggestionData) {
  const textsLink = createSuggestionLink(parentContainer, suggestionData);

  const textsContainer = elementConstructor("span", {
    elementParent: textsLink,
  });
  addStyle(textsContainer, ["texts-container"]);

  createSuggestionTitle(textsContainer, suggestionData);

  createSuggestionBrand(textsContainer, suggestionData);
}
