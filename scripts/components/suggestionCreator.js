"use-strict";

function createSuggestion(suggestionData, parentContainer) {
  const suggestionContainer = elementConstructor("div", parentContainer);
  addStyle(suggestionContainer, ["suggestion-container"]);

  const imageLink = elementConstructor("a", suggestionContainer, {
    href: suggestionData.url,
    target: "_blank",
    title: suggestionData.name,
  });

  const imageContainer = elementConstructor("div", imageLink);

  const image = elementConstructor("span", imageContainer);

  addStyle(image, ["suggestion-image"], {
    backgroundImage: "url(" + suggestionData.thumbnail[0].url + ")",
    height: suggestionData.thumbnail[0].height / 2 + "px",
    width: suggestionData.thumbnail[0].width / 2 + "px",
  });

  const textsLink = elementConstructor("a", suggestionContainer, {
    href: suggestionData.url,
    target: "_blank",
    title: suggestionData.name,
  });

  const textsContainer = elementConstructor("span", textsLink);
  addStyle(textsContainer, ["texts-container"]);

  const titleContainer = elementConstructor(
    "span",
    textsContainer,
    null,
    suggestionData.name
  );
  addStyle(titleContainer, ["title-container"], {
    maxWidth: suggestionData.thumbnail[0].width / 2 + "px",
  });

  if (suggestionData.categories) {
    let categoriesText = "";

    for (var i = 0; i < suggestionData.categories.length; i++) {
      if (i > 0 && i < suggestionData.categories.length) {
        categoriesText += " | ";
      }
      categoriesText += suggestionData.categories[i];
    }
    const categories = elementConstructor(
      "span",
      textsContainer,
      null,
      categoriesText
    );
    addStyle(categories, ["categories-container"]);
  }

  const brandContainer = elementConstructor(
    "span",
    textsContainer,
    null,
    suggestionData.branding + " | " + suggestionData.origin
  );
  addStyle(brandContainer, ["brand-container"], {
    maxWidth: suggestionData.thumbnail[0].width / 2 + "px",
  });

  parentContainer.appendChild(suggestionContainer);
}
