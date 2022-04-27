import React from 'react';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function HeaderFoods() {
  return (
    <header>
      <button
        type="button"
        data-testid="profile-top-btn"
        src={ profileIcon }
      >
        <img src={ profileIcon } alt="profileIcon" />
      </button>
      <h2 data-testid="page-title">Foods</h2>
      <button
        type="button"
        data-testid="search-top-btn"
        src={ searchIcon }
      >
        <img src={ searchIcon } alt="searchIcon" />
      </button>
    </header>
  );
}

export default HeaderFoods;
