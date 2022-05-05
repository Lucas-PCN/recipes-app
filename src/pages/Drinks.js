import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyContext from '../context/MyContext';

function Drinks() {
  const [auxState, setAuxState] = useState(false);
  const twelve = 12;
  const five = 5;
  const { resultAPIdrinks,
    filterState,
    resultDataDrinks,
    resultAPIdrinksCategories,
    fetchDrinksCategoriesSelected,
    resultAPIdrinksCategoriesSelected } = useContext(MyContext);
  const twelveFirsts = resultAPIdrinks.slice(0, twelve);
  const fiveFirsts = resultAPIdrinksCategories.slice(0, five);
  const twelveFirstsCategory = resultAPIdrinksCategoriesSelected.slice(0, twelve);
  const filterTwelve = resultDataDrinks.slice(0, twelve);

  if (auxState === true) {
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
                value={ element.strCategory }
                onClick={ ({ target }) => fetchDrinksCategoriesSelected(target.value)
              && setAuxState(true) }
              >
                { element.strCategory }
              </button>
            ))
          }
        </div>
        {
          filterState === true
            ? resultDataDrinks.slice(0, twelve).map((element, index) => (
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
            : twelveFirstsCategory.map((element, index) => (
              <div key={ element.idDrink } data-testid={ `${index}-recipe-card` }>
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
              value={ element.strCategory }
              onClick={ ({ target }) => fetchDrinksCategoriesSelected(target.value)
              && setAuxState(true) }
            >
              { element.strCategory }
            </button>
          ))
        }
      </div>
      {
        filterState === true ? filterTwelve.map((element, index) => (
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
          : twelveFirsts.map((element, index) => (
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
