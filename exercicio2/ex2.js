import { drinks } from '../data.js';

document.getElementById('criarDrink').addEventListener('click', () => {
  const frutaSelecionada = document.getElementById('fruta').value;
  const destiladoSelecionado = document.getElementById('destilado').value;

  const drinkEncontrado = drinks.find(drink => 
    drink.fruit === frutaSelecionada && drink.distilled === destiladoSelecionado
  );

  const resultadoContainer = document.getElementById('resultado');
  resultadoContainer.innerHTML = '';

  if (drinkEncontrado) {
    const drinkItem = document.createElement('div');
    drinkItem.classList.add('drink-item');

    const drinkText = document.createElement('div');
    drinkText.classList.add('drink-item-box-texts');
    const nomeDrink = document.createElement('h2');
    nomeDrink.textContent = drinkEncontrado.name;
    const descricao = document.createElement('p');
    descricao.textContent = drinkEncontrado.description;
    
    drinkText.appendChild(nomeDrink);
    drinkText.appendChild(descricao);
    drinkItem.appendChild(drinkText);

    resultadoContainer.appendChild(drinkItem);
  } else {
    const erroMensagem = document.createElement('p');
    erroMensagem.textContent = 'Drink não encontrado para os ingredientes selecionados.';
    resultadoContainer.appendChild(erroMensagem);
  }
});
