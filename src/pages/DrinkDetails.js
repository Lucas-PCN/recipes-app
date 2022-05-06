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

  async function drinksIdAPI() {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    console.log(data.drinks);
    setResultDataID(data.drinks);
  }
  const history = useHistory();
  useEffect(() => {
    drinksIdAPI();
  }, []);
  useEffect(() => {
    console.log(resultDataID);
  }, [resultDataID]);

  function changeFavoriteState() {
    setFavoriteState(!favoriteState);
    console.log(favoriteState);
  }

  const favorite = favoriteState ? blackHeartIcon
    : whiteHeartIcon;

  function handleClick() {
    history.push(`/drinks/${id}/in-progress`);
  }
  return (
    <>
      {
        resultDataID.map((element, index) => (
          <div key={ index }>
            <img
              src={ element.strDrinkThumb }
              data-testid="recipe-photo"
              alt="Recipe result"
            />
            <h1
              data-testid="recipe-title"
            >
              {element.strDrink}
            </h1>
            <p
              data-testid="recipe-category"
            >
              {element.strAlcoholic}
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
              <img
                src={ favorite }
                alt="Favorite button"
              />
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
            <div>
              <img
                alt="drink"
              />
            </div>
          </div>
        ))
      }
      {
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
