function suggestionImage(parentContainer, suggestionData) {
  const imageLink = createSuggestionLink(parentContainer, suggestionData);

  const imageContainer = elementConstructor("div", {
    elementParent: imageLink,
  });

  const image = elementConstructor("span", {
    elementParent: imageContainer,
  });

  addStyle(image, ["suggestion-image"], {
    backgroundImage: "url(" + suggestionData.thumbnail[0].url + ")",
    height: suggestionData.thumbnail[0].height / 2 + "px",
    width: suggestionData.thumbnail[0].width / 2 + "px",
  });
}
