import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import MyContext from '../context/MyContext';

function FoodDetails() {
  const { favoriteState, setFavoriteState } = useContext(MyContext);
  const [resultDataID, setResultDataID] = useState([]);
  const { id_da_receita: id } = useParams();

  async function mealsIdAPI() {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    console.log(data.meals);
    setResultDataID(data.meals);
  }
  const history = useHistory();
  useEffect(() => {
    mealsIdAPI();
  }, []);
  useEffect(() => {
    console.log(resultDataID);
  }, [resultDataID]);

  function handleClick() {
    history.push(`/foods/${id}/in-progress`);
  }

  function changeFavoriteState() {
    setFavoriteState(!favoriteState);
    console.log(favoriteState);
  }

  const favorite = favoriteState ? blackHeartIcon
    : whiteHeartIcon;

  return (
    <>
      {
        resultDataID.map((element, index) => (
          <div key={ index }>
            <img
              src={ element.strMealThumb }
              data-testid="recipe-photo"
              alt="Recipe result"
            />
            <h1
              data-testid="recipe-title"
            >
              {element.strMeal}
            </h1>
            <p
              data-testid="recipe-category"
            >
              {element.strCategory}
            </p>
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
              onClick={ changeFavoriteState }
            >
              <img src={ favorite } alt="Favorite button" />
            </button>
            <ul>
              {' '}
              Ingredients
              <li
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                {}
              </li>
            </ul>
            <h1>Instructions</h1>
            <p
              data-testid="instructions"
            >
              {element.strInstructions}
            </p>
            <iframe
              title="video"
              id="ytplayer"
              type="text/html"
              width="640"
              height="360"
              src={ element.strYoutube }
              frameBorder="0"
            />
            <div>
              <img
                alt="food"
              />
            </div>
          </div>
        ))
      }
      <button
        className="startButton"
        type="button"
        data-testid="start-recipe-btn"
        alt="Start recipe"
        onClick={ handleClick }
      >
        Start recipe
      </button>
    </>
  );
}

export default FoodDetails;
