const params = new URLSearchParams(window.location.search);
const cocktailId = params.get('id');

fetch('js/cocktails.json')
  .then(r => r.json())
  .then(data => {
    const info = data.drinks.find(dr => dr.idDrink === cocktailId);
    if (info) {
      infoAppend(info);
    }
  });

function infoAppend(info) {
  document.querySelector('.cocktail-info__image').src = info.strImage;
  document.querySelector('.cocktail-info__desk').textContent = info.strDescription;
  document.querySelector('.cocktail-info__name').textContent = 'Коктейль ' + info.strDrink;
  (info.strIngredients).forEach(ing => {
    let oneIng = document.createElement('li');
    oneIng.textContent = ing;
    oneIng.classList = 'cocktail-info__ing-value ';
    document.querySelector('.cocktail-info__ing-list').append(oneIng);
  });
  (info.strInstructions).forEach(inst => {
    let oneinst = document.createElement('li');
    oneinst.textContent = inst;
    oneinst.classList = 'cocktail-info__recept';
    document.querySelector('.cocktail-info__recept-title').append(oneinst);
  });

} 