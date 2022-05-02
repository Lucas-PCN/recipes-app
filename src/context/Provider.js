import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MyContext from './MyContext';

function Provider({ children }) {
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputText, setInputText] = useState('');
  const [resultAPIbyName, setResultAPIbyName] = useState([]);
  const [resultAPIbyNameDrinks, setResultAPIbyNameDrinks] = useState([]);
  const [resultAPIbyIngredient, setResultAPIbyIngredient] = useState([]);
  const [resultAPIbyIngredientDrinks, setResultAPIbyIngredientDrinks] = useState([]);
  const [resultAPIbyLetter, setResultAPIbyLetter] = useState([]);
  const [resultAPIbyLetterDrinks, setResultAPIbyLetterDrinks] = useState([]);

  async function fetchSearchByName(name) {
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;

    const response = await fetch(URL);
    const data = await response.json();
    setResultAPIbyName(data);
    console.log(data);
  }

  async function fetchSearchByNameDrinks(name) {
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;

    const response = await fetch(URL);
    const { data } = await response.json();
    setResultAPIbyNameDrinks(data);
  }

  async function fetchSearchByIngredientsDrinks(ingredient) {
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;

    const response = await fetch(URL);
    const { data } = await response.json();
    setResultAPIbyIngredientDrinks(data);
  }

  async function fetchSearchByIngredients(ingredient) {
    const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

    const response = await fetch(URL);
    const { data } = await response.json();
    setResultAPIbyIngredient(data);
  }

  async function fetchSearchByFirstLetter(letter) {
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;

    const response = await fetch(URL);
    const { data } = await response.json();
    setResultAPIbyLetter(data);
  }

  async function fetchSearchByFirstLetterDrinks(letter) {
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;

    const response = await fetch(URL);
    const { data } = await response.json();
    setResultAPIbyLetterDrinks(data);
  }

  const contextValue = {
    disabled,
    setDisabled,
    email,
    setEmail,
    password,
    setPassword,
    inputText,
    setInputText,
    resultAPIbyName,
    resultAPIbyIngredient,
    resultAPIbyLetter,
    resultAPIbyIngredientDrinks,
    resultAPIbyNameDrinks,
    resultAPIbyLetterDrinks,
    fetchSearchByName,
    fetchSearchByNameDrinks,
    fetchSearchByIngredientsDrinks,
    fetchSearchByIngredients,
    fetchSearchByFirstLetter,
    fetchSearchByFirstLetterDrinks,
  };

  return (
    <MyContext.Provider
      value={ contextValue }
    >
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
