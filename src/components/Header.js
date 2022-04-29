import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import fetchSearchByName from '../services/fetchSearchByName';

function Header(props) {
  const [shouldRenderInput, handleInput] = useState(false);
  const { inputText, setInputText } = useContext(MyContext);
  const { title } = props;
  const { shouldRenderMagnifier } = props;
  const history = useHistory();

  function targetInput({ target }) {
    setInputText(target.value);
  }

  function searchByRadioButton() {
    const button = document.getElementsByName('radioButton');
    button.forEach((option) => {
      if (option.value === 'Ingredient') {
        fetchSearchByName(inputText);
      }
    });
  }

  // function click() {
  //   targetInput();
  // }

  if (shouldRenderMagnifier) {
    return (
      <header>
        <button
          type="button"
          data-testid="profile-top-btn"
          src={ profileIcon }
          onClick={ () => history.push('/profile') }
        >
          <img src={ profileIcon } alt="profileIcon" />
        </button>

        <h2 data-testid="page-title">{ title }</h2>

        <button
          type="button"
          data-testid="search-top-btn"
          src={ searchIcon }
          onClick={ () => handleInput(!shouldRenderInput) }
        >
          <img src={ searchIcon } alt="searchIcon" />
        </button>

        {shouldRenderInput && (
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
              />
              First Letter
            </label>
            <button
              type="button"
              data-testid="exec-search-btn"
              onClick={ searchByRadioButton }
            >
              Search
            </button>
          </div>
        )}
      </header>
    );
  }

  return (
    <header>
      <button
        type="button"
        data-testid="profile-top-btn"
        src={ profileIcon }
        onClick={ () => history.push('/profile') }
      >
        <img src={ profileIcon } alt="profileIcon" />
      </button>

      <h2 data-testid="page-title">{ title }</h2>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  shouldRenderMagnifier: PropTypes.bool.isRequired,
};

export default Header;
