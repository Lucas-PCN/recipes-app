import React, { useState, useContext } from 'react';
import MyContext from '../context/MyContext';

function SearchBar() {
  const [radioValue, setRadioValue] = useState('Ingredient');
  const { inputText,
    setInputText,
    fetchSearchByName,
    fetchSearchByNameDrinks,
    fetchSearchByIngredientsDrinks,
    fetchSearchByIngredients,
    fetchSearchByFirstLetter,
    fetchSearchByFirstLetterDrinks } = useContext(MyContext);

  function targetInput({ target }) {
    setInputText(target.value);
  }

  const url = window.location.href;
  const urlDrinks = 'http://localhost:3000/drinks';
  async function searchByRadioButton() {
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

  function click() {
    searchByRadioButton();
  }
  console.log(radioValue);
  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        placeholder="Buscar"
        onChange={ targetInput }
        value={ inputText }
        id="inputText"
      />
      <label htmlFor="ingredient-search">
        <input
          type="radio"
          id="ingredient-search"
          data-testid="ingredient-search-radio"
          value="Ingredient"
          name="radioButton"
          checked={ radioValue === 'Ingredient' }
          onClick={ ({ target }) => setRadioValue(target.value) }
        />
        Ingredient
      </label>
      <label htmlFor="name-search">
        <input
          type="radio"
          id="dname-search"
          data-testid="name-search-radio"
          value="Name"
          name="radioButton"
          checked={ radioValue === 'Name' }
          onClick={ ({ target }) => setRadioValue(target.value) }
        />
        Name
      </label>
      <label htmlFor="first-letter-search">
        <input
          type="radio"
          id="first-letter-search"
          data-testid="first-letter-search-radio"
          value="FirstLetter"
          name="radioButton"
          checked={ radioValue === 'FirstLetter' }
          onClick={ ({ target }) => setRadioValue(target.value) }
        />
        First Letter
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ click }
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
