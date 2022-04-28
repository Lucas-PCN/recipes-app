import React from 'react';
// import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import Footer from '../components/Footer';

function Explorer() {
  // const history = useHistory();
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
        // onClick={ history.push('/explore/foods') }
      >
        Explore Foods
      </button>
      <button
        type="button"
        data-testid="explore-drinks"
        // onClick={ history.push('/explore/drinks') }
      >
        Explore Drinks
      </button>
      <Footer />
    </div>
  );
}

export default Explorer;
