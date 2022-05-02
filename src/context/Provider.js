import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchSearchByName from '../services/fetchSearchByName';
import fetchSearchByNameDrinks from '../services/fetchSearchByName_Drinks';
import fetchSearchByIngredients from '../services/fetchSearchByIngredient';
import fetchSearchByIngredientsDrinks from '../services/fetchSearchByIngredients_Drinks';
import fetchSearchByFirstLetter from '../services/fetchSearchByFirstLetter';
import fetchSearchByFirstLetterDrinks from '../services/fetchSearchByFirstLetter_Drinks';

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
  };

  async function fetchByName() {
    const fetch = await fetchSearchByName();
    setResultAPIbyName(fetch);
  }
  async function fetchByNameDrinks() {
    const fetch = await fetchSearchByNameDrinks();
    setResultAPIbyNameDrinks(fetch);
  }
  async function fetchByIngredient() {
    const fetch = await fetchSearchByIngredients();
    setResultAPIbyIngredient(fetch);
  }
  async function fetchByIngredientDrinks() {
    const fetch = await fetchSearchByIngredientsDrinks();
    setResultAPIbyIngredientDrinks(fetch);
  }
  async function fetchByLetter() {
    const fetch = await fetchSearchByFirstLetter();
    setResultAPIbyLetter(fetch);
  }
  async function fetchByLetterDrinks() {
    const fetch = await fetchSearchByFirstLetterDrinks();
    setResultAPIbyLetterDrinks(fetch);
  }

  useEffect(() => {
    fetchByName();
    fetchByIngredient();
    fetchByLetter();
    fetchByIngredientDrinks();
    fetchByNameDrinks();
    fetchByLetterDrinks();
  }, []);

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
