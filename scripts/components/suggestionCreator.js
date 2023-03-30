"use-strict";

function createSuggestion(suggestionData, parentContainer) {
  const suggestionContainer = elementConstructor("div", parentContainer, [
    "suggestion-container",
  ]);

  const imageLink = elementConstructor("a", suggestionContainer, null, [
    { attributeName: "href", attributeValue: suggestionData.url },
    { attributeName: "target", attributeValue: "_blank" },
    { attributeName: "title", attributeValue: suggestionData.name },
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
    { attributeName: "title", attributeValue: suggestionData.name },
  ]);

  const textsContainer = elementConstructor("span", textsLink, [
    "texts-container",
  ]);

  const titleContainer = elementConstructor(
    "span",
    textsContainer,
    ["title-container"],
    [
      {
        attributeName: "style",
        attributeValue:
          "max-width:" + suggestionData.thumbnail[0].width / 2 + "px",
      },
    ],
    suggestionData.name
  );

  if (suggestionData.categories) {
    let categoriesText = "";

    for (var i = 0; i < suggestionData.categories.length; i++) {
      if (i > 0 && i < suggestionData.categories.length) {
        categoriesText += " | ";
      }
      categoriesText += suggestionData.categories[i];
    }
    elementConstructor(
      "span",
      textsContainer,
      ["categories-container"],
      null,
      categoriesText
    );
  }

  const brandingContainer = elementConstructor(
    "span",
    textsContainer,
    ["brand-container"],
    [
      {
        attributeName: "style",
        attributeValue:
          "max-width:" + suggestionData.thumbnail[0].width / 2 + "px",
      },
    ],
    suggestionData.branding + " | " + suggestionData.origin
  );

  parentContainer.appendChild(suggestionContainer);
}
