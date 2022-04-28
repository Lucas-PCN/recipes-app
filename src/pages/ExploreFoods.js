import React from 'react';
import Footer from '../components/Footer';
import profileIcon from '../images/profileIcon.svg';

function ExplorerFoods() {
  return (
    <div>
      <header>
        <button
          type="button"
          data-testid="profile-top-btn"
          src={ profileIcon }
        >
          <img src={ profileIcon } alt="profileIcon" />
        </button>
        <h2 data-testid="page-title">Explore Foods</h2>
      </header>
      <button
        type="button"
        data-testid="explore-by-ingredient"
      >
        By Ingredient
      </button>
      <button
        type="button"
        data-testid="explore-by-nationality"
      >
        By Nationality
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
      >
        Surprise me!
      </button>
      <Footer />
    </div>
  );
}

export default ExplorerFoods;
