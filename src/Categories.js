import React from 'react';

const Categories = (props) => {



  return <div className='btn-container'>
    {props.categoryList.map((category, index) => {
      return (
        <button className='filter-btn' type="button" key={index} onClick={() => { props.filterItems(category) }}>
          {category}

        </button>)
    
    })}
  </div>;
};

export default Categories;
