function createSuggestionBrand(parentContainer, suggestionData) {
  const brandContainer = elementConstructor("span", {
    elementParent: parentContainer,
    text: suggestionData.branding + " | " + suggestionData.origin,
  });
  addStyle(brandContainer, ["brand-container"], {
    maxWidth: suggestionData.thumbnail[0].width / 2 + "px",
  });
}
