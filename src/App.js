import React, { useEffect, useState } from 'react';
import './_app.scss';
import Header from './scss/components/Header';
import Categories from './scss/components/Categories';
import Sort from './scss/components/Sort';
import PizzaBlock from '../src/scss/components/PizzaBlock/index.jsx';

import Skeleton from './scss/components/PizzaBlock/Skeleton';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://6729d3696d5fa4901b6e8490.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setTimeout(() => {
          setItems(arr);
          setIsLoading(false);
        }, 1000);
      });
  }, []);
  return (
    <div className="App">
      <div className="wrapper">
        <Header />

        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {isLoading
                ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                : items?.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
