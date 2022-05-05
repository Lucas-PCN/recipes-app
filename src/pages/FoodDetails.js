import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import MyContext from '../context/MyContext';

function FoodDetails() {
  const { setResultDataMeals, resultDataMeals } = useContext(MyContext);
  const { id_da_receita: id } = useParams();

  async function mealsIdAPI() {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    console.log(data.meals);
    setResultDataMeals(data.meals);
  }

  useEffect(() => {
    mealsIdAPI();
    console.log(id);
  }, []);

  useEffect(() => {
    console.log(resultDataMeals);
  }, [resultDataMeals]);

  return (
    <>
      <img
        data-testid="recipe-photo"
        alt="Recipe result"
      />
      <h1 data-testid="recipe-title">Title a ser inserido</h1>
      <button
        type="button"
        data-testid="share-btn"
        alt="Share button"
      >
        <img src={ shareIcon } alt="shareIcon" />
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
        alt="favorite button"
      >
        <img src={ whiteHeartIcon } alt="whiteHeartIcon" />
      </button>
      <p data-testid="recipe-category">Texto a ser inserido</p>
      <ul>
        Ingredients
        {
          resultDataMeals.map((index) => (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              teste
            </li>
          ))
        }
      </ul>
      <p data-testid="instructions">Instructions a serem inseridas</p>
      {/* Inserir tag vídeo aqui */}
      {/* {
        resultDataMeals.map((index) => (
          <img
            key={ index }
            data-testid={ `${index}-recomendation-card` }
            alt="drink"
          />
        ))
      } */}
      <button
        type="button"
        data-testid="start-recipe-btn"
        alt="Start recipe"
      >
        Start recipe
      </button>
    </>
  );
}

export default FoodDetails;
