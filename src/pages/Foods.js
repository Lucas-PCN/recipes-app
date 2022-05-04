import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyContext from '../context/MyContext';

function Foods() {
  const [auxState, setAuxState] = useState(false);
  const twelve = 12;
  const five = 5;
  const { resultAPIfoods,
    resultAPIfoodsCategories,
    fetchFoodsCategoriesSelected,
    resultAPIfoodsCategoriesSelected } = useContext(MyContext);
  const twelveFirsts = resultAPIfoods.slice(0, twelve);
  const fiveFirsts = resultAPIfoodsCategories.slice(0, five);
  const twelveFirstsCategory = resultAPIfoodsCategoriesSelected.slice(0, twelve);

  if (auxState === true) {
    return (
      <>
        <Header title="Foods" shouldRenderMagnifier />
        <div>
          {
            fiveFirsts.map((element, index) => (
              <button
                key={ index }
                type="button"
                data-testid={ `${element.strCategory}-category-filter` }
                value={ element.strCategory }
                onClick={ ({ target }) => fetchFoodsCategoriesSelected(target.value)
              && setAuxState(true) }
              >
                { element.strCategory }
              </button>
            ))
          }
        </div>
        {
          twelveFirstsCategory.map((element, index) => (
            <div key={ element.idMeal } data-testid={ `${index}-recipe-card` }>
              <img
                src={ element.strMealThumb }
                alt="food"
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

  return (
    <>
      <Header title="Foods" shouldRenderMagnifier />
      <div>
        {
          fiveFirsts.map((element, index) => (
            <button
              key={ index }
              type="button"
              data-testid={ `${element.strCategory}-category-filter` }
              value={ element.strCategory }
              onClick={ ({ target }) => fetchFoodsCategoriesSelected(target.value)
              && setAuxState(true) }
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
              src={ element.strMealThumb }
              alt="food"
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
