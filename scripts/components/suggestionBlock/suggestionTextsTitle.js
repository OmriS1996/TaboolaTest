function createSuggestionTitle(parentElement, suggestionData) {
  const titleContainer = elementConstructor("span", {
    elementParent: parentElement,
    text: suggestionData.name,
  });
  addStyle(titleContainer, ["title-container"], {
    maxWidth: suggestionData.thumbnail[0].width / 2 + "px",
  });
}
