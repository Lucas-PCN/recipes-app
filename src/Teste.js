import { useContext } from 'react';
import MyContext from './context/MyContext';

import fetchSearchByName from './services/fetchSearchByName';
import fetchSearchByNameDrinks from './services/fetchSearchByName_Drinks';
import fetchSearchByIngredients from './services/fetchSearchByIngredient';
import fetchSearchByIngredientsDrinks from './services/fetchSearchByIngredients_Drinks';
import fetchSearchByFirstLetter from './services/fetchSearchByFirstLetter';
import fetchSearchByFirstLetterDrinks from './services/fetchSearchByFirstLetter_Drinks';

function Teste() {
  const { inputText, radioValue } = useContext(MyContext);

  const url = window.location.href;
  const urlDrinks = 'http://localhost:3000/drinks';

  if (radioValue === 'Ingredient') {
    fetchSearchByIngredients(inputText);
    if (url === urlDrinks) {
      fetchSearchByIngredientsDrinks(inputText);
    }
  }

  if (radioValue === 'Name') {
    fetchSearchByName(inputText);
    if (url === urlDrinks) {
      fetchSearchByNameDrinks(inputText);
    }
  }

  if (radioValue === 'FirstLetter') {
    fetchSearchByFirstLetter(inputText);
    if (url === urlDrinks) {
      fetchSearchByFirstLetterDrinks(inputText);
    }
    if (inputText.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    }
  }
}

export default Teste;
