function showCardElementCreation(show) {
  let showItem = document.createElement('li');
  if (isFavShow(show)) {
    showItem.classList.add('show__item', 'js-show', 'show__item--marked');
  } else {
    showItem.classList.add('show__item', 'js-show');
  }
  showItem.dataset.id = show.show.id;
  showsContainer.appendChild(showItem);
  return showItem;
}

function favCardElementCreation(fav) {
  let favItem = document.createElement('li');
  favItem.classList.add('show__item', 'show__fav', 'js-fav');
  favItem.dataset.id = fav.show.id;
  favoritesContainer.appendChild(favItem);
  return favItem;
}

function showCardTitle(show, showItem) {
  let showTitleElement = document.createElement('h3');
  showTitleElement.classList.add('show__item--title');
  showItem.appendChild(showTitleElement);
  let showTitleContent = document.createTextNode(show.show.name);
  showTitleElement.appendChild(showTitleContent);
}

function showCardImage(show, showItem) {
  let showImage = document.createElement('img');
  showImage.classList.add('show__item--image');
  if (show.show.image === null) {
    showImage.src =
      'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
  } else {
    showImage.src = show.show.image.medium;
  }
  showImage.alt = show.show.name;
  showImage.title = show.show.name;
  showItem.appendChild(showImage);
}

function isFavShow(show) {
  const favoriteFound = favorites.find((favorite) => {
    return favorite.show.id === show.show.id;
  });
  if (favoriteFound === undefined) {
    return false;
  } else {
    return true;
  }
}
