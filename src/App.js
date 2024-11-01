import React from 'react';
import './_app.scss';
import Header from './scss/components/Header';
import Categories from './scss/components/Categories';
import Sort from './scss/components/Sort';
import PizzaBlock from './scss/components/PizzaBlock';
import pizzas from './assets/db.json';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div class="content">
          <div class="container">
            <div class="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 class="content__title">Все пиццы</h2>
            <div class="content__items">
              {pizzas.map((obj) => (
                <PizzaBlock {...obj} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
