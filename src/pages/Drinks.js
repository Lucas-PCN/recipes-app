import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyContext from '../context/MyContext';

function Drinks() {
  const twelve = 12;
  const five = 5;
  const { resultAPIdrinks, resultAPIdrinksCategoties } = useContext(MyContext);
  const twelveFirsts = resultAPIdrinks.slice(0, twelve);
  const fiveFirsts = resultAPIdrinksCategoties.slice(0, five);

  return (
    <>
      <Header title="Drinks" shouldRenderMagnifier />
      <div>
        {
          fiveFirsts.map((element, index) => (
            <button
              key={ index }
              type="button"
              data-testid={ `${element.strCategory}-category-filter` }
            >
              { element.strCategory }
            </button>
          ))
        }
      </div>
      {
        twelveFirsts.map((element, index) => (
          <div key={ index } data-testid={ `${index}-recipe-card` }>
            <img
              src={ element.strDrinkThumb }
              alt="drink"
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>
              { element.strDrink }
            </p>
          </div>
        ))
      }
      <Footer />
    </>
  );
}

export default Drinks;
