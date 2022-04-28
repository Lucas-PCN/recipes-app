import React from 'react';
import Header from '../components/Header';
// import { useHistory } from 'react-router-dom';
// import drinkIcon from '../images/drinkIcon.svg';
// import exploreIcon from '../images/exploreIcon.svg';
// import mealIcon from '../images/mealIcon.svg';

function Explore() {
  // const history = useHistory();
  return (
    <div>
      <Header title="Explore" shouldRenderMagnifier={ false } />
      {/* <button
        type="button"
        data-testid="explore-foods"
        onClick={ history.push() }
      >
        Explore Foods
      </button>
      <button
        type="button"
        data-testid="explore-drinks"
        onClick={ history.push() }
      >
        Explore Drinks
      </button>
      <footer data-testid="footer">
        <button
          type="button"
          data-testid="drinks-bottom-btn"
          src={ drinkIcon }
        >
          <img src={ drinkIcon } alt="drinkIcon" />
        </button>
        <button
          type="button"
          data-testid="explore-bottom-btn"
          src={ exploreIcon }
        >
          <img src={ exploreIcon } alt="exploreIcon" />
        </button>
        <button
          type="button"
          data-testid="food-bottom-btn"
          src={ mealIcon }
        >
          <img src={ mealIcon } alt="mealIcon" />
        </button>
      </footer> */}
    </div>
  );
}

export default Explore;
