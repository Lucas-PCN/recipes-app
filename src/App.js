import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreDrinksIngredients from './pages/ExploreDrinksIngredients';
import ExploreFoodsIngredients from './pages/ExploreFoodsIngredients';
import ExploreFoodsNationalities from './pages/ExploreFoodsNationalities';
import FoodDetails from './pages/FoodDetails';
import DrinkDetails from './pages/DrinkDetails';
import DrinkDetailsInProgress from './pages/DrinkDetailsInProgress';
import FoodDetailsInProgress from './pages/FoodDetailsInProgress';
import Provider from './context/Provider';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Provider>
          {/* <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
          <Route exact path="/done-recipes" component={ DoneRecipes } /> */}
          <Route exact path="/profile" component={ Profile } />
          <Route
            exact
            path="/explore/foods/nationalities"
            component={ ExploreFoodsNationalities }
          />
          <Route
            exact
            path="/explore/drinks/ingredients"
            component={ ExploreDrinksIngredients }
          />
          <Route
            exact
            path="/explore/foods/ingredients"
            component={ ExploreFoodsIngredients }
          />
          <Route exact path="/explore/drinks" component={ ExploreDrinks } />
          <Route exact path="/explore/foods" component={ ExploreFoods } />
          <Route exact path="/explore" component={ Explore } />
          <Route
            exact
            path="/drinks/:id_da_receita/in-progress"
            component={ DrinkDetailsInProgress }
          />
          <Route
            exact
            path="/foods/:id_da_receita/in-progress"
            component={ FoodDetailsInProgress }
          />
          <Route exact path="/drinks/:id_da_receita" component={ DrinkDetails } />
          <Route exact path="/foods/:id_da_receita" component={ FoodDetails } />
          <Route exact path="/drinks" component={ Drinks } />
          <Route exact path="/foods" component={ Foods } />
          <Route exact path="/" component={ Login } />
        </Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
