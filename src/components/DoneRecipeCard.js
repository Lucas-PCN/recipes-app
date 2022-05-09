import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

function DoneRecipeCard(props) {
  const { doneRecipe: {
    id, type,
    nationality, category,
    alcoholicOrNot, name,
    image, doneDate,
    tags }, index } = props;

  return (
    type === 'food'
      ? (
        <div>
          <Link to={ `/foods/${id}` } key={ name }>
            <div>
              <img
                src={ image }
                alt="Recipe"
                data-testid={ `${index}-horizontal-image` }
              />
            </div>
            <div>
              <h3 data-testid={ `${index}-horizontal-name` }>
                { name }
              </h3>
              <p data-testid={ `${index}-horizontal-top-text` }>
                { `${nationality} - ${category}` }
              </p>
              <p data-testid={ `${index}-horizontal-done-date` }>
                { doneDate.split(' ')[0] }
              </p>
              <div>
                { tags.map((tag) => {
                  if (tag) {
                    return (
                      <p
                        key={ tag }
                        data-testid={ `${index}-${tag}-horizontal-tag` }
                      >
                        { tag }
                      </p>
                    );
                  }
                  return null;
                }) }
              </div>
            </div>
          </Link>
          <button
            type="button"
            data-testid={ `${index}-horizontal-share-btn` }
            src={ shareIcon }
          >
            copy link!
          </button>
        </div>
      )
      : (
        <div>
          <Link to={ `/drinks/${id}` } key={ name }>
            <div>
              <img
                src={ image }
                alt="Recipe"
                data-testid={ `${index}-horizontal-image` }
              />
            </div>
            <div>
              <h3 data-testid={ `${index}-horizontal-name` }>
                { name }
              </h3>
              <p data-testid={ `${index}-horizontal-top-text` }>
                { alcoholicOrNot }
              </p>
              <p data-testid={ `${index}-horizontal-done-date` }>
                { doneDate.split(' ')[0] }
              </p>
            </div>
          </Link>
          <button
            type="button"
            data-testid={ `${index}-horizontal-share-btn` }
            src={ shareIcon }
          >
            copy link!
          </button>
        </div>
      )
  );
}

DoneRecipeCard.propTypes = {
  doneRecipe: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
};

export default DoneRecipeCard;
