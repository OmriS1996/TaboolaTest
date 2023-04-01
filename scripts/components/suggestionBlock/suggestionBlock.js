"use-strict";

function createSuggestion(suggestionData, parentContainer) {
  const suggestionContainer = elementConstructor("div", {
    elementParent: parentContainer,
  });
  addStyle(suggestionContainer, ["suggestion-container"]);

  suggestionImage(suggestionContainer, suggestionData);

  createSuggestionTexts(suggestionContainer, suggestionData);

  parentContainer.appendChild(suggestionContainer);
}
