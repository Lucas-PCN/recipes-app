/* eslint-disable max-lines */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputText, setInputText] = useState('');
  const [resultDataMeals, setResultDataMeals] = useState([]);
  const [resultDataDrinks, setResultDataDrinks] = useState([]);
  const [resultArea, setResultArea] = useState([]);
  const [resultAPIdrinks, setResultAPIdrinks] = useState([]);
  const [resultAPIfoods, setResultAPIfoods] = useState([]);
  const [filterState, setFilterState] = useState([]);
  const [resultAPIfoodsCategories, setResultAPIfoodsCategories] = useState([]);
  const [resultAPIdrinksCategories, setResultAPIdrinksCategories] = useState([]);
  const [resultAPIfoodsCategoriesSelected,
    setResultAPIfoodsCategoriesSelected] = useState([]);
  const [resultAPIdrinksCategoriesSelected,
    setResultAPIdrinksCategoriesSelected] = useState([]);

  const nullAlert = 'Sorry, we haven\'t found any recipes for these filters.';

  async function fetchFoodsCategoriesSelected(category) {
    const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

    const response = await fetch(URL);
    const data = await response.json();
    setResultAPIfoodsCategoriesSelected(data.meals);
  }

  async function fetchDrinksCategoriesSelected(category) {
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;

    const response = await fetch(URL);
    const data = await response.json();
    setResultAPIdrinksCategoriesSelected(data.drinks);
  }

  async function fetchFoodsCategories() {
    const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

    const response = await fetch(URL);
    const data = await response.json();
    setResultAPIfoodsCategories(data.meals);
  }

  async function fetchDrinksCategories() {
    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

    const response = await fetch(URL);
    const data = await response.json();
    setResultAPIdrinksCategories(data.drinks);
  }

  async function fetchSearchFoods() {
    const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

    const response = await fetch(URL);
    const data = await response.json();
    setResultAPIfoods(data.meals);
  }

  async function fetchSearchDrinks() {
    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

    const response = await fetch(URL);
    const data = await response.json();
    setResultAPIdrinks(data.drinks);
  }

  useEffect(() => {
    fetchSearchDrinks();
    fetchSearchFoods();
    fetchFoodsCategories();
    fetchDrinksCategories();
  }, []);

  async function fetchSearchByName(name) {
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;

    const response = await fetch(URL);
    const data = await response.json();
    if (data.meals) {
      setResultDataMeals(data.meals);
    } else {
      setResultDataMeals([]);
      global.alert(nullAlert);
    }
  }

  async function fetchSearchByNationalitie() {
    const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

    const response = await fetch(URL);
    const data = await response.json();
    return data;
  }

  async function fetchSearchByIngredients(ingredient) {
    const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

    const response = await fetch(URL);
    const data = await response.json();
    if (data.meals) {
      setResultDataMeals(data.meals);
    } else {
      setResultDataMeals([]);
      global.alert(nullAlert);
    }
  }

  async function fetchSearchByFirstLetter(letter) {
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;

    const response = await fetch(URL);
    const data = await response.json();
    if (data.meals) {
      setResultDataMeals(data.meals);
    } else {
      setResultDataMeals([]);
      global.alert(nullAlert);
    }
  }

  async function fetchSearchByNameDrinks(name) {
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;

    const response = await fetch(URL);
    const data = await response.json();
    setResultDataDrinks(data.drinks);
    console.log(data);
    if (data.drinks) {
      setResultDataDrinks(data.drinks);
    } else {
      setResultDataDrinks([]);
      global.alert(nullAlert);
    }
  }

  async function fetchSearchByIngredientsDrinks(ingredient) {
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;

    const response = await fetch(URL);
    const data = await response.json();
    if (data.drinks) {
      setResultDataDrinks(data.drinks);
    } else {
      setResultDataDrinks([]);
      global.alert(nullAlert);
    }
  }

  async function fetchSearchByFirstLetterDrinks(letter) {
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;

    const response = await fetch(URL);
    const data = await response.json();
    if (data.drinks) {
      setResultDataDrinks(data.drinks);
    } else {
      setResultDataDrinks([]);
      global.alert(nullAlert);
    }
  }

  async function fetchAleatoryFoodsByIngredients() {
    const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';

    const response = await fetch(URL);
    const data = await response.json();
    return data;
  }

  async function fetchAleatoryDrinksByIngredients() {
    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

    const response = await fetch(URL);
    const data = await response.json();
    return data;
  }

  async function fetchAleatoryFoodsByNationalities() {
    const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';

    const response = await fetch(URL);
    const data = await response.json();
    return data;
  }

  async function fetchAFoodsByArea(nationalitie) {
    const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${nationalitie}`;

    const response = await fetch(URL);
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    const aleatoryFoodsByNationalities = async () => {
      const data = await fetchAleatoryFoodsByNationalities();
      setResultArea(data.meals);
    };
    aleatoryFoodsByNationalities();
  }, []);

  useEffect(() => {
    const aleatoryFoodsIngredients = async () => {
      const data = await fetchAleatoryFoodsByIngredients();
      setResultDataMeals(data.meals);
    };
    aleatoryFoodsIngredients();
  }, []);

  useEffect(() => {
    const aleatoryDrinksIngredients = async () => {
      const data = await fetchAleatoryDrinksByIngredients();
      setResultDataDrinks(data.drinks);
    };
    aleatoryDrinksIngredients();
  }, []);

  const contextValue = {
    disabled,
    setDisabled,
    email,
    setEmail,
    password,
    setPassword,
    inputText,
    setInputText,
    resultAPIdrinks,
    resultAPIfoods,
    fetchSearchByName,
    fetchSearchByNameDrinks,
    fetchSearchByIngredientsDrinks,
    fetchSearchByIngredients,
    fetchSearchByFirstLetter,
    fetchSearchByFirstLetterDrinks,
    fetchAleatoryFoodsByIngredients,
    fetchAFoodsByArea,
    fetchSearchByNationalitie,
    fetchSearchDrinks,
    fetchSearchFoods,
    fetchFoodsCategoriesSelected,
    fetchDrinksCategoriesSelected,
    resultDataMeals,
    resultDataDrinks,
    resultAPIfoodsCategories,
    resultAPIdrinksCategories,
    resultAPIfoodsCategoriesSelected,
    resultAPIdrinksCategoriesSelected,
    resultArea,
    filterState,
    setFilterState,
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
