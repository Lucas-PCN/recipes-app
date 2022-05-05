import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyContext from '../context/MyContext';

function Foods() {
  const [auxState, setAuxState] = useState(false);
  const [categorySelected, setCategorySelected] = useState('');
  const twelve = 12;
  const five = 5;
  const { resultAPIfoods,
    resultAPIfoodsCategories,
    fetchFoodsCategoriesSelected,
    resultAPIfoodsCategoriesSelected,
    resultDataMeals,
    filterState } = useContext(MyContext);
  const twelveFirsts = resultAPIfoods.slice(0, twelve);
  const fiveFirsts = resultAPIfoodsCategories.slice(0, five);
  const twelveFirstsCategory = resultAPIfoodsCategoriesSelected.slice(0, twelve);

  if (auxState === true) {
    return (
      <>
        <Header title="Foods" shouldRenderMagnifier />
        <div>
          <button
            type="button"
            data-testid="All-category-filter"
            value="allButton"
            onClick={ () => setAuxState(false) }
          >
            All
          </button>
          {
            fiveFirsts.map((element, index) => (
              <button
                key={ index }
                type="button"
                data-testid={ `${element.strCategory}-category-filter` }
                value={ element.strCategory }
                onClick={ ({ target }) => {
                  fetchFoodsCategoriesSelected(target.value);
                  if (element.strCategory === categorySelected) {
                    setAuxState(false);
                  } else {
                    setAuxState(true);
                    setCategorySelected(element.strCategory);
                  }
                } }
              >
                { element.strCategory }
              </button>
            ))
          }
        </div>
        {
          filterState === true
            ? resultDataMeals.slice(0, twelve).map((element, index) => (
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
            : twelveFirstsCategory.map((element, index) => (
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
        <button
          type="button"
          data-testid="All-category-filter"
          value="allButton"
          onClick={ () => setAuxState(false) }
        >
          All
        </button>
        {
          fiveFirsts.map((element, index) => (
            <button
              key={ index }
              type="button"
              data-testid={ `${element.strCategory}-category-filter` }
              value={ element.strCategory }
              onClick={ ({ target }) => {
                fetchFoodsCategoriesSelected(target.value);
                setAuxState(true);
                setCategorySelected(element.strCategory);
              } }
            >
              { element.strCategory }
            </button>
          ))
        }
      </div>
      {
        filterState === true ? resultDataMeals.slice(0, twelve).map((element, index) => (
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
