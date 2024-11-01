import React from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categorylist = ['Все', 'Мясные', 'Гриль', 'Острые', 'Закрытые'];
  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div class="categories">
      <ul>
        {categorylist.map((value, i) => (
          <li
            onClick={() => onClickCategory(i)}
            className={activeIndex === i ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
