import React from 'react';
import profileIcon from '../images/profileIcon.svg';

function Explorer() {
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
        <h2 data-testid="page-title">Explore</h2>
      </header>
      <button
        type="button"
        data-testid="explore-foods"
      >
        Explore Foods
      </button>
      <button
        type="button"
        data-testid="explore-drinks"
      >
        Explore Drinks
      </button>
    </div>
  );
}

export default Explorer;
