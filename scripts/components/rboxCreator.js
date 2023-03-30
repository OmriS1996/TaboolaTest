"use strict";

function rboxCreator(error, data) {
  if (!data || data.list.length === 0) {
    return;
  }

  const headerContainer = elementConstructor("span", mainContainer, [
    "header-container",
  ]);

  const headerTitle = elementConstructor(
    "span",
    headerContainer,
    null,
    null,
    "You May Like"
  );

  const headerLogo = elementConstructor(
    "span",
    headerContainer,
    null,
    null,
    "Sponsored Links by Taboola"
  );

  const dataContainer = elementConstructor("div", mainContainer, [
    "data-container",
  ]);

  for (var i = 0; i < data.list.length; i++) {
    createSuggestion(data.list[i], dataContainer);
  }
}
