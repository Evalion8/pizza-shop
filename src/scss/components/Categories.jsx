import React from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categorylist = ['Все', 'Мясные', 'Гриль', 'Острые', 'Закрытые'];
  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categorylist.map((value, i) => (
          <li key={i}
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
