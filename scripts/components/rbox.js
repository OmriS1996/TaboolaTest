"use strict";

function rboxCreator(data) {
  if (!data || !data.list || data.list.length === 0) {
    return;
  }

  const headerContainer = elementConstructor("span", {
    elementParent: mainContainer,
  });
  addStyle(headerContainer, ["header-container"]);

  const headerTitle = elementConstructor("span", {
    elementParent: headerContainer,

    text: "You May Like",
  });

  const headerLogo = elementConstructor("span", {
    elementParent: headerContainer,

    text: "Sponsored Links by Taboola",
  });

  const dataContainer = elementConstructor("div", {
    elementParent: mainContainer,
  });
  addStyle(dataContainer, ["data-container"]);

  for (var i = 0; i < data.list.length; i++) {
    createSuggestion(data.list[i], dataContainer);
  }
}
