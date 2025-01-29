let favorites = JSON.parse(localStorage.getItem('favorite')) || [];
let allCocktails = []
let displayedCocktails = [];
let blocksNow = 0;
const step = 6;

function appendcocktail() {
  fetch('js/cocktails.json')
    .then(res => res.json())
    .then(data => {
      allCocktails = data.drinks;
      displayedCocktails = data.drinks;
      showNext();
    });
}


function showNext() {
  let slice = displayedCocktails.slice(blocksNow, blocksNow + step);

  slice.forEach(cocktail => {
    createCocktailCard(cocktail);
  });

  blocksNow += step;

  if (blocksNow >= displayedCocktails.length) {
    document.getElementById('show-more').style.display = 'none';
  }
}


function createCocktailCard(cocktail) {

  const card = document.createElement('div');
  card.classList = 'cocktails__block';

  const img = document.createElement('img');
  img.classList = 'cocktails__block-image';
  img.src = cocktail.strImage;
  img.alt = 'Фото коктейля';
  card.appendChild(img);

  const name = document.createElement('h2');
  name.classList = 'cocktails__name';
  name.innerHTML = cocktail.strDrink;
  card.appendChild(name);

  const description = document.createElement('p');
  description.classList = 'cocktails__about';
  description.innerHTML = cocktail.strDescription || "No instructions";;
  card.appendChild(description);

  const favorite = document.createElement('span');
  favorite.innerHTML = `
    <div class="list__note favorite">
      <label class="ui-bookmark">
        <input class="fav-checkbox" type="checkbox" >
        <div class="bookmark">
          <svg viewBox="0 0 32 32">
            <g>
              <path d="M27 4v27a1 1 0 0 1-1.625.781L16 24.281l-9.375 7.5A1 1 0 0 1 5 31V4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4z"></path>
            </g>
          </svg>
        </div>
      </label>
    </div>`
  card.appendChild(favorite)

  document.getElementById('coct-page').appendChild(card);

  const checkbox = card.querySelector('.fav-checkbox');
  checkbox.addEventListener('click', (event) => {
    if (checkbox.checked) {
      favorites.push(cocktail.idDrink);
    } else {
      favorites = favorites.filter(id => id !== cocktail.idDrink);
    }
    localStorage.setItem('favorite', JSON.stringify(favorites));
  });

  if (favorites.includes(cocktail.idDrink)) {
    checkbox.checked = true;
  }

  card.addEventListener('click', (event) => {
    if (!event.target.closest('.list__note')) {
      window.location.href = `cocktail.html?id=${cocktail.idDrink}`;
    }
  });
}

function handleSearch() {
  const query = document.getElementById('searchInput').value
    .toLowerCase()
    .trim();

  blocksNow = 0;
  document.getElementById('coct-page').innerHTML = '';
  document.getElementById('show-more').style.display = 'block';

  displayedCocktails = allCocktails.filter(cocktail => {
    const nameMatch = cocktail.strDrink.toLowerCase().includes(query);
    const ingMatch = cocktail.strIngredients.some(ing =>
      ing.toLowerCase().includes(query)
    );
    return (nameMatch || ingMatch);
  });

  showNext();
}



appendcocktail()
document.getElementById('show-more').onclick = showNext;

