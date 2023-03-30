"use-strict";

function createSuggestion(suggestionData, parentContainer) {
  const suggestionContainer = elementConstructor("div", parentContainer, [
    "suggestion-container",
  ]);

  const imageLink = elementConstructor("a", suggestionContainer, null, [
    { attributeName: "href", attributeValue: suggestionData.url },
    { attributeName: "target", attributeValue: "_blank" },
  ]);

  const imageContainer = elementConstructor("div", imageLink);

  const image = elementConstructor(
    "span",
    imageContainer,
    ["suggestion-image"],
    [
      {
        attributeName: "style",
        attributeValue:
          "background-image:url('" +
          suggestionData.thumbnail[0].url +
          "'); height:" +
          suggestionData.thumbnail[0].height / 2 +
          "px; width:" +
          suggestionData.thumbnail[0].width / 2 +
          "px",
      },
    ]
  );

  const textsLink = elementConstructor("a", suggestionContainer, null, [
    { attributeName: "href", attributeValue: suggestionData.url },
    { attributeName: "target", attributeValue: "_blank" },
  ]);

  const textsContainer = elementConstructor("span", textsLink, [
    "texts-container",
  ]);

  const titleContainer = elementConstructor(
    "span",
    textsContainer,
    ["title-container"],
    null,
    suggestionData.name
  );

  const brandingContainer = elementConstructor(
    "span",
    textsContainer,
    ["brand-container"],
    null,
    suggestionData.branding + " | " + suggestionData.origin
  );

  parentContainer.appendChild(suggestionContainer);
}
