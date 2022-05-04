import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyContext from '../context/MyContext';

function Foods() {
  const twelve = 12;
  const { resultAPIfoods, resultDataMeals, filterState } = useContext(MyContext);
  const twelveFirsts = resultAPIfoods.slice(0, twelve);
  return (
    <>
      <Header title="Foods" shouldRenderMagnifier />
      {
        filterState === true ? resultDataMeals.slice(0, twelve).map((element, index) => (
          <div key={ index } data-testid={ `${index}-recipe-card` }>
            <img
              src={ element.strMealThumb }
              alt="drink"
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>
              { element.strMeal }
            </p>
          </div>
        ))
          : twelveFirsts.map((element, index) => (
            <div key={ index } data-testid={ `${index}-recipe-card` }>
              <img
                src={ element.strMealThumb }
                alt="drink"
                data-testid={ `${index}-card-img` }
              />
              <p data-testid={ `${index}-card-name` }>
                { element.strMeal }
              </p>
            </div>
          ))
      }
      <Footer />
    </>
  );
}

export default Foods;
