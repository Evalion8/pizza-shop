import React from 'react';
import { useState, useEffect } from 'react';

import Categories from '../scss/components/Categories.jsx';
import Sort from '../scss/components/Sort.jsx';
import PizzaBlock from '../scss/components/PizzaBlock/index.jsx';
import Skeleton from '../scss/components/PizzaBlock/Skeleton.jsx';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://6729d3696d5fa4901b6e8490.mockapi.io/items?${
        categoryId > 0 ? `categoryId=${categoryId}` : ''
      }&sortBy=${sortType.sortProperty}&order=desc`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  console.log(categoryId, sortType);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(i) => setCategoryId(i)}
        />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? (
          [...new Array(8)].map((_, index) => <Skeleton key={index} />)
        ) : Array.isArray(items) ? (
          items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
        ) : (
          <div>No items available</div>
        )}
      </div>
    </div>
  );
};

export default Home;
