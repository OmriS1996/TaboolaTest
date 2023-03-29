const mainContainer = document.querySelector("#taboola-container");

getRecommendations().then((data) => {
  if (!data || data.list.length === 0) {
    return;
  }

  const headerContainer = document.createElement("span");
  const headerTitle = document.createElement("span");
  headerTitle.textContent = "You May Like";

  const headerLogo = document.createElement("span");
  headerLogo.textContent = "Sponsored Links by Taboola";

  const dataContainer = document.createElement("div");
  dataContainer.classList.add("data-container");

  headerContainer.appendChild(headerTitle);
  headerContainer.appendChild(headerLogo);
  mainContainer.appendChild(headerContainer);
  mainContainer.appendChild(dataContainer);

  for (let i = 0; i < data.list.length; i++) {
    createSuggestion(data.list[i], dataContainer);
  }
});

function createSuggestion(suggestionData, parentContainer) {
  const suggestionContainer = document.createElement("div");
  suggestionContainer.classList.add("suggestion-container");

  const imageLink = document.createElement("a");
  imageLink.href = suggestionData.url;

  const imageContainer = document.createElement("div");
  const image = document.createElement("span");

  image.classList.add("suggestion-image");

  image.style.backgroundImage =
    "url('" + suggestionData.thumbnail[0].url + "')";
  image.style.height = suggestionData.thumbnail[0].height / 2 + "px";
  image.style.width = suggestionData.thumbnail[0].width / 2 + "px";

  const textsLink = document.createElement("a");
  textsLink.href = suggestionData.url;

  const textsContainer = document.createElement("span");
  textsContainer.classList.add("texts-container");

  const titleContainer = document.createElement("span");
  titleContainer.classList.add("title-container");

  titleContainer.textContent = suggestionData.name;

  const brandingContainer = document.createElement("span");
  brandingContainer.textContent =
    suggestionData.branding + " | " + suggestionData.origin;

  suggestionContainer.appendChild(imageLink);
  imageLink.appendChild(imageContainer);
  imageContainer.appendChild(image);

  suggestionContainer.appendChild(textsLink);
  textsLink.appendChild(textsContainer);
  textsContainer.appendChild(titleContainer);
  textsContainer.appendChild(brandingContainer);

  parentContainer.appendChild(suggestionContainer);
}
