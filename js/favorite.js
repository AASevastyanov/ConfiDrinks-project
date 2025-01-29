let favor = JSON.parse(localStorage.getItem('favorite')) || [];

for (let cId of favor) {
  fetch('js/cocktails.json')
    .then(res => res.json())
    .then(data => {
      let currentDrink = data.drinks.find(dr => dr.idDrink === cId);
      if (currentDrink) {
        createCocktailCard(currentDrink);
      }
    });
}

function createCocktailCard(cocktail) {

  const card = document.createElement('div');
  card.classList = 'cocktails__block';

  const img = document.createElement('img');
  img.classList = 'cocktails__block-image';
  img.src = cocktail.strImage;
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
        <input class="fav-checkbox" type="checkbox" checked>
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

  const checkbox = card.querySelector('.fav-checkbox');
  checkbox.addEventListener('click', () => {
    if (checkbox.checked == false) {
      console.log('123')
      favor = favor.filter(id => id !== cocktail.idDrink);
      localStorage.setItem('favorite', JSON.stringify(favor))
    }
  });


  document.getElementById('coct-page').appendChild(card);

  card.addEventListener('click', (event) => {
    if (!event.target.closest('.list__note')) {
      window.location.href = `cocktail.html?id=${cocktail.idDrink}`;
    }
  });
}