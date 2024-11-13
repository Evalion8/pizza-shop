import React from 'react';
import { useState, useEffect } from 'react';

import Categories from '../scss/components/Categories.jsx';
import Sort from '../scss/components/Sort.jsx';
import PizzaBlock from '../scss/components/PizzaBlock/index.jsx';
import Skeleton from '../scss/components/PizzaBlock/Skeleton.jsx';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://6729d3696d5fa4901b6e8490.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);
  return (
    <div class="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : items?.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
