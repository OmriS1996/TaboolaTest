function createSuggestionLink(parentContainer, suggestionData) {
  return elementConstructor("a", {
    elementParent: parentContainer,
    attributesObject: {
      href: suggestionData.url,
      target: "_blank",
      title: suggestionData.name,
    },
  });
}
