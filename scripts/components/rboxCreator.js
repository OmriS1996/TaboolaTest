"use strict";

function rboxCreator(data) {
  if (!data || data.list.length === 0) {
    return;
  }

  const headerContainer = elementConstructor("span", mainContainer);
  addStyle(headerContainer, ["header-container"]);

  const headerTitle = elementConstructor(
    "span",
    headerContainer,
    null,
    "You May Like"
  );

  const headerLogo = elementConstructor(
    "span",
    headerContainer,
    null,
    "Sponsored Links by Taboola"
  );

  const dataContainer = elementConstructor("div", mainContainer);
  addStyle(dataContainer, ["data-container"]);

  for (var i = 0; i < data.list.length; i++) {
    createSuggestion(data.list[i], dataContainer);
  }
}
