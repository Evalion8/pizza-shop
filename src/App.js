import React from 'react';
import './_app.scss';
import Header from './scss/components/Header';
import Categories from './scss/components/Categories';
import Sort from './scss/components/Sort';
import PizzaBlock from './scss/components/PizzaBlock';

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
              <PizzaBlock />
              <PizzaBlock />
              <PizzaBlock />
              <PizzaBlock />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
