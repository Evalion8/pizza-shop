import React from 'react';

function Categories({value , onChangeCategory}) {
  
  const categorylist = ['Все', 'Мясные', 'Гриль', 'Острые', 'Закрытые'];
  

  return (
    <div className="categories">
      <ul>
        {categorylist.map((categoryName, i) => (
          <li key={i}
            onClick={() => onChangeCategory(i)}
            className={value === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
